import { useState } from "react";
import { mockProducts } from "../data/mockProducts";
import ProductCard from "../components/ProductCard";
import SearchForm from "../components/SearchForm";
import ScrollToTop from "../components/ScrollToTop";
import Footer from "../components/Footer";
import "../css/Search.css";

function Search() {
  const [results, setResults] = useState([]);
  const [searched, setSearched] = useState(false);

  const handleSearch = ({ name, brand, category, minPrice, maxPrice }) => {
    const filtered = mockProducts.filter((p) => {
      const matchName = p.title.toLowerCase().includes(name.toLowerCase());
      const matchBrand = brand === "All" || p.brand === brand;
      const matchCategory = category === "All" || p.category === category;
      const matchMin = minPrice === "" || p.price >= Number(minPrice);
      const matchMax = maxPrice === "" || p.price <= Number(maxPrice);
      return matchName && matchBrand && matchCategory && matchMin && matchMax;
    });
    setResults(filtered);
    setSearched(true);
  };

  const handleReset = () => {
    setResults([]);
    setSearched(false);
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
                    title={p.title}
                    text={`฿ ${p.price.toLocaleString()}`}
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
