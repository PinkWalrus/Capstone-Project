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

function NavBar() {
  const [showNavRight, setShowNavRight] = useState(false);

  const { isLoggedIn, handleLogoutClick } = useContext(UserContext);

  return (
    <MDBNavbar sticky expand="lg" light bgColor="light">
      <MDBContainer fluid>
        <Link to="/" className="nav-link">
          Coffee Shop
        </Link>
        <MDBNavbarToggler
          type="button"
          data-target="#navbarRightAlignExample"
          aria-controls="navbarRightAlignExample"
          aria-expanded="false"
          aria-label="Toggle navigation"
          onClick={() => setShowNavRight(!showNavRight)}
        >
          <MDBIcon icon="bars" fas />
        </MDBNavbarToggler>
        <MDBCollapse navbar show={showNavRight}>
          <MDBNavbarNav right fullWidth={false} className="mb-2 mb-lg-0">
            <Link to="/products" className="nav-link">
              Shop
            </Link>
            <Link to="/account" className="nav-link" aria-current="page">
              My Account
            </Link>
            <Link to="/signup" className="nav-link">
              Signup
            </Link>

            <div>
              {isLoggedIn ? (
                <Link to="/" className="nav-link" onClick={handleLogoutClick}>
                  Logout
                </Link>
              ) : (
                <Link to="/login" className="nav-link">
                  Login
                </Link>
              )}
            </div>

            <Link to="/cart" className="nav-link">
              <MDBBadge notification pill color="info">
                1
              </MDBBadge>
              <span>
                <MDBIcon fas icon="shopping-cart"></MDBIcon>
              </span>
            </Link>
          </MDBNavbarNav>
        </MDBCollapse>
      </MDBContainer>
    </MDBNavbar>
  );
}

export default NavBar;
