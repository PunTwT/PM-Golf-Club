import AboutUs from "./AboutUs";
import FAQs from "./FAQs";
import "../css/AboutFAQ.css";

function AboutFAQ() {
  return (
    <section className="aboutfaq-section">
      <AboutUs />
      <div className="aboutfaq-divider" />
      <FAQs />
    </section>
  );
}

export default AboutFAQ;