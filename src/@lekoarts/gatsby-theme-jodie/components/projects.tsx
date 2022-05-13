/** @jsx jsx */
import { jsx } from 'theme-ui';
import { PageProps } from 'gatsby';
import { GatsbyImage, IGatsbyImageData } from 'gatsby-plugin-image';
import * as React from 'react';

import GridItem from '@lekoarts/gatsby-theme-jodie/src/components/grid-item';
import Layout from '@lekoarts/gatsby-theme-jodie/src/components/layout';
import Seo from '@lekoarts/gatsby-theme-jodie/src/components/seo';
import { visuallyHidden } from '@lekoarts/gatsby-theme-jodie/src/styles/utils';

import locales from '../locales';

type DataProps = {
  projects: {
    nodes: {
      shortTitle: string
      slug: string
      cover: {
        childImageSharp: {
          gatsbyImageData: IGatsbyImageData
        }
      }
    }[]
  }
}

const Project: React.FC<PageProps<DataProps>> = ({ data: { projects }, location }) => (
  <Layout>
    <Seo title={locales.projects} pathname={location.pathname} />
    <h1 sx={visuallyHidden} data-testid="page-title">
      {locales.projects}
    </h1>
    <div
      sx={{
        display: `grid`,
        gridTemplateColumns: [`1fr`, `1fr 1fr`],
        gridAutoRows: `50vw`,
      }}
    >
      {projects.nodes.length > 0 ? (
        projects.nodes.map((project) => (
          <GridItem to={project.slug} key={project.slug} data-testid={project.shortTitle}>
            <GatsbyImage image={project.cover.childImageSharp.gatsbyImageData} alt="" />
            <span>{project.shortTitle}</span>
          </GridItem>
        ))
      ) : (
        <div sx={{ padding: 3 }}>{locales.noProjects}</div>
      )}
    </div>
  </Layout>
)

export default Project
