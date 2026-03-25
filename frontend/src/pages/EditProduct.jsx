import { useParams } from "react-router-dom";
import { mockProducts } from "../data/mockProducts";
import { useNavigate } from "react-router-dom";
import ProductForm from "../components/ProductForm";
import Footer from "../components/Footer";

function EditProduct() {
  const { id } = useParams();
  const product = mockProducts.find((p) => p.id == id);
  const navigate = useNavigate();

  const handleSave = (data) => {
    console.log("Edit: ", data);
    navigate(-1);
  };

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
