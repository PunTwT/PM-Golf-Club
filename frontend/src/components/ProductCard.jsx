import {Link} from "react-router-dom"
import Putter from "../assets/Putter.jpg";

function ProductCard({ image, title, text, footer }) {
  return (
    <div className="col">
      <div className="card h-100">
        <img src={Putter} className="card-img-top" alt={title} />
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{text}</p>
        </div>
        <div className="card-footer">
        {/* <Link to={`/product/${id}`} className="btn w-100">A</Link> */}
          <small className="text-body-secondary">{footer}</small>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
