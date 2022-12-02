import React, { useState } from "react";
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
        <MDBNavbarBrand href="/">Coffee Shop</MDBNavbarBrand>
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
            <MDBNavbarLink active aria-current="page" href="#">
              Home
            </MDBNavbarLink>
            <MDBNavbarLink href="#">Products</MDBNavbarLink>
            <MDBNavbarLink href="/signup">Signup</MDBNavbarLink>
            <MDBNavbarLink href="/login">Login</MDBNavbarLink>
            <MDBNavbarLink href="#" onClick={handleLogoutClick}>
              Logout
            </MDBNavbarLink>
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
