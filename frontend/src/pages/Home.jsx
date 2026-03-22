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
      <section id="home">
        <img src={topImage} alt="BG-Top" className="w-100" style={{ height: "600px", objectFit: "cover", objectPosition: "center bottom", }} />
      </section>

      <section id="shop">
        <CategorySlide />
        <Products limit={6}/>
      </section>
      <img src={footImage} alt="BG-Foot" className="w-100" style={{ height: "600px", objectFit: "cover", objectPosition: "center", }} />
      <section id="about"></section>
      <section id="faqs">
        <AboutFAQ />
      </section>

      <footer id="contact">
        <Footer />
      </footer>
      <ScrollToTop />
    </main>
  );
}

export default Home;
