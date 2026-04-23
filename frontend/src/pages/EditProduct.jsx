// pages/EditProduct.jsx
// Page for editing an existing product — loads product data then wraps ProductForm

import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { getProductByID, editProduct } from "../services/productService";
import ProductForm from "../components/ProductForm";
import Footer from "../components/Footer";

function EditProduct() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState(null);

  // Fetch the existing product data by ID when the page loads
  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const data = await getProductByID(id);
        setProduct(data);
      } catch (err) {
        console.error("Failed to fetch product:", err);
      }
    };

    fetchProduct();
  }, [id]);

  // Submit updated product data to the API then go back
  const handleSave = async (data) => {
    try {
      await editProduct(id, data);
      navigate(-1);
    }catch (err){
      console.error("Failed to edit product:", err);
    }
  };

  if (!product) return <p>Product not found.</p>;

  return (
    <>
      <ProductForm
        isEdit={true}
        initialData={product}
        onSave={handleSave}
        onCancel={() => navigate(-1)}
      />
      <footer id="contact">
        <Footer />
      </footer>
    </>
  );
}

export default EditProduct;
