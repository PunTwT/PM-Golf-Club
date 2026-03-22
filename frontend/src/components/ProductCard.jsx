import {Link} from "react-router-dom"

function ProductCard({ image, title, text, id }) {
  return (
    <div className="col">
      <div className="card h-100">
        <img src={image} className="card-img-top" alt={title} />
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{text}</p>
        </div>
        <div className="card-footer">
          <Link to={`/product/${id}`} className="btn w-100">More Details</Link>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
