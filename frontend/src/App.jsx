// App.jsx
// Root application component — defines the global layout and all client-side routes

import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Teams from "./pages/Teams";
import Search from "./pages/Search";
import ProductDetail from "./pages/ProductDetail";
import EditProduct from "./pages/EditProduct";
import AddProduct from "./pages/AddProduct";

function App() {
  return (
    <>
      {/* Persistent top navigation bar rendered on every page */}
      <header>
        <NavBar />
      </header>
      {/* Main content area — swaps content based on the current URL */}
      <main className="main-content">
        <Routes>
          {/* Public-facing pages */}
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/teams" element={<Teams />} />
          <Route path="/search" element={<Search />} />
          {/* Product pages: view, edit, and add */}
          <Route path="/product/:id" element={<ProductDetail />} />
          <Route path="/product/:id/edit" element={<EditProduct />} />
          <Route path="/add-product" element={<AddProduct />} />
        </Routes>
      </main>
    </>
  );
}

export default App;
