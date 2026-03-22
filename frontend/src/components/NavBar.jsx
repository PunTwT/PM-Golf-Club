import { Link } from "react-router-dom";
import {HashLink} from "react-router-hash-link"
import "../css/NavBar.css";

function NavBar() {
  return (
    <>
      <nav className="navbar navbar-expand navbar-dark custom-navbar">
        <div className="container">
          <Link className="navbar-brand" to="/">
            PM Golf Club
          </Link>

          <ul className="navbar-nav w-50 d-flex text-center">
            <li className="nav-item flex-fill">
              <HashLink className="nav-link" to="/#home">
                Home
              </HashLink>
            </li>
            <li className="nav-item flex-fill">
              <HashLink className="nav-link" to="/#shop">
                Shop
              </HashLink>
            </li>
            <li className="nav-item flex-fill">
              <HashLink className="nav-link" to="/#about">
                About Us
              </HashLink>
            </li>
            <li className="nav-item flex-fill">
              <HashLink className="nav-link" to="/#faqs">
                FAQs
              </HashLink>
            </li>
            <li className="nav-item flex-fill">
              <HashLink className="nav-link" to="/#contact">
                Contact
              </HashLink>
            </li>
          </ul>
          
          <div className="pe-5">
            <ul className="navbar-nav w-50 d-flex text-right">
              <li className="nav-item flex-fill">
                <Link className="nav-link" to="/search">
                  🔎
                </Link>
              </li>
              <li className="nav-item flex-fill">
                <Link className="nav-link" to="/">
                  🛒
                </Link>
              </li>
              <li className="nav-item flex-fill">
                <Link className="nav-link" to="/login">
                  👤
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default NavBar;
