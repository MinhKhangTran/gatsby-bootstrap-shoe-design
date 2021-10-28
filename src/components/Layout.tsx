import React from "react";
import "../styles/main.scss";
import Footer from "./Footer";
import { SkipNavLink } from "@reach/skip-nav";
import "@reach/skip-nav/styles.css";
import smoothscroll from "smoothscroll-polyfill";

const Layout = ({ children }: { children: React.ReactNode }) => {
 
  return (
    <>
      <SkipNavLink />
      <div>
        <main>{children}</main>
        <Footer />
      </div>
    </>
  );
};

export default Layout;
