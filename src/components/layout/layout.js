import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import { StaticQuery, graphql } from 'gatsby';
import {Background, BackgroundGradient, BackgroundGradientInject, BackgroundFooter} from './layout.css';
import MatrixElements from '../matrix/matrixElements';

const Layout = ({ children , color }) => {
  return (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <>
        <Helmet
          title={data.site.siteMetadata.title}
          meta={[
            { name: 'description', content: 'ashley site' },
            { name: 'keywords', content: 'ashley, beshir' },
          ]}
        >
          <html lang="en" />
        </Helmet>
        <MatrixElements max={20} maxLength={25} color={color}/>
        <Background>
          {children}
        </Background>
        <div className={BackgroundFooter(color)}/>
      </>
    )}
  />
   ) }

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
