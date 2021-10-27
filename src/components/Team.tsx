import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import { TeamQuery } from "../types.generated";
import { Col, Container, Row } from "react-bootstrap";
import { FaInstagram } from "react-icons/fa";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

const Team = () => {
  const {
    allGraphCmsTeam: { nodes },
  }: TeamQuery = useStaticQuery(query);
  return (
    <section id="team">
      <Container>
        <h2 className="section_heading mt-5 text-capitalize">
          {nodes[0].title}
        </h2>
        <p className="section_sub lead text-secondary">{nodes[0].desc}</p>
        <Row>
          {nodes[0].teamItems.map((team, index) => {
            return (
              <Col key={team.id} lg={6} className={`mb-3 mx-auto`}>
                <div className="image_wrapper mx-auto text-center">
                  <GatsbyImage
                    key={team.id}
                    // @ts-expect-error
                    image={getImage(team.image?.gatsbyImageData)}
                    alt={team.name!}
                  />
                </div>
                <div className="text_wrapper text-center mt-2 mb-4">
                  <h3>{team.name}</h3>
                  <p className="lead text-capitalize">{team.jobTitle}</p>
                  <div className="socials d-flex justify-content-center">
                    <a href={team.instaUrl!}>
                      <FaInstagram className="social_icon" />
                      <span className="visually-hidden">Instagram Link</span>
                    </a>
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
  query Team {
    allGraphCmsTeam {
      nodes {
        desc
        title
        teamItems {
          id
          instaUrl
          jobTitle
          name
          image {
            gatsbyImageData(placeholder: TRACED_SVG)
          }
        }
      }
    }
  }
`;

export default Team;
