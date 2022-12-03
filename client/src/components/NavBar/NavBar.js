import React, { useState } from "react";
import { Link } from "react-router-dom";
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

function NavBar({ setUser }) {
  const [showNavRight, setShowNavRight] = useState(false);

  const handleLogoutClick = () => {
    const config = {
      method: "DELETE",
    };
    fetch("/logout", config).then((resp) => {
      setUser({ email: "" });
      console.log(resp);
    });
  };

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
            <Link to="/" className="nav-link" aria-current="page">
              Home
            </Link>
            <Link to="/testing" className="nav-link">
              Products
            </Link>
            <Link to="/signup" className="nav-link">
              Signup
            </Link>
            <Link to="/login" className="nav-link">
              Login
            </Link>
            <Link to="/logout" className="nav-link" onClick={handleLogoutClick}>
              Logout
            </Link>
            <MDBNavbarLink href="#">
              <MDBBadge notification pill color="info">
                1
              </MDBBadge>
              <span>
                <MDBIcon fas icon="shopping-cart"></MDBIcon>
              </span>
            </MDBNavbarLink>
          </MDBNavbarNav>
        </MDBCollapse>
      </MDBContainer>
    </MDBNavbar>
  );
}

export default NavBar;
