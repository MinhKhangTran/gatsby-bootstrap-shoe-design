import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import {
  FaHome,
  FaClock,
  FaTwitter,
  FaInstagram,
  FaFacebook,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer id="footer" className="bg-green-400">
      <Container>
        <div className="footer_socials d-flex justify-content-between align-items-center">
          <span className="lead text-white">
            &copy; {new Date().getFullYear()}, MKT. All rights reserved
          </span>
          <div className="socials d-flex gap-3 align-items-center text-white">
            <a href="https://github.com/">
              <FaInstagram className="social_icon" />
              <span className="visually-hidden">Instagram</span>
            </a>
            <a href="https://github.com/">
              <FaFacebook className="social_icon" />
              <span className="visually-hidden">Facebook</span>
            </a>
          </div>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
