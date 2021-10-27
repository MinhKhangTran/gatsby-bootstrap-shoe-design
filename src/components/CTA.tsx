import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import { CtaQuery } from "../types.generated";
import { Col, Container, Row, Button } from "react-bootstrap";

const CTA = () => {
  const {
    allGraphCmsCta: { nodes: cta },
  }: CtaQuery = useStaticQuery(query);
  return (
    <section id="cta">
      <Container fluid="sm">
        <Row className="">
          <Col lg={8} className="order-lg-2">
            <h2 className="text-green-400">{cta[0].ctaText}</h2>
          </Col>
          <Col lg={4}>
            <div className="btn_wrapper d-flex justify-content-center mt-4 mt-lg-0">
              <Button variant="success" size="lg">
                {cta[0].ctaBtn}
              </Button>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export const query = graphql`
  query Cta {
    allGraphCmsCta {
      nodes {
        ctaBtn
        ctaText
      }
    }
  }
`;

export default CTA;
