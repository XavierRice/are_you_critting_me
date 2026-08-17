import { createClient } from "@supabase/supabase-js";
import { validateNpcName } from "../../shared/validateNpcName.js";

const supabase = createClient(
  process.env.SUPABASE_URL,
  process.env.SUPABASE_SECRET_KEY,
  {
    auth: {
      persistSession: false,
      autoRefreshToken: false,
    },
  }
);

const allowedCallingTypes = [
  "class",
  "occupation",
];

function isValidText(value, maxLength) {
  return (
    typeof value === "string" &&
    value.trim().length > 0 &&
    value.trim().length <= maxLength
  );
}

export default async (request) => {
  if (request.method !== "POST") {
    return new Response(
      JSON.stringify({
        error: "Method not allowed.",
      }),
      {
        status: 405,
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
  }

  try {
    const body = await request.json();

    const {
      name,
      species,
      calling,
      callingType,
      background,
      quirk,
      company,
    } = body;

    // Honeypot
    if (company) {
      return new Response(
        JSON.stringify({
          success: true,
        }),
        {
          status: 200,
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
    }

    // Basic field validation
    if (
      !isValidText(name, 80) ||
      !isValidText(species, 100) ||
      !isValidText(calling, 100) ||
      !isValidText(background, 100) ||
      !isValidText(quirk, 500)
    ) {
      return new Response(
        JSON.stringify({
          error:
            "The Royal Census Office could not accept this citizen.",
        }),
        {
          status: 400,
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
    }

    // Validate class vs occupation
    if (
      !allowedCallingTypes.includes(callingType)
    ) {
      return new Response(
        JSON.stringify({
          error: "Invalid calling type.",
        }),
        {
          status: 400,
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
    }

    // Server-side NPC name moderation
    const nameValidation =
      validateNpcName(name);

    if (!nameValidation.isValid) {
      return new Response(
        JSON.stringify({
          error:
            "The Royal Census Office has rejected this name.",
        }),
        {
          status: 400,
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
    }

    const { data, error } = await supabase
      .from("npc_submissions")
      .insert({
        name: name.trim(),
        species: species.trim(),
        calling: calling.trim(),
        calling_type: callingType,
        background: background.trim(),
        quirk: quirk.trim(),
        status: "submitted",
        source: "npc_generator",
      })
      .select("id, name, status")
      .single();

    if (error) {
      console.error(
        "Supabase NPC insert error:",
        error
      );

      return new Response(
        JSON.stringify({
          error:
            "The census records are temporarily unavailable.",
        }),
        {
          status: 500,
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
    }

    return new Response(
      JSON.stringify({
        success: true,
        npc: data,
      }),
      {
        status: 201,
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
  } catch (error) {
    console.error(
      "NPC submission error:",
      error
    );

    return new Response(
      JSON.stringify({
        error:
          "Something went wrong while registering this citizen.",
      }),
      {
        status: 500,
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
  }
};