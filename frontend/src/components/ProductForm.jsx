import { useState } from "react";
import "../css/ProductForm.css";

function ProductForm({ isEdit = false, initialData = {}, onSave, onCancel }) {
  const [name, setName] = useState(initialData.title || "");
  const [description, setDescription] = useState(initialData.description || "");
  const [productId, setProductId] = useState(initialData.productId || "");
  const [brand, setBrand] = useState(initialData.brand || "");
  const [loft, setLoft] = useState(initialData.loft || "");
 const [hand, setHand] = useState(initialData.hand || "");
 const [category, setCategory] = useState(initialData.category || "");
 const [status, setStatus] = useState(initialData.status || "");
  const [stock, setStock] = useState(initialData.stock || "");
  const [price, setPrice] = useState(initialData.price || "");
  const [image, setImage] = useState(initialData.image || null);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImage(URL.createObjectURL(file));
    }
  };

  const handleSave = (e) => {
    e.preventDefault();
    onSave({
      name,
      description,
      productId,
      brand,
      loft,
      hand,
      category,
      status,
      stock,
      price,
      image,
    });
  };

  return (
    <section className="pf-bg">
      <h4 className="pf-heading">
        {isEdit ? "Edit Products" : "Add New Products"}
      </h4>

      <form className="pf-card" onSubmit={handleSave}>
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
  <option value="" disabled hidden>Select Hand</option>
  <option value="Right">Right</option>
  <option value="Left">Left</option>
</select>
  </div>
</div>


        <div className="row mb-3">
          <div className="col">
            <label htmlFor="pf-category" className="form-label fw-semibold">
              Category
            </label>
           <select id="pf-category" className="form-select" value={category}
  onChange={(e) => setCategory(e.target.value)}
  style={{ color: category === "" ? "#6c757d" : "#000" }}>
  <option value="" disabled hidden>Select Category</option>
  <option value="All">All</option>
  <option value="Driver">Driver</option>
  <option value="Fairway Wood">Fairway Wood</option>
  <option value="Iron Set">Iron Set</option>
  <option value="Wedge">Wedge</option>
  <option value="Putter">Putter</option>
</select>
          </div>
          <div className="col">
            <label htmlFor="pf-status" className="form-label fw-semibold">
              Status
            </label>
           <select id="pf-status" className="form-select" value={status}
  onChange={(e) => setStatus(e.target.value)}
  style={{ color: status === "" ? "#6c757d" : "#000" }}>
  <option value="" disabled hidden>Select Status</option>
  <option value="Out of Stock">Out of Stock</option>
  <option value="Ready to sale">Ready to sale</option>
</select>
          </div>
        </div>

        <div className="row mb-3">
          <div className="col">
            <label htmlFor="pf-stock" className="form-label fw-semibold">
              Stock Quantity
            </label>
            <input
              id="pf-stock"
              type="number"
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

        <div className="mb-4">
          <label className="form-label fw-semibold">Add Images</label>
          <label className="pf-img-box">
            {image ? (
              <img src={image} alt="preview" className="pf-img-preview" />
            ) : (
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
            )}
            <input
              type="file"
              accept="image/*"
              onChange={handleImageChange}
              hidden
            />
          </label>
        </div>

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
