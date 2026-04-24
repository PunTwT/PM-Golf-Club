// productService.js
// Provides all product-related API calls: fetch, add, edit, and delete

import API_BASE_URL from "./api";

// Fetches a list of products, with optional filter parameters
export const getProducts = async (filters = {}) => {
  // Build query string from whichever filters were provided
  const params = new URLSearchParams();
  if (filters.name) params.append("name", filters.name);
  if (filters.brand) params.append("brand", filters.brand);
  if (filters.category) params.append("category", filters.category);
  if (filters.minPrice) params.append("minPrice", filters.minPrice);
  if (filters.maxPrice) params.append("maxPrice", filters.maxPrice);

  const response = await fetch(`${API_BASE_URL}/products?${params}`);
  return response.json();
};

// Fetches a single product by its ID
export const getProductByID = async (id) => {
  const response = await fetch(`${API_BASE_URL}/products/${id}`);
  return response.json();
};

// Sends a new product to the backend (POST)
export const addProduct = async (product) => {
  const response = await fetch(`${API_BASE_URL}/products`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(product),
  });
  return response.json();
};

// Updates an existing product by ID (PATCH)
// Cache-Control header prevents stale responses after an edit
export const editProduct = async (id, product) => {
  const response = await fetch(`${API_BASE_URL}/products/${id}`, {
    method: "PATCH",
    headers: { 
        "Content-Type": "application/json",
        "Cache-Control": "no-cache",    
    },
    body: JSON.stringify(product),
  });
  return response.json();
};

// Deletes a product by ID (DELETE)
export const deleteProduct = async (id) => {
  const response = await fetch(`${API_BASE_URL}/products/${id}`, {
    method: "DELETE",
  });
  return response.json();
};