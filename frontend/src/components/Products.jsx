import { mockProducts } from "../data/mockProducts";
import ProductCard from "./ProductCard";
import "../css/Products.css";

import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

import { useState } from "react";

function Products({ limit }) {
  const displayProducts = limit ? mockProducts.slice(0, limit) : mockProducts;

  const { isAdmin } = useAuth();
  const navigate = useNavigate();

  const [products, setProducts] = useState(mockProducts);
  const handleDelete = (id) => {
    setProducts((prev) => prev.filter((p) => p.id !== id)); // ← delete handler
  };

  return (
    <main className="product-container">
      <div className="d-flex justify-content-between align-items-center">
        <h3 className="product-heading">Products</h3>

        {isAdmin && (
          <button
            className="btn me-3"
            style={{
              background: "#1a4d1a",
              color: "white",
              borderRadius: "10px",
            }}
            onClick={() => navigate("/add-product")}
          >
            Add
          </button>
        )}
      </div>

      <div className="container">
        <section className="row row-cols-3 g-4">
          {displayProducts.map((p) => (
            <ProductCard
              key={p.id}
              id={p.id}
              image={p.image}
              title={p.title}
              text={`฿ ${p.price.toLocaleString()}`}
              onDelete={handleDelete}
            />
          ))}
        </section>
      </div>
    </main>
  );
}

export default Products;
