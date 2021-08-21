import React from "react";

// css
import "../css/Footer.css";
import "../App.css";

// material icon
import InstagramIcon from "@material-ui/icons/Instagram";
import FacebookIcon from "@material-ui/icons/Facebook";
import TwitterIcon from "@material-ui/icons/Twitter";
import PinterestIcon from "@material-ui/icons/Pinterest";

const Footer = () => {
  return (
    <>
      <div className="footer main__section">
        {/* social */}
        <div className="section">
          <h1>Landit.</h1>
          <p>A better way to build.</p>
          <div className="social">
            <InstagramIcon />
            <FacebookIcon />
            <TwitterIcon />
            <PinterestIcon />
          </div>
        </div>

        {/* products */}
        <ul className="section">
          <p className="footer__header">Products</p>
          <li className="footer__item">
            <a href="/" className="footer__link">
              Page Builder
            </a>
          </li>
          <li className="footer__item">
            <a href="/" className="footer__link">
              UI Kit
            </a>
          </li>
          <li className="footer__item">
            <a href="/" className="footer__link">
              Styleguide
            </a>
          </li>
          <li className="footer__item">
            <a href="/" className="footer__link">
              Documentation
            </a>
          </li>
          <li className="footer__item">
            <a href="/" className="footer__link">
              Changelog
            </a>
          </li>
        </ul>

        {/* services */}
        <ul className="section">
          <p className="footer__header">Services</p>
          <li className="footer__item">
            <a href="/" className="footer__link">
              Documentation
            </a>
          </li>
          <li className="footer__item">
            <a href="/" className="footer__link">
              Changelog
            </a>
          </li>
          <li className="footer__item">
            <a href="/" className="footer__link">
              Page Builder
            </a>
          </li>
          <li className="footer__item">
            <a href="/" className="footer__link">
              Ui Kit
            </a>
          </li>
        </ul>

        {/* connect */}
        <ul className="section">
          <p className="footer__header">Connect</p>
          <li className="footer__item">
            <a href="/" className="footer__link">
              Page Builder
            </a>
          </li>
          <li className="footer__item">
            <a href="/" className="footer__link">
              UI Kit
            </a>
          </li>
          <li className="footer__item">
            <a href="/" className="footer__link">
              Styleguide
            </a>
          </li>
          <li className="footer__item">
            <a href="/" className="footer__link">
              Documentation
            </a>
          </li>
          <li className="footer__item">
            <a href="/" className="footer__link">
              Changelog
            </a>
          </li>
          <li className="footer__item">
            <a href="/" className="footer__link">
              Documentation
            </a>
          </li>
          <li className="footer__item">
            <a href="/" className="footer__link">
              Changelog
            </a>
          </li>
        </ul>

        {/* legal */}
        <ul className="section">
          <p className="footer__header">Legal</p>
          <li className="footer__item">
            <a href="/" className="footer__link">
              Documentation
            </a>
          </li>
          <li className="footer__item">
            <a href="/" className="footer__link">
              Changelog
            </a>
          </li>
          <li className="footer__item">
            <a href="/" className="footer__link">
              Page Builder
            </a>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Footer;
