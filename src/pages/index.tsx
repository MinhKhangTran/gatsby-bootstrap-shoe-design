import { SkipNavContent } from "@reach/skip-nav";
import * as React from "react";
import Contact from "../components/Contact";
import CTA from "../components/CTA";
import Feature from "../components/Feature";
import Guide from "../components/Guide";
import Hero from "../components/Hero";
import Layout from "../components/Layout";
import Navigation from "../components/Navigation";
import Project from "../components/Project";
import SEO from "../components/Seo";
import Team from "../components/Team";
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
      <Guide />
      <CTA />
      <Team />
      <Contact />
    </Layout>
  );
};

export default IndexPage;
