import { createClient } from "@supabase/supabase-js";

function jsonResponse(body, status = 200) {
  return new Response(JSON.stringify(body), {
    status,
    headers: {
      "Content-Type": "application/json",
      "Cache-Control": "no-store",
    },
  });
}

function cleanString(value, maxLength) {
  return typeof value === "string"
    ? value.trim().slice(0, maxLength)
    : "";
}

function isValidEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export default async function handler(request) {
  if (request.method !== "POST") {
    return jsonResponse({ error: "Method not allowed." }, 405);
  }

  const supabaseUrl = process.env.SUPABASE_URL;
  const supabaseSecretKey = process.env.SUPABASE_SECRET_KEY;

  if (!supabaseUrl || !supabaseSecretKey) {
    console.error("Missing Supabase environment variables.");

    return jsonResponse(
      { error: "Server configuration error." },
      500
    );
  }

  let body;

  try {
    body = await request.json();
  } catch {
    return jsonResponse({ error: "Invalid request body." }, 400);
  }

  // Honeypot field for bots.
  if (cleanString(body.company, 100)) {
    return jsonResponse({ ok: true });
  }

  const name = cleanString(body.name, 100);
  const email = cleanString(body.email, 254).toLowerCase();

  if (!isValidEmail(email)) {
    return jsonResponse(
      { error: "Please enter a valid email address." },
      400
    );
  }

  const supabase = createClient(
    supabaseUrl,
    supabaseSecretKey,
    {
      auth: {
        persistSession: false,
        autoRefreshToken: false,
      },
    }
  );

  const { error } = await supabase
    .from("newsletter_subscribers")
    .upsert(
      {
        name: name || null,
        email,
        status: "subscribed",
        source: "watch_and_support",
        marketing_consent: true,
        consented_at: new Date().toISOString(),
        unsubscribed_at: null,
      },
      {
        onConflict: "email",
      }
    );

  if (error) {
    console.error("Newsletter signup failed:", error);

    return jsonResponse(
      { error: "We could not complete your signup." },
      500
    );
  }

  return jsonResponse(
    {
      ok: true,
      message: "Welcome to the adventuring party!",
    },
    201
  );
}