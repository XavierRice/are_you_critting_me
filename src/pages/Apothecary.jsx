import {
  FlaskConical,
  ScrollText,
  Shirt,
  Sparkles,
} from "lucide-react"

import ProductCard from "../components/ProductCard"
import { products } from "../data/products"

function Apothecary() {
  return (
    <main className="apothecary-page">
      <section className="apothecary-hero">
        <div className="apothecary-glow" />

        <p className="section-kicker">
          Goods from the Second Age
        </p>

        <div className="apothecary-emblem">
          <FlaskConical size={38} aria-hidden="true" />
        </div>

        <h1>
          The Calderon
          <span> Apothecary</span>
        </h1>

        <p className="apothecary-intro">
          Curios, provisions, questionable artifacts,
          adventuring apparel, and officially sanctioned
          contraband from across Calderon.
        </p>

        <div className="apothecary-category-strip">
          <span>
            <Shirt size={16} />
            Adventurer's Uniforms
          </span>

          <span>
            <FlaskConical size={16} />
            Potions &amp; Provisions
          </span>

          <span>
            <Sparkles size={16} />
            Relics &amp; Curios
          </span>

          <span>
            <ScrollText size={16} />
            Guild Goods
          </span>
        </div>
      </section>

      <section className="apothecary-section">
        <div className="apothecary-heading">
          <div>
            <p className="section-kicker">
              Currently on the shelves
            </p>

            <h2>Goods of dubious necessity</h2>
          </div>

          <p>
            Every purchase helps keep the party adventuring,
            recording, and making increasingly poor decisions.
          </p>
        </div>

        <div className="apothecary-grid">
          {products.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
            />
          ))}
        </div>
      </section>
    </main>
  )
}

export default Apothecary