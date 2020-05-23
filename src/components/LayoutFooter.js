import React from 'react'
import PropTypes from 'prop-types'
import { StaticQuery, graphql } from 'gatsby'
import styled from 'styled-components'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import { nanoid } from 'nanoid'
import FooterBottom from './FooterBottom'
import footerBottomData from '../data/footerBottomData'

const Footer = ({ siteTitle }) => (
  <StaticQuery
    query={graphql`
      query LuciusFooter {
        allContentfulSimpleTextFields {
          edges {
            node {
              footerMessage
              footerLinks {
                link
                title
                content
              }
            }
          }
        }
      }
    `}
    render={({ allContentfulSimpleTextFields }) => (
      <SiteFooter className='ts-block pt-5 pb-5' id='footer'>
        <div className='container'>
          <SiteFooterHeader className='d-flex justify-content-between align-items-center pb-4'>
            <SiteFooterHeading>
              <SiteFooterHeadingAnchor href='#hero' offset='80'>
                LUCIUS
              </SiteFooterHeadingAnchor>
            </SiteFooterHeading>
            <SiteFooterMessage>
              {
                allContentfulSimpleTextFields.edges[0].node
                  .footerMessage
              }
            </SiteFooterMessage>
          </SiteFooterHeader>
          <SiteFooterHr />
          <div className='row pt-4'>
            {allContentfulSimpleTextFields.edges[0].node.footerLinks.map((footerLink, index) => (
              <div className='col-sm-6 col-md-4 col-xl-4 pb-5' key={nanoid()}>
                <SiteFooterIconAnchor href={footerLink.link}>
                  <FooterBottom
                    bottomImgPath={footerBottomData[index].iconName}
                    bottomImgAlt=''
                    bottomImgWidth={footerBottomData[index].iconWidth}
                    bottomImgHeight={footerBottomData[index].iconHeight}
                    bottomFigureTextTop={footerLink.content}
                    bottomFigureTextBottom={footerLink.title}
                  />
                </SiteFooterIconAnchor>
              </div>
            ))}
          </div>
        </div>
      </SiteFooter>
    )}
  />
)

Footer.propTypes = {
  siteTitle: PropTypes.string
}

Footer.defaultProps = {
  siteTitle: ''
}

export default Footer

const SiteFooter = styled.footer`
  background-color: #12264f;
`

const SiteFooterHeader = styled.header`
  color: #fff;
`

const SiteFooterHeading = styled.h2`
  color: #fff;
  display: inline-block;
  font-size: 24px;
  letter-spacing: 1px;
  margin-bottom: 0;
  text-decoration: none;
`

const SiteFooterHeadingAnchor = styled(AnchorLink)`
  color: #fff;
  display: inline-block;
  font-weight: 400;
  letter-spacing: 1px;
  text-decoration: none;

  &:hover {
    color: #fff;
    text-decoration: none;
  }
`

const SiteFooterMessage = styled.p`
  color: rgba(255, 255, 255, 0.3);
  margin-bottom: 0;
  margin-left: 2em;
`

const SiteFooterHr = styled.hr`
  border-top: 1px solid rgba(255, 255, 255, 0.3);
`

const SiteFooterIconAnchor = styled.a`
  &:hover {
    text-decoration: none;
  }
`
