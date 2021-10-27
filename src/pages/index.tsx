import { SkipNavContent } from "@reach/skip-nav";
import * as React from "react";
import Feature from "../components/Feature";
import Hero from "../components/Hero";
import Layout from "../components/Layout";
import Navigation from "../components/Navigation";
import Project from "../components/Project";
import SEO from "../components/Seo";
import Testimonials from "../components/Testimonials";

// markup
const IndexPage = () => {
  return (
    <Layout>
      <SEO title="Homepage" />
      <Hero />
      <Navigation />
      <SkipNavContent />
      <Feature />
      <Project />
      <Testimonials />
    </Layout>
  );
};

export default IndexPage;
