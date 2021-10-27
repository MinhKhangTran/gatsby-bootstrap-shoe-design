import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import { ProjectQuery } from "../types.generated";
import Masonry from "react-masonry-css";
import { Container } from "react-bootstrap";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import SimpleReactLightbox, { SRLWrapper } from "simple-react-lightbox";

const Project = () => {
  const {
    allGraphCmsProject: { nodes },
  }: ProjectQuery = useStaticQuery(query);
  const {
    allGraphCmsProjectHeading: { nodes: project_heading },
  }: ProjectQuery = useStaticQuery(query);

  const breakpointColumnsObj = {
    default: 3,
    600: 2,
  };

  return (
    <section id="project">
      <Container>
        <h2 className="section_heading mt-5 text-capitalize">
          {project_heading[0].title}
        </h2>
        <p className="section_sub lead text-secondary">
          {project_heading[0].desc}
        </p>
        <SimpleReactLightbox>
          <SRLWrapper>
            <Masonry
              breakpointCols={breakpointColumnsObj}
              className="my-masonry-grid"
              columnClassName="my-masonry-grid_column"
            >
              {nodes.map((project) => {
                return (
                  <a
                    href={project.img?.url}
                    aria-label={`Click to see more about ${project.alt}`}
                  >
                    <GatsbyImage
                      key={project.id}
                      // @ts-expect-error
                      image={getImage(project.img?.gatsbyImageData)}
                      alt={project.alt!}
                    />
                  </a>
                );
              })}
            </Masonry>
          </SRLWrapper>
        </SimpleReactLightbox>
      </Container>
    </section>
  );
};

export const query = graphql`
  query Project {
    allGraphCmsProject {
      nodes {
        id
        alt
        img {
          gatsbyImageData(placeholder: TRACED_SVG)
          url
        }
      }
    }
    allGraphCmsProjectHeading {
      nodes {
        desc
        title
      }
    }
  }
`;

export default Project;
