import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Dices,
  RefreshCw,
  ScrollText,
} from "lucide-react";

import { generateNpc } from "../utils/generateNpc";
import { validateNpcName } from "../../shared/validateNpcName";

function NpcGenerator() {
  const navigate = useNavigate();

  const [npc, setNpc] = useState(null);
  const [name, setName] = useState("");
  const [nameError, setNameError] = useState("");
  const [submitError, setSubmitError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  function rollNpc() {
    setNpc(generateNpc());
    setName("");
    setNameError("");
    setSubmitError("");
  }

  async function handleSubmit(event) {
    event.preventDefault();

    const cleanedName = name.trim();

    if (!npc || !cleanedName) {
      return;
    }

    const validation = validateNpcName(cleanedName);

    if (!validation.isValid) {
      setNameError(validation.message);
      return;
    }

    setNameError("");
    setSubmitError("");
    setIsSubmitting(true);

    try {
      const response = await fetch(
        "/.netlify/functions/submit-npc",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name: cleanedName,
            species: npc.species,
            calling: npc.calling,
            callingType: npc.callingType,
            background: npc.background,
            quirk: npc.quirk,
            company: "",
          }),
        }
      );

      const result = await response.json();

      if (!response.ok) {
        throw new Error(
          result.error ||
            "The census could not accept this citizen."
        );
      }

      navigate("/npc-generator/success", {
        state: {
          npcName: cleanedName,
        },
      });
    } catch (error) {
      setSubmitError(
        error.message ||
          "Something went wrong. Please try again."
      );
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <section
      className="npc-generator section"
      id="npc-generator"
    >
      <div className="section-heading">
        <div>
          <p className="section-kicker">
            The Calderon Census
          </p>

          <h1>Create a Citizen of Calderon</h1>
        </div>

        <p>
          Fate will determine who they are. You merely
          have the unfortunate responsibility of naming
          them.
        </p>
      </div>

      {!npc ? (
        <div className="npc-generator-intro">
          <Dices
            size={42}
            aria-hidden="true"
          />

          <h2>Roll Your Fate</h2>

          <p>
            Calderon requires citizens. Qualifications
            are apparently optional.
          </p>

          <button
            className="button primary"
            type="button"
            onClick={rollNpc}
          >
            <Dices
              size={18}
              aria-hidden="true"
            />
            Generate Citizen
          </button>
        </div>
      ) : (
        <article
          className="npc-card"
          aria-live="polite"
        >
          <p className="npc-card-label">
            Citizen Record
          </p>

          <h2>
            {name.trim() || "Unnamed Citizen"}
          </h2>

          <div className="npc-details">
            <div>
              <span>Species</span>
              <strong>{npc.species}</strong>
            </div>

            <div>
              <span>Calling</span>
              <strong>{npc.calling}</strong>

              <small>
                {npc.callingType === "class"
                  ? "Adventuring Calling"
                  : "Occupation"}
              </small>
            </div>

            <div>
              <span>Background</span>
              <strong>{npc.background}</strong>
            </div>
          </div>

          <div className="npc-quirk">
            <ScrollText
              size={20}
              aria-hidden="true"
            />

            <div>
              <span>Tragic Flaw</span>
              <p>{npc.quirk}</p>
            </div>
          </div>

          <form
            className="npc-name-form"
            onSubmit={handleSubmit}
          >
            <label htmlFor="npc-name">
              Name this citizen
            </label>

            <input
              id="npc-name"
              type="text"
              value={name}
              onChange={(event) => {
                setName(event.target.value);
                setNameError("");
                setSubmitError("");
              }}
              maxLength={80}
              placeholder="Dorbin Clasp"
              aria-invalid={
                nameError ? "true" : "false"
              }
              aria-describedby={
                nameError
                  ? "npc-name-error"
                  : undefined
              }
              required
            />

            {nameError && (
              <p
                id="npc-name-error"
                className="npc-name-error"
                role="alert"
              >
                {nameError}
              </p>
            )}

            <button
              className="button primary"
              type="submit"
              disabled={isSubmitting}
            >
              {isSubmitting
                ? "Entering the Census…"
                : "Submit to Calderon"}
            </button>

            {submitError && (
              <p
                className="npc-submit-error"
                role="alert"
              >
                {submitError}
              </p>
            )}
          </form>

          <button
            className="npc-reroll"
            type="button"
            onClick={rollNpc}
            disabled={isSubmitting}
          >
            <RefreshCw
              size={16}
              aria-hidden="true"
            />
            Roll Another Citizen
          </button>
        </article>
      )}
    </section>
  );
}

export default NpcGenerator;