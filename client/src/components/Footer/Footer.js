import React from "react";
import { MDBFooter, MDBContainer, MDBIcon, MDBBtn } from "mdb-react-ui-kit";
import "./Footer.css";
import Logo from "../../assets/Coffee_Shop_Logo.svg";

function Footer() {
  return (
    <MDBFooter
      className="bg-dark text-center text-white pb-2 footer-el"
      style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}
    >
      <div className="text-center p-3 mt-4">
        <img src={Logo} style={{ width: "10em" }} />
      </div>
      <MDBContainer className="p-4 pb-0">
        <section>
          <MDBBtn
            outline
            color="dark"
            floating
            className="m-1"
            href="#!"
            role="button"
            style={{ backgroundColor: "white" }}
          >
            <MDBIcon fab icon="facebook-f" />
          </MDBBtn>

          <MDBBtn
            outline
            color="dark"
            floating
            className="m-1"
            href="#!"
            role="button"
            style={{ backgroundColor: "white" }}
          >
            <MDBIcon fab icon="twitter" />
          </MDBBtn>

          <MDBBtn
            outline
            color="dark"
            floating
            className="m-1"
            href="#!"
            role="button"
            style={{ backgroundColor: "white" }}
          >
            <MDBIcon fab icon="tiktok" />
          </MDBBtn>

          <MDBBtn
            outline
            color="dark"
            floating
            className="m-1"
            href="#!"
            role="button"
            style={{ backgroundColor: "white" }}
          >
            <MDBIcon fab icon="instagram" />
          </MDBBtn>
        </section>
      </MDBContainer>

      <div className="text-center p-3">
        © 2022 Loren Sprague. All rights reserved.
      </div>
    </MDBFooter>
  );
}

export default Footer;
