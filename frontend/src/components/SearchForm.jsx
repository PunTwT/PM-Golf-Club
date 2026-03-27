import { useState } from "react";

function SearchForm({ onSearch, onReset }) {
  const [name, setName] = useState("");
  const [brand, setBrand] = useState("All");
  const [category, setCategory] = useState("All");
  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");

  const handleSearch = async ({
    name,
    brand,
    category,
    minPrice,
    maxPrice,
  }) => {
    const params = new URLSearchParams();

    if (name) params.append("name", name);
    if (brand !== "All") params.append("brand", brand);
    if (category !== "All") params.append("category", category);
    if (minPrice) params.append("minPrice", minPrice);
    if (maxPrice) params.append("maxPrice", maxPrice);

    const res = await fetch(`/api/products?${params.toString()}`);
    const data = await res.json();
  };

  const handleReset = () => {
    setName("");
    setBrand("All");
    setCategory("All");
    setMinPrice("");
    setMaxPrice("");
    onReset();
  };

  return (
    <form
      className="search-box"
      onSubmit={(e) => {
        e.preventDefault();
        handleSearch();
      }}
    >
      <fieldset className="search-fields">
        <legend className="visually-hidden">Filter Options</legend>

        <div className="search-field">
          <label htmlFor="product-name">Product Name</label>
          <div className="search-input-wrap">
            <span className="search-icon">
              <i class="fa-solid fa-magnifying-glass"></i>
            </span>
            <input
              id="product-name"
              type="text"
              placeholder="Enter Product Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
        </div>

        <div className="search-field">
          <label htmlFor="brand">Brand</label>
          <select
            id="brand"
            value={brand}
            onChange={(e) => setBrand(e.target.value)}
          >
            <option value="All">All</option>
            <option value="Honma">Honma</option>
            <option value="Callaway">Callaway</option>
            <option value="XXIO">XXIO</option>
            <option value="Taylormade">Taylormade</option>
            <option value="Yamaha">Yamaha</option>
            <option value="PING">PING</option>
            <option value="Ryoma">Ryoma</option>
            <option value="Maruman">Maruman</option>
            <option value="Other">Other</option>
          </select>
        </div>

        <div className="search-field">
          <label htmlFor="category">Category</label>
          <select
            id="category"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          >
            <option value="All">All</option>
            <option value="Driver">Driver</option>
            <option value="Fairway Wood">Fairway Wood</option>
            <option value="Iron Set">Iron Set</option>
            <option value="Wedge">Wedge</option>
            <option value="Putter">Putter</option>
          </select>
        </div>

        <div className="search-field">
          <label>Price Range</label>
          <div className="price-range">
            <input
              type="number"
              placeholder="฿ Min"
              value={minPrice}
              onChange={(e) => setMinPrice(e.target.value)}
              aria-label="Minimum price"
            />
            <span aria-hidden="true">-</span>
            <input
              type="number"
              placeholder="฿ Max"
              value={maxPrice}
              onChange={(e) => setMaxPrice(e.target.value)}
              aria-label="Maximum price"
            />
          </div>
        </div>
      </fieldset>

      <div className="search-buttons">
        <button type="submit" className="btn-search">
          <i class="fa-solid fa-magnifying-glass"></i> Search
        </button>
        <button type="button" className="btn-reset" onClick={handleReset}>
          <i class="fa-solid fa-arrow-rotate-left"></i> Reset
        </button>
      </div>
    </form>
  );
}

export default SearchForm;
