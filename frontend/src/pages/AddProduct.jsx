import { useNavigate } from "react-router-dom";
import ProductForm from "../components/ProductForm";
import Footer from "../components/Footer";
import { addProduct } from "../services/productService";

function AddProduct() {
  const navigate = useNavigate();

  const handleSave = async (data) => {
    try {
      await addProduct(data);
      navigate(-1);
    }catch (err){
      console.error("Failed to add product:", err)
    }
  };

  return (
    <>
      <ProductForm
        isEdit={false}
        initialData={{}}
        onSave={handleSave}
        onCancel={() => navigate(-1)}
      />
      <footer id="contact">
        <Footer />
      </footer>
    </>
  );
}

export default AddProduct;