import { useNavigate } from "react-router-dom";
import ProductForm from "../components/ProductForm";
import Footer from "../components/Footer";

function AddProduct() {
  const navigate = useNavigate();

  const handleSave = (data) => {
    console.log("Add: ", data);
    navigate(-1);
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