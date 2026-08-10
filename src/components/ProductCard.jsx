import { ShoppingBag, Sparkles } from "lucide-react"

function ProductCard({ product }) {
  return (
    <article className="apothecary-product">
      <div className="apothecary-product-image">
        {product.image ? (
          <img
            src={product.image}
            alt={product.name}
          />
        ) : (
          <div className="product-placeholder">
            <Sparkles size={32} aria-hidden="true" />
            <span>Artifact image forthcoming</span>
          </div>
        )}

        {product.featured && (
          <span className="product-badge">
            Rare Find
          </span>
        )}
      </div>

      <div className="apothecary-product-content">
        <p className="product-category">
          {product.category}
        </p>

        <h3>{product.name}</h3>

        <p className="product-description">
          {product.description}
        </p>

        <div className="product-footer">
          <span className="product-price">
            ${product.price}
          </span>

          <button
            type="button"
            className="product-button"
            disabled={product.status === "coming-soon"}
          >
            <ShoppingBag size={17} aria-hidden="true" />

            {product.status === "coming-soon"
              ? "Coming Soon"
              : "Acquire"}
          </button>
        </div>
      </div>
    </article>
  )
}

export default ProductCard