import React from "react";
import { Col, Container, Row, Button } from "react-bootstrap";
import { FaChevronUp, FaInstagram, FaFacebook } from "react-icons/fa";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <footer id="footer" className="">
      <Container>
        <div className=" footer_socials d-flex justify-content-between align-items-center ">
          <div className="go_to_top  order-lg-3">
            <button
              onClick={scrollToTop}
              className="goUp"
              aria-label="go to the top"
            >
              <FaChevronUp />
            </button>
          </div>
          <span className="lead  text-white my-3">
            &copy; {new Date().getFullYear()}, MKT. All rights reserved
          </span>
          <div className="socials  d-flex gap-3 align-items-center text-white">
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
