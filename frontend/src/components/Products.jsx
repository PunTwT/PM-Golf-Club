import ProductCard from "./ProductCard";
import Putter from "../assets/Putter.jpg";
import "../css/Products.css";

// test
const products = [
  { id: 1, image: Putter, title: "Putter", text: "Some text here...................................", footer: "Last updated 3 mins ago" },
  { id: 2, image: Putter, title: "Driver", text: "Some text here.", footer: "Last updated 3 mins ago" },
  { id: 3, image: Putter, title: "Wedge",  text: "Some text here.", footer: "Last updated 3 mins ago" },
  { id: 4, image: Putter, title: "Iron",   text: "Some text here.", footer: "Last updated 3 mins ago" },
  { id: 5, image: Putter, title: "Wood",   text: "Some text here.", footer: "Last updated 3 mins ago" },
];

function Products() {
  return (
    <main className="product-container">
      <h3 className="product-heading">Products</h3>

      <div className="container">
        <section className="row row-cols-3 g-4">
          {products.map((p) => (
            <ProductCard
              key={p.id}
              image={p.image}
              title={p.title}
              text={p.text}
              footer={p.footer}
            />
          ))}
        </section>
      </div>
    </main>
  );
}

export default Products;
