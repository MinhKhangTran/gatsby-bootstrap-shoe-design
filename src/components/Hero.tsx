import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import { HeroQuery } from "../types.generated";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { Container, Button, Row, Col } from "react-bootstrap";

const Hero = () => {
  const {
    allGraphCmsHero: { nodes },
  }: HeroQuery = useStaticQuery(query);

  const hero = nodes[0];

  return (
    <section id="hero">
      <Container>
        <Row className=" hero_row align-items-center">
          <Col lg={7}>
            <h1 className="">{hero.title}</h1>
            <p className="lead hero_subtitle text-capitalize">
              {hero.subtitle}
            </p>
            <div className="button_wrapper my-5 my-lg-4 d-flex justify-content-center justify-content-lg-start">
              <Button variant="success" size="lg" className="text-capitalize">
                {hero.heroCta}
              </Button>
            </div>
            <div className="hero_socials_wrapper d-lg-flex align-items-center">
              <div className="hero_wrapper d-flex justify-content-center mt-4 mt-lg-0">
                {hero.heroCustomers.map((customer) => {
                  return (
                    <GatsbyImage
                      // @ts-expect-error
                      image={getImage(customer.heroCustomerImg.gatsbyImageData)}
                      alt={customer.alt!}
                    />
                  );
                })}
              </div>
              <p className="hero_socials ms-lg-5 text-white fw-bold mt-3 mt-lg-0 text-capitalize mb-lg-0">
                {hero.heroSocials}
              </p>
            </div>
          </Col>
          <Col lg={5} className="mt-5 mt-lg-0">
            <div className="image_wrapper d-flex justify-content-center">
              <GatsbyImage
                // @ts-expect-error
                image={getImage(hero.heroImage?.gatsbyImageData)}
                alt={hero.title!}
              />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
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
          gatsbyImageData(placeholder: TRACED_SVG, width: 458, height: 403)
        }
        heroCustomers {
          alt
          heroCustomerImg {
            gatsbyImageData(placeholder: TRACED_SVG, width: 50, height: 50)
          }
        }
      }
    }
  }
`;

export default Hero;
