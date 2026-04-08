import { useState } from "react";
import { getProducts, deleteProduct } from "../services/productService";
import ProductCard from "../components/ProductCard";
import SearchForm from "../components/SearchForm";
import ScrollToTop from "../components/ScrollToTop";
import Footer from "../components/Footer";
import "../css/Search.css";

function Search() {
  const [results, setResults] = useState([]);
  const [searched, setSearched] = useState(false);

  const handleSearch = async ({
    name,
    brand,
    category,
    minPrice,
    maxPrice,
  }) => {
    try {
      const data = await getProducts({
        name,
        brand,
        category,
        minPrice,
        maxPrice,
      });
      setResults(data);
      setSearched(true);
    } catch (err) {
      console.error("Search failed:", err);
    }
  };

  const handleReset = () => {
    setResults([]);
    setSearched(false);
  };

  const handleDelete = async (id) => {
    try {
      await deleteProduct(id);
      setResults((prev) => prev.filter((p) => p.id !== id));
    } catch (err) {
      console.error("Failed to delete product:", err);
    }
  };

  return (
    <>
      <main className="search-container">
        <h3 className="search-title">Search Products</h3>

        <SearchForm onSearch={handleSearch} onReset={handleReset} />

        {searched && (
          <section className="search-results" aria-label="Search Results">
            {results.length === 0 ? (
              <p className="no-results">No products found.</p>
            ) : (
              <section className="row row-cols-4 g-4">
                {results.map((p) => (
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
            )}
          </section>
        )}
      </main>
      <footer id="contact">
        <Footer />
      </footer>
      <ScrollToTop />
    </>
  );
}

export default Search;
