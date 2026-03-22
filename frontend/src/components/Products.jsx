import { mockProducts } from "../data/mockProducts";
import ProductCard from "./ProductCard";
import "../css/Products.css";

function Products({ limit }) {
  const displayProducts = limit ? mockProducts.slice(0, limit) : mockProducts;

  return (
    <main className="product-container">
      <h3 className="product-heading">Products</h3>

      <div className="container">
        <section className="row row-cols-3 g-4">
          {displayProducts.map((p) => (
            <ProductCard
              key={p.id}
              id={p.id}
              image={p.image}
              title={p.title}
              text={`฿ ${p.price.toLocaleString()}`}
            />
          ))}
        </section>
      </div>
    </main>
  );
}

export default Products;
