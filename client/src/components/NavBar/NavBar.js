import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../../context/UserProvider";
import "./NavBar.css";
import {
  MDBContainer,
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarToggler,
  MDBNavbarNav,
  MDBNavbarItem,
  MDBNavbarLink,
  MDBIcon,
  MDBCollapse,
  MDBBadge,
} from "mdb-react-ui-kit";
import Logo from "../../assets/Coffee_Shop_Logo.svg";

function NavBar() {
  const [showNavRight, setShowNavRight] = useState(false);

  const { user, isLoggedIn, handleLogoutClick } = useContext(UserContext);

  return (
    <MDBNavbar sticky expand="md" bgColor="dark">
      <MDBContainer fluid style={{ padding: ".2em 1.2em" }}>
        <Link to="/" className="nav-bar-link">
          <img src={Logo} style={{ width: "5em" }} />
        </Link>
        <MDBNavbarToggler
          type="button"
          data-target="#navbarRightAlignExample"
          aria-controls="navbarRightAlignExample"
          aria-expanded="false"
          aria-label="Toggle navigation"
          onClick={() => setShowNavRight(!showNavRight)}
        >
          <MDBIcon className="nav-bar-link" icon="bars" fas />
        </MDBNavbarToggler>
        <MDBCollapse navbar show={showNavRight}>
          <MDBNavbarNav right fullWidth={false} className="mb-lg-0">
            <div>
              {isLoggedIn ? (
                <div className="parent">
                  <li>
                    <p className="nav-link nav-bar-link child">
                      Hi, {user.first_name}!
                    </p>
                  </li>
                  <li>
                    <Link to="/" className="nav-link nav-bar-link">
                      Home
                    </Link>
                  </li>
                  <li>
                    <Link to="/products" className="nav-link nav-bar-link">
                      Shop
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/account"
                      className="nav-link nav-bar-link"
                      aria-current="page"
                    >
                      My Account
                    </Link>
                  </li>
                </div>
              ) : (
                <div className="parent">
                  <Link to="/" className="nav-link nav-bar-link child">
                    Home
                  </Link>
                  <Link to="/products" className="nav-link nav-bar-link">
                    Shop
                  </Link>
                  <Link to="/signup" className="nav-link nav-bar-link child">
                    Register
                  </Link>
                </div>
              )}
            </div>

            <div>
              {isLoggedIn ? (
                <Link
                  to="/"
                  className="nav-link nav-bar-link"
                  onClick={handleLogoutClick}
                >
                  Logout
                </Link>
              ) : (
                <Link to="/login" className="nav-link nav-bar-link">
                  Login
                </Link>
              )}
            </div>

            <div>
              {isLoggedIn ? (
                <Link to="/cart" className="nav-link">
                  {/* <MDBBadge notification pill color="info">
                    1
                  </MDBBadge> */}
                  <span>
                    <MDBIcon fas icon="shopping-cart nav-bar-link"></MDBIcon>
                  </span>
                </Link>
              ) : (
                <Link to="/login" className="nav-link">
                  <span>
                    <MDBIcon fas icon="shopping-cart nav-bar-link"></MDBIcon>
                  </span>
                </Link>
              )}
            </div>

            {/* <Link to="/cart" className="nav-link">
              <MDBBadge notification pill color="info">
                1
              </MDBBadge>
              <span>
                <MDBIcon fas icon="shopping-cart"></MDBIcon>
              </span>
            </Link> */}
          </MDBNavbarNav>
        </MDBCollapse>
      </MDBContainer>
    </MDBNavbar>
  );
}

export default NavBar;
