import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import { HeroQuery } from "../types.generated";

const Hero = () => {
  const {
    allGraphCmsHero: { nodes },
  }: HeroQuery = useStaticQuery(query);

  return <div>Hero</div>;
};

export const query = graphql`
  query Hero {
    allGraphCmsHero {
      nodes {
        heroCta
        heroSocials
        subtitle
        title
        heroImage {
          gatsbyImageData(placeholder: TRACED_SVG)
        }
        heroCustomers {
          alt
          heroCustomerImg {
            gatsbyImageData(placeholder: TRACED_SVG)
          }
        }
      }
    }
  }
`;

export default Hero;
