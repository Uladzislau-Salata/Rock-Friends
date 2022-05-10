import React from "react";
import "./Footer.css";
import FacebookIcon from '@mui/icons-material/Facebook';

function Footer() {
  return (
    <footer id="footer">
      <div className="container">
        <p>Rock Friends 2022 &#169; Create by M5.it </p>
        <p>
          <a href="https://www.facebook.com/rock.friends.warszawa/">
            <FacebookIcon color="primary"></FacebookIcon>
          </a>
        </p>
      </div>
    </footer>
  );
}

export default Footer;
