import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'
import styled from 'styled-components'
import Headroom from 'react-headroom'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import Drift from 'react-driftjs'

const { GATSBY_DRIFT_APP_ID } = process.env

const Header = ({ siteTitle }) => (
  <>
    <Headroom disableInlineStyles>
      <HeadroomHeader>
        <HeadroomHeaderInner className='container'>
          <HeadroomHeaderHeading>
            <HeadroomHeaderLink to='/'>{siteTitle}</HeadroomHeaderLink>
          </HeadroomHeaderHeading>
          <HeadroomHeaderAnchor
            href='#footer'
            className='btn btn-primary btn-sm px-3'
            offset='80'
          >
            Contact
          </HeadroomHeaderAnchor>
        </HeadroomHeaderInner>
      </HeadroomHeader>
    </Headroom>
    <Drift appId={GATSBY_DRIFT_APP_ID} />
  </>
)

Header.propTypes = {
  siteTitle: PropTypes.string
}

Header.defaultProps = {
  siteTitle: ''
}

export default Header

const HeadroomHeader = styled.header`
  background-color: #141a3a;
`

const HeadroomHeaderInner = styled.div`
  align-items: center;
  display: flex;
  height: 80px;
  justify-content: space-between;
  margin-left: auto;
  margin-right: auto;
`

const HeadroomHeaderHeading = styled.h1`
  font-size: 24px;
  font-weight: normal;
  line-height: 1;
  margin-bottom: 0;
`

const HeadroomHeaderLink = styled(Link)`
  color: #fff;
  display: inline-block;
  letter-spacing: 1px;
  text-decoration: none;

  &:hover {
    color: #fff;
    text-decoration: none;
  }
`

const HeadroomHeaderAnchor = styled(AnchorLink)`
  border-radius: 1.2em;
`
