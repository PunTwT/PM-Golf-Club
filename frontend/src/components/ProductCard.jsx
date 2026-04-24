// components/ProductCard.jsx
// Displays a single product card with image, title, price, and admin controls

import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { useState } from "react";

function ProductCard({ image, title, text, id, onDelete }) {
  const { isAdmin } = useAuth();

  // Controls visibility of the delete confirmation modal
  const [showModal, setShowModal] = useState(false);

  // Confirm delete and notify parent component
  const handleConfirmDelete = () => {
    onDelete(id);
    setShowModal(false);
  };

  return (
    <div className="col">
      <div className="card h-100">

        {/* Product image with admin edit/delete buttons overlaid */}
        <div className="position-relative">
          <img src={image} className="card-img-top" alt={title} />

          {/* Admin controls — only visible when logged in as admin */}
          <div className="position-absolute top-0 end-0 p-3 d-flex opacity-50">
            {isAdmin && (
              <div className="d-flex gap-2">
                <Link to={`/product/${id}/edit`} className="btn p-1">
                  <i class="fa-solid fa-edit"></i>
                </Link>

                <button className="btn p-1" onClick={() => setShowModal(true)}>
                  <i class="fa-solid fa-trash-can"></i>
                </button>
              </div>
            )}
          </div>
        </div>

        {/* Product name and price */}
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{text}</p>
        </div>

        {/* Link to product detail page */}
        <div className="card-footer">
          <Link to={`/product/${id}`} className="btn w-100">
            More Details
          </Link>
        </div>
      </div>
      
      {/* Delete confirmation modal */}
      {showModal && (
        <div
          className="position-fixed top-0 start-0 w-100 h-100 d-flex align-items-center justify-content-center"
          style={{ background: "rgba(0,0,0,0.5)", zIndex: 1050 }}
          onClick={() => setShowModal(false)} // close when clicking backdrop
        >
          <div
            className="bg-white rounded-3 p-4"
            style={{ width: "320px" }}
            onClick={(e) => e.stopPropagation()} // prevent backdrop click from closing
          >
            <h5 className="mb-2">Delete Product?</h5>
            <p className="text-muted mb-4" style={{ fontSize: "18px" }}>
              Are you sure you want to delete <strong>{title}</strong>? <br/>This
              cannot be undone.
            </p>
            <div className="d-flex gap-2 justify-content-end">
              <button
                className="btn btn-secondary"
                onClick={() => setShowModal(false)}
              >
                Cancel
              </button>
              <button className="btn btn-danger" onClick={handleConfirmDelete}>
                Delete
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default ProductCard;
