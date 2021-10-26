import { SkipNavContent } from "@reach/skip-nav";
import * as React from "react";
import Hero from "../components/Hero";
import Layout from "../components/Layout";
import Navigation from "../components/Navigation";
import SEO from "../components/Seo";

// markup
const IndexPage = () => {
  return (
    <Layout>
      <SEO title="Homepage" />
      <Hero />
      <Navigation />
      <SkipNavContent />
    </Layout>
  );
};

export default IndexPage;
