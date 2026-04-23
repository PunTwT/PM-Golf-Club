import "../css/Footer.css"

const SHOP_NAME = "PM Golf Club";
const SHOP_ADDRESS = "1St Flr. Facculty of ICT, Mahidol University, ตำบล ศาลายา อำเภอพุทธมณฑล นครปฐม 73170"

function Footer() {
  const apiKey = import.meta.env.VITE_GOOGLE_MAPS_API_KEY;
  const mapSrc = `https://www.google.com/maps/embed/v1/place?key=${apiKey}&q=${encodeURIComponent(SHOP_ADDRESS)}`;
  return (
    <footer className="footer-container">
      <h5 className="footer-heading">Contact Us</h5>
      <div className="footer-info">
        <span>Tel : 000 - 000 - 0000</span>
        <span>Email : aaaaaa@aaa.aa</span>
        <span>Line : @aaaaaaaaaaa</span>
      </div>
      <div className="footer-map">
        <h6 className="footer-map-heading">Find Us</h6>
        <iframe
          title="Shop Location"
          src={mapSrc}
          width="100%"
          height="250"
          style={{ border: 0, borderRadius: "8px" }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
        <a
          href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(SHOP_ADDRESS)}`}
          target="_blank"
          rel="noopener noreferrer"
          className="footer-map-link"
        >
          Open in Google Maps ↗
        </a>
      </div>
    </footer>
  );
}

export default Footer;