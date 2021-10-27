import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import { FeatQuery } from "../types.generated";
import { Col, Container, Row } from "react-bootstrap";

const Feature = () => {
  const {
    allGraphCmsFeature: { nodes },
  }: FeatQuery = useStaticQuery(query);
  const feat = nodes[0];

  return (
    <section id="feature">
      <Container>
        <h2 className="section_heading mt-5 text-capitalize">{feat.title}</h2>
        <p className="section_sub lead text-secondary">{feat.desc}</p>
        <Row className="">
          {feat.featureIcons.map((feature) => {
            return (
              <Col key={feature.img?.id} lg={6}>
                <div className="feat_wrapper d-flex mb-3">
                  <div className="icon_wrapper me-3">
                    <img
                      src={feature.img?.url}
                      alt={feature.featTitle!}
                      aria-hidden="true"
                    />
                  </div>
                  <div className="feat_text">
                    <h3 className="feat_text_heading">{feature.featTitle}</h3>
                    <p className="muted text-secondary">{feature.featDesc}</p>
                  </div>
                </div>
              </Col>
            );
          })}
        </Row>
      </Container>
    </section>
  );
};

export const query = graphql`
  query Feat {
    allGraphCmsFeature {
      nodes {
        title
        desc
        featureIcons {
          featDesc
          featTitle
          img {
            id
            url
          }
        }
      }
    }
  }
`;

export default Feature;
