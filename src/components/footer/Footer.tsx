import React from "react";
import "./Footer.css";
import { createFromIconfontCN } from "@ant-design/icons";
import { Icon } from "@iconify/react";
const IconFont = createFromIconfontCN({
  scriptUrl: "//at.alicdn.com/t/font_8d5l8fzk5b87iudi.js",
});
const Footer: React.FC = () => (
  <footer className="footer">
    <div className="footer-left">
      <img src="../Logo1.png" alt="Logo" className="footer-logo" />
      <div className="footer-social-links">
        <a href="#" className="social-link">
          <IconFont type="icon-facebook" />
        </a>
        <a href="#" className="social-link">
          <IconFont type="icon-twitter" />
        </a>
        <a href="#" className="social-link">
          <Icon icon="ant-design:linkedin-outlined" />
        </a>
      </div>
    </div>
    <div className="footer-right">
      <div className="footer-about">
        <h3>About</h3>
        <p>
          Saylani Mass IT Training program is an institute who delivers Latest
          IT education (FREE OF COST) to the youth of country to make Pakistan
          technically strong and to promote Entrepreneurship and startup culture
          in Pakistan.
        </p>
      </div>
      <div className="footer-contact">
        <h3>Contact</h3>
        <p>
          Phone: 111-729-526 <br />
          Email: education@saylaniwelfare.com <br />
          Address : A-25, Bahadurabad Chowrangi Karachi, Pakistan
        </p>
      </div>
    </div>
    <div className="footer-line" />
    <p className="footer-copyright">Copyright &copy; 2021 SMIT</p>
  </footer>
);

export default Footer;
