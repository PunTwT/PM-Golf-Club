import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

function ProductCard({ image, title, text, id }) {
  const { isAdmin } = useAuth();

  return (
    <div className="col">
      <div className="card h-100">
        <div className="position-relative">
          <img src={image} className="card-img-top" alt={title} />

          <div className="position-absolute top-0 end-0 p-3 d-flex opacity-50">
            {isAdmin && (
              <div className="d-flex gap-2">
                <Link
                  to={`/product/${id}/edit`}
                  className="btn p-1"
                >
                  <i class="fa-solid fa-edit"></i>
                </Link>
                <Link to={``} className="btn p-1">
                <i class="fa-solid fa-trash-can"></i>
                </Link>
              </div>
            )}
          </div>
        </div>
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{text}</p>
        </div>
        <div className="card-footer">
          <Link to={`/product/${id}`} className="btn w-100">
            More Details
          </Link>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
