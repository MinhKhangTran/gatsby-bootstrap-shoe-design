import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import { TestimonialsQuery } from "../types.generated";
import { Col, Container, Row } from "react-bootstrap";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

const Testimonials = () => {
  const {
    allGraphCmsTesimonial: { nodes },
  }: TestimonialsQuery = useStaticQuery(query);

  return (
    <section id="testimonials">
      <Container>
        <h2 className="section_heading mt-5 text-capitalize">
          {nodes[0].title}
        </h2>
        <p className="section_sub lead text-secondary">{nodes[0].desc}</p>
        <div className="wrapper">
          {nodes[0].testimonialItems.map((testi, index) => {
            return (
              <Row
                key={testi.id}
                className={`testi_wrapper mt-lg-5 mt-4 position-relative ${
                  (index + 1) % 2 === 0 && "flex-lg-row-reverse"
                }`}
              >
                <Col lg={2} xs={5}>
                  <GatsbyImage
                    // @ts-expect-error
                    image={getImage(testi.image?.gatsbyImageData)}
                    alt={testi.name!}
                  />
                </Col>
                <p className="quote position-absolute d-none  text-green-200">
                  "
                </p>
                <Col lg={8} className="testi_text">
                  <p className="lead text-secondary">{testi.testimonial}</p>
                  <h3>{testi.name}</h3>
                  <p className="muted">{testi.jobTitle}</p>
                </Col>
              </Row>
            );
          })}
        </div>
      </Container>
    </section>
  );
};

export const query = graphql`
  query Testimonials {
    allGraphCmsTesimonial {
      nodes {
        title
        desc
        testimonialItems {
          id
          name
          testimonial
          jobTitle
          image {
            gatsbyImageData(placeholder: TRACED_SVG, height: 300, width: 267)
          }
        }
      }
    }
  }
`;

export default Testimonials;
