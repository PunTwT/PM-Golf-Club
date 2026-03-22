import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { mockProducts } from "../data/mockProducts";
import Footer from "../components/Footer";
import "../css/ProductDetail.css";

function ProductDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const product = mockProducts.find((p) => p.id === Number(id));

  const [selectedImage, setSelectedImage] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [hand, setHand] = useState("RH");
  const [loft, setLoft] = useState("10");
  const [flex, setFlex] = useState("R");

  if (!product) return <p>Product not found.</p>;

  const images = [product.image, product.image, product.image, product.image, product.image];

  return (
    <>
      <main className="detail-container">

        <button className="detail-back" onClick={() => navigate(-1)}>
          ← Back
        </button>

        <section className="detail-card">

          <section className="detail-left">

            <div className="detail-main-img-wrap">
              <button className="detail-arrow" onClick={() => setSelectedImage((prev) => (prev === 0 ? images.length - 1 : prev - 1))}>‹</button>
              <img src={images[selectedImage]} alt={product.title} className="detail-main-img" />
              <button className="detail-arrow" onClick={() => setSelectedImage((prev) => (prev === images.length - 1 ? 0 : prev + 1))}>›</button>
            </div>

            <div className="thumbnails">
              {images.map((img, i) => (
                <img
                  key={i}
                  src={img}
                  alt={`thumbnail ${i}`}
                  className={`detail-thumb ${selectedImage === i ? "active" : ""}`}
                  onClick={() => setSelectedImage(i)}
                />
              ))}
            </div>
          </section>

          <section className="detail-right">

            <div className="detail-title-row">
              <h3 className="detail-title">{product.title}</h3>
              <span className="detail-reviews">2 reviews</span>
            </div>
            <hr />

            <p className="detail-price">฿ {product.price.toLocaleString()}</p>

            <section className="detail-options">
              <div className="option">
                <label>Hand</label>
                <select value={hand} onChange={(e) => setHand(e.target.value)}>
                  <option value="RH">RH</option>
                  <option value="LH">LH</option>
                </select>
              </div>
              <div className="option">
                <label>Loft</label>
                <select value={loft} onChange={(e) => setLoft(e.target.value)}>
                  <option value="9">9</option>
                  <option value="10">10</option>
                  <option value="10.5">10.5</option>
                  <option value="12">12</option>
                </select>
              </div>
              <div className="option">
                <label>Flex</label>
                <select value={flex} onChange={(e) => setFlex(e.target.value)}>
                  <option value="R">R</option>
                  <option value="S">S</option>
                  <option value="SR">SR</option>
                  <option value="X">X</option>
                </select>
              </div>
            </section>

            <section className="detail-actions">
              <div className="detail-quantity">
                <button onClick={() => setQuantity((q) => Math.max(1, q - 1))}>−</button>
                <span>{quantity}</span>
                <button onClick={() => setQuantity((q) => q + 1)}>+</button>
              </div>
              <button className="btn detail-add">Add to Cart</button>
            </section>

            <section className="detail-description">
              <h4 className="detail-desc-heading">Description</h4>
              <table className="detail-desc-table">
                <tbody>
                  <tr>
                    <td>Product ID :</td>
                    <td>{product.id}</td>
                  </tr>
                  <tr>
                    <td>Category :</td>
                    <td>{product.category}</td>
                  </tr>
                  <tr>
                    <td>Brand :</td>
                    <td>{product.brand}</td>
                  </tr>
                  <tr>
                    <td>In Stock :</td>
                    <td>12 Left</td>
                  </tr>
                </tbody>
              </table>
            </section>

          </section>
        </section>
      </main>

      <footer id="contact">
        <Footer />
      </footer>
    </>
  );
}

export default ProductDetail;