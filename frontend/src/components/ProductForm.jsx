// components/ProductForm.jsx
// Reusable form component for both adding and editing products

import { useState } from "react";
import "../css/ProductForm.css";

function ProductForm({ isEdit = false, initialData = {}, onSave, onCancel }) {

  // Form field states — pre-filled with existing data when editing
  const [name, setName] = useState(initialData.name || "");
  const [description, setDescription] = useState(initialData.description || "");
  const [productId, setProductId] = useState(initialData.code || "");
  const [brand, setBrand] = useState(initialData.brand || "");
  const [loft, setLoft] = useState(initialData.loft || "");
  const [hand, setHand] = useState(initialData.hand || "");
  const [category, setCategory] = useState(initialData.category_name || "");
  const [stock, setStock] = useState(initialData.quantity || "");
  const [price, setPrice] = useState(initialData.price || "");

  // Image URLs list — extracted from existing image objects when editing
  const [images, setImages] = useState(
    initialData.images?.map((img) => img.url) || [],
  );
  const [newUrl, setNewUrl] = useState("");

  // Add a new image URL to the list
  const handleAddUrl = () => {
    if (newUrl.trim()) {
      setImages((prev) => [...prev, newUrl.trim()]);
      setNewUrl("");
    }
  };

  const handleRemoveImage = (index) => {
    setImages((prev) => prev.filter((_, i) => i !== index));
  };

  // Maps category name to its database ID
  const categoryMap = {
    Driver: 1,
    "Fairway Wood": 2,
    "Iron Set": 3,
    Wedge: 4,
    Putter: 5,
  };

  // Collect and format all form data then pass to parent handler
  const handleSave = (e) => {
    e.preventDefault();
    onSave({
      name,
      description,
      code: productId,
      brand,
      loft: parseFloat(loft),
      hand,
      category_id: categoryMap[category] || initialData.category_id,
      quantity: parseInt(stock),
      price: parseFloat(price),
      images: images.map((url) => ({ url, name: name })),
    });
  };

  return (
    <section className="pf-bg">
      <h4 className="pf-heading">
        {isEdit ? "Edit Products" : "Add New Products"}
      </h4>

      <form className="pf-card" onSubmit={handleSave}>

        {/* Product name input */}
        <div className="mb-3">
          <label htmlFor="pf-name" className="form-label fw-semibold">
            Product Name
          </label>
          <input
            id="pf-name"
            type="text"
            className="form-control"
            placeholder="Enter Product Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        {/* Product description textarea */}
        <div className="mb-3">
          <label htmlFor="pf-desc" className="form-label fw-semibold">
            Description
          </label>
          <textarea
            id="pf-desc"
            className="form-control"
            placeholder="Product Description"
            rows={4}
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>

        {/* Product ID and Brand */}
        <div className="row mb-3">
          <div className="col">
            <label htmlFor="pf-pid" className="form-label fw-semibold">
              Product ID
            </label>
            <input
              id="pf-pid"
              type="text"
              className="form-control"
              placeholder="e.g. DV001"
              value={productId}
              onChange={(e) => setProductId(e.target.value)}
            />
          </div>
          <div className="col">
            <label htmlFor="pf-brand" className="form-label fw-semibold">
              Brand
            </label>
            <input
              id="pf-brand"
              type="text"
              className="form-control"
              placeholder="e.g. Honma"
              value={brand}
              onChange={(e) => setBrand(e.target.value)}
            />
          </div>
        </div>

        {/* Loft and Hand */}
        <div className="row mb-3">
          <div className="col">
            <label htmlFor="pf-loft" className="form-label fw-semibold">
              Loft
            </label>
            <input
              id="pf-loft"
              type="text"
              className="form-control"
              placeholder="e.g. 10.5"
              value={loft}
              onChange={(e) => setLoft(e.target.value)}
            />
          </div>
          <div className="col">
            <label htmlFor="pf-hand" className="form-label fw-semibold">
              Hand
            </label>
            <select
              id="pf-hand"
              className="form-select"
              value={hand}
              onChange={(e) => setHand(e.target.value)}
              style={{ color: hand === "" ? "#6c757d" : "#000" }}
            >
              <option value="" disabled hidden>
                Select Hand
              </option>
              <option value="RH">Right</option>
              <option value="LH">Left</option>
            </select>
          </div>
        </div>

        {/* Category and Stock Status */}
        <div className="row mb-3">
          <div className="col">
            <label htmlFor="pf-category" className="form-label fw-semibold">
              Category
            </label>
            <select
              id="pf-category"
              className="form-select"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              style={{ color: category === "" ? "#6c757d" : "#000" }}
            >
              <option value="" disabled hidden>
                Select Category
              </option>
              <option value="All">All</option>
              <option value="Driver">Driver</option>
              <option value="Fairway Wood">Fairway Wood</option>
              <option value="Iron Set">Iron Set</option>
              <option value="Wedge">Wedge</option>
              <option value="Putter">Putter</option>
            </select>
          </div>

          {/* Status is auto-derived from stock quantity */}
          <div className="col">
            <label className="form-label fw-semibold">Status</label>
            <div className="form-control" style={{ background: "#f8f9fa" }}>
              {parseInt(stock) > 0 ? (
                <span style={{ color: "#1a4d1a", fontWeight: 500 }}>
                  ● Ready to sale
                </span>
              ) : (
                <span style={{ color: "#dc3545", fontWeight: 500 }}>
                  ● Out of Stock
                </span>
              )}
            </div>
          </div>
        </div>

        {/* Stock quantity and Price */}
        <div className="row mb-3">
          <div className="col">
            <label htmlFor="pf-stock" className="form-label fw-semibold">
              Stock Quantity
            </label>
            <input
              id="pf-stock"
              type="number"
              min="0"
              className="form-control"
              value={stock}
              onChange={(e) => setStock(e.target.value)}
            />
          </div>
          <div className="col">
            <label htmlFor="pf-price" className="form-label fw-semibold">
              Price
            </label>
            <div className="input-group">
              <span className="input-group-text">฿</span>
              <input
                id="pf-price"
                type="number"
                className="form-control"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
              />
            </div>
          </div>
        </div>
        
        {/* Image URL input and preview */}
        <div className="mb-4">
          <label className="form-label fw-semibold">Add Images</label>

          {/* URL input with Add button */}
          <div className="d-flex gap-2 mb-3">
            <input
              type="text"
              className="form-control"
              placeholder="Paste image URL here"
              value={newUrl}
              onChange={(e) => setNewUrl(e.target.value)}
            />
            <button
              type="button"
              className="btn pf-save px-3"
              onClick={handleAddUrl}
            >
              Add
            </button>
          </div>

          {/* Image preview grid with remove buttons */}
          <div className="d-flex flex-wrap gap-2">
            {images.map((url, i) => (
              <div key={i} className="position-relative">
                <img
                  src={url}
                  alt={`preview ${i}`}
                  style={{
                    width: "100px",
                    height: "100px",
                    objectFit: "cover",
                    borderRadius: "8px",
                    border: "1px solid #ddd",
                  }}
                />
                <button
                  type="button"
                  onClick={() => handleRemoveImage(i)}
                  className="position-absolute top-0 end-0 btn btn-danger btn-sm p-0"
                  style={{
                    width: "20px",
                    height: "20px",
                    fontSize: "10px",
                    borderRadius: "50%",
                  }}
                >
                  ✕
                </button>
              </div>
            ))}

            {/* Placeholder shown when no images are added */}
            {images.length === 0 && (
              <div className="pf-img-box">
                <div className="pf-img-placeholder">
                  <svg
                    width="48"
                    height="48"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#ccc"
                    strokeWidth="1.5"
                  >
                    <rect x="3" y="3" width="18" height="18" rx="2" />
                    <circle cx="8.5" cy="8.5" r="1.5" />
                    <path d="M21 15l-5-5L5 21" />
                  </svg>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Form action buttons */}
        <div className="d-flex gap-3 align-items-center">
          <button type="submit" className="btn pf-save">
            {isEdit ? "Save Change" : "Save Product"}
          </button>
          <button
            type="button"
            className="btn btn-link text-secondary"
            onClick={onCancel}
          >
            Cancel
          </button>
        </div>
      </form>
    </section>
  );
}

export default ProductForm;
