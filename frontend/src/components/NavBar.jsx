// components/NavBar.jsx
// Top navigation bar with links to page sections and admin controls

import { Link, useNavigate } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import { useAuth } from "../context/AuthContext";
import "../css/NavBar.css";

function NavBar() {
  // Get admin status and logout function from auth context
  const { isAdmin, logout } = useAuth();
  const { navigate } = useNavigate();

  // Log out the admin and redirect to home
  const handleLogout = () => {
    logout();
    navigate("/");
  };

  return (
    <>
      <nav className="navbar navbar-expand navbar-dark custom-navbar">
        <div className="container">
          <Link className="navbar-brand" to="/">
            PM Golf Club
          </Link>

          {/* Main navigation links using HashLink for smooth scroll to sections */}
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
              <Link className="nav-link" to="/teams">
                Teams
              </Link>
            </li>
            <li className="nav-item flex-fill">
              <HashLink className="nav-link" to="#contact">
                Contact
              </HashLink>
            </li>
          </ul>

          {/* Right side icons: search, cart, and login/logout */}
          <div className="pe-5">
            <ul className="navbar-nav w-50 d-flex text-right">
              <li className="nav-item flex-fill">
                <Link className="nav-link" to="/search">
                  <i class="fa-solid fa-magnifying-glass"></i>
                </Link>
              </li>
              <li className="nav-item flex-fill">
                <Link className="nav-link" to="/">
                  <i class="fa-solid fa-cart-shopping"></i>
                </Link>
              </li>
              {/* Show logout button if admin is logged in, otherwise show login link */}
              <li className="nav-item flex-fill">
                {isAdmin ? (
                  <button
                    className="nav-link btn btn-link"
                    onClick={handleLogout}
                  >
                    <i className="fa fa-sign-out"></i>
                  </button>
                ) : (
                  <Link className="nav-link" to="/login">
                    <i className="far fa-user-circle"></i>
                  </Link>
                )}
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default NavBar;
