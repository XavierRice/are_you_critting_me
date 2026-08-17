import { useState } from "react";
import {
  Dices,
  RefreshCw,
  Sparkles,
  Skull,
} from "lucide-react";

import { generateItem } from "../utils/generateItem";

function ItemGenerator() {
  const [item, setItem] = useState(null);

  function rollItem() {
    setItem(generateItem());
  }

  return (
    <section
      className="item-generator section"
      id="item-generator"
    >
      <div className="section-heading">
        <div>
          <p className="section-kicker">
            Artifacts of Calderon
          </p>

          <h1>Forge Something Questionable</h1>
        </div>

        <p>
          The scholars of Calderon strongly recommend
          against combining unidentified magic with
          unattended weaponry. Naturally, we ignored them.
        </p>
      </div>

      {!item ? (
        <div className="item-generator-intro">
          <Dices size={42} aria-hidden="true" />

          <h2>Consult the Forge</h2>

          <p>
            Fate will provide the item. Calderon will
            provide the consequences.
          </p>

          <button
            className="button primary"
            type="button"
            onClick={rollItem}
          >
            <Dices size={18} aria-hidden="true" />
            Create Artifact
          </button>
        </div>
      ) : (
        <article
          className="artifact-card"
          aria-live="polite"
        >
          <p className="artifact-card-label">
            Registered Artifact
          </p>

          <h2>{item.title}</h2>

          <div className="artifact-details">
            <div>
              <span>Base Item</span>
              <strong>{item.baseItem}</strong>
            </div>

            <div>
              <span>Bonus or Ability</span>
              <strong>{item.bonusOrAbility}</strong>

              <small>
                {item.bonusType === "ability"
                  ? "Magical Ability"
                  : "Artifact Bonus"}
              </small>
            </div>
          </div>

          <div className="artifact-power">
            <Sparkles size={21} aria-hidden="true" />

            <div>
              <span>Artifact of Calderon</span>
              <p>{item.artifactPower}</p>
            </div>
          </div>

          <div className="artifact-curse">
            <Skull size={21} aria-hidden="true" />

            <div>
              <span>Curse</span>
              <p>{item.curse}</p>
            </div>
          </div>

          <button
            className="npc-reroll"
            type="button"
            onClick={rollItem}
          >
            <RefreshCw
              size={16}
              aria-hidden="true"
            />
            Forge Another Artifact
          </button>
        </article>
      )}
    </section>
  );
}

export default ItemGenerator;