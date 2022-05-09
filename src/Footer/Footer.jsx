import React from "react";
import "./Footer.css";
import ContactPageIcon from "@mui/icons-material/ContactPage";

function Footer() {
  return (
    <footer id="footer">
      <div className="container">
        <p>Rock Friends 2022 &#169; Create by M5.it </p>
        <p>
          <a href="https://www.facebook.com/rock.friends.warszawa/">
            <ContactPageIcon color="primary"></ContactPageIcon>
          </a>
        </p>
      </div>
    </footer>
  );
}

export default Footer;
