import { createClient } from "@supabase/supabase-js";

const allowedContactTypes = new Set(["general", "booking", "partnership", "sponsorship", "press", "technical"]);

function jsonResponse(body, status = 200) {
  return new Response(JSON.stringify(body), {
    status,
    headers: { "Content-Type": "application/json", "Cache-Control": "no-store" },
  });
}

function cleanString(value, maxLength) {
  return typeof value === "string" ? value.trim().slice(0, maxLength) : "";
}

function isValidEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export default async function handler(request) {
  if (request.method !== "POST") return jsonResponse({ error: "Method not allowed." }, 405);

  const supabaseUrl = process.env.SUPABASE_URL;
  const supabaseSecretKey = process.env.SUPABASE_SECRET_KEY;
  if (!supabaseUrl || !supabaseSecretKey) return jsonResponse({ error: "Server configuration error." }, 500);

  let body;
  try { body = await request.json(); }
  catch { return jsonResponse({ error: "Invalid request body." }, 400); }

  if (cleanString(body.company, 100)) return jsonResponse({ ok: true }, 200);

  const name = cleanString(body.name, 100);
  const email = cleanString(body.email, 254).toLowerCase();
  const subject = cleanString(body.subject, 150);
  const message = cleanString(body.message, 5000);
  const requestedType = cleanString(body.contactType, 40);
  const contactType = allowedContactTypes.has(requestedType) ? requestedType : "general";
  const marketingConsent = body.marketingConsent === true;

  if (!name || !isValidEmail(email) || message.length < 10) {
    return jsonResponse({ error: "Please provide your name, a valid email address, and a message of at least 10 characters." }, 400);
  }

  const supabase = createClient(supabaseUrl, supabaseSecretKey, {
    auth: { persistSession: false, autoRefreshToken: false },
  });

  const forwardedFor = request.headers.get("x-forwarded-for") || "";
  const ipAddress = forwardedFor.split(",")[0]?.trim() || null;
  const userAgent = request.headers.get("user-agent") || null;
  const referrer = request.headers.get("referer") || null;

  const { error } = await supabase.from("contacts").insert({
    name,
    email,
    subject: subject || null,
    message,
    contact_type: contactType,
    marketing_consent: marketingConsent,
    source: "website_contact",
    status: "new",
    referrer,
    user_agent: userAgent,
    ip_address: ipAddress,
  });

  if (error) {
    console.error("Supabase insert failed:", error);
    return jsonResponse({ error: "We could not save your message. Please try again." }, 500);
  }

  return jsonResponse({ ok: true }, 201);
}
