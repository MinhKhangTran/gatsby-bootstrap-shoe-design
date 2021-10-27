import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import { GuideQuery } from "../types.generated";
import { Col, Container, Row } from "react-bootstrap";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

const Guide = () => {
  const {
    allGraphCmsGuide: { nodes },
  }: GuideQuery = useStaticQuery(query);
  return (
    <section id="guide">
      <Container>
        <h2 className="section_heading mt-5 text-capitalize">
          {nodes[0].title}
        </h2>
        <p className="section_sub lead text-secondary">{nodes[0].desc}</p>
        <div className="wrapper">
          {nodes[0].guideItems.map((guide, index) => {
            return (
              <Row
                key={guide.id}
                className={`guide_wrapper py-5 border-bottom border-success position-relative ${
                  (index + 1) % 2 === 0 && "flex-lg-row-reverse"
                } ${index === 2 && "border-bottom-0"}`}
              >
                <Col md={4}>
                  <img
                    className="bild"
                    src={guide.image?.url}
                    alt={guide.name!}
                  />
                </Col>
                <p className="quote position-absolute text-green-400">
                  0{guide.number}
                </p>
                <Col lg={8} className="guide_text">
                  <h3>{guide.name}</h3>
                  <p className="lead text-secondary">{guide.desc}</p>
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
  query Guide {
    allGraphCmsGuide {
      nodes {
        title
        desc
        guideItems {
          desc
          id
          number
          name
          image {
            url
          }
        }
      }
    }
  }
`;

export default Guide;
