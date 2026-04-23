// components/Products.jsx
// Fetches and displays a grid of product cards
// Supports an optional limit to show only a subset of products

import ProductCard from "./ProductCard";
import "../css/Products.css";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { useState, useEffect } from "react";
import { getProducts, deleteProduct } from "../services/productService";

function Products({ limit }) {
  const { isAdmin } = useAuth();
  const navigate = useNavigate();
  const [products, setProducts] = useState([]);

  // Fetch all products from the API
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const data = await getProducts();
        setProducts(data);
      } catch (err) {
        console.error("Failed to fetch products", err);
      }
    };
    fetchProducts();
  }, []);

  // Delete a product and remove it from the local state
  const handleDelete = async (id) => {
    try {
      await deleteProduct(id);
      setProducts((prev) => prev.filter((p) => p.id !== id));
    } catch (err) {
      console.error("Failed to delete product:", err);
    }
  };

  const displayProducts = limit ? products.slice(0, limit) : products;

  return (
    <main className="product-container">
      <div className="d-flex justify-content-between align-items-center">
        <h3 className="product-heading">Products</h3>

        {/* Add product button — only visible to admin */}
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

      {/* Product grid */}
      <div className="container">
        <section className="row row-cols-3 g-4">
          {displayProducts.map((p) => (
            <ProductCard
              key={p.id}
              id={p.id}
              image={p.image}
              title={p.name}
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
