import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Teams from "./pages/Teams";
import Search from "./pages/Search";
import ProductDetail from "./pages/ProductDetail";

function App() {
  return (
    <>
      <header>
        <NavBar />
      </header>
      <main className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />}/>
          <Route path="/teams" element={<Teams/>}/>
          <Route path="/search" element={<Search />}/>
          <Route path="/product/:id" element={<ProductDetail/>}/>
        </Routes>
      </main>
    </>
  );
}

export default App;
