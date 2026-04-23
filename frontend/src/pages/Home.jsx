// pages/Home.jsx
// Main landing page — includes hero images, category slider, products, about, FAQs, and footer

import topImage from "../assets/BG-Home-Top.jpg";
import footImage from "../assets/BG-Home-Foot.jpg";
import CategorySlide from "../components/CategorySlide";
import Products from "../components/Products";
import AboutFAQ from "../components/AboutFAQ";
import Footer from "../components/Footer";
import ScrollToTop from "../components/ScrollToTop";

function Home() {
  return (
    <main>

      {/* Hero banner image at the top */}
      <section id="home">
        <img src={topImage} alt="BG-Top" className="w-100" style={{ height: "600px", objectFit: "cover", objectPosition: "center bottom", }} />
      </section>

      {/* Shop section: category slider and product grid (limited to 6) */}
      <section id="shop">
        <CategorySlide />
        <Products limit={6}/>
      </section>

      {/* Decorative footer image */}
      <img src={footImage} alt="BG-Foot" className="w-100" style={{ height: "600px", objectFit: "cover", objectPosition: "center", }} />
      
      {/* FAQs and About Us */}
      <section id="about"></section>
      <section id="faqs">
        <AboutFAQ />
      </section>

      {/* Footer with contact info and map */}
      <footer id="contact">
        <Footer />
      </footer>
      <ScrollToTop />
    </main>
  );
}

export default Home;
