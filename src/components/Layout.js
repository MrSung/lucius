import React from 'react'
import PropTypes from 'prop-types'
import { StaticQuery, graphql } from 'gatsby'
import styled from 'styled-components'
import './base.css'
import './utils.css'
import Header from './LayoutHeader'
import Footer from './LayoutFooter'

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query LuciusTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={({ site }) => (
      <div id='superwrapper' className='ts-base-style'>
        <Header siteTitle={site.siteMetadata.title} />
        <BodyRoomWrapper>
          {children}
          <Footer siteTitle={site.siteMetadata.title} />
        </BodyRoomWrapper>
      </div>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired
}

export default Layout

const BodyRoomWrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-height: calc(100vh - 80px);
`
