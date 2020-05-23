import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import styled from 'styled-components'
import Img from 'gatsby-image'
import AnchorLink from 'react-anchor-link-smooth-scroll'

const imgStyle = {
  position: 'absolute',
  width: '100%',
  height: 'calc(100% - 80px)',
  minHeight: '600px' // eslint-disable-line comma-dangle
}

const Hero = () => (
  <StaticQuery
    query={graphql`
      query LuciusHero {
        backgroundHero: file(relativePath: { eq: "bg_hero.jpg" }) {
          childImageSharp {
            sizes(maxWidth: 1400) {
              ...GatsbyImageSharpSizes
            }
          }
        }
        allContentfulSimpleTextFields {
          edges {
            node {
              heroHeading
              heroParagraph
            }
          }
        }
      }
    `}
    render={({ backgroundHero, allContentfulSimpleTextFields }) => (
      <HeroArticle id='hero'>
        <HeroArticleInner>
          <Img
            sizes={backgroundHero.childImageSharp.sizes}
            style={imgStyle}
          />
          <HeroArticleLayer>
            <HeroArticleContainer className='container'>
              <HeroArticleRow className='row'>
                <div className='col-md-7 pt-5 pb-5'>
                  <HeroArticleHeading>
                    {
                      allContentfulSimpleTextFields.edges[0].node
                        .heroHeading
                    }
                  </HeroArticleHeading>
                  <div>
                    <p className='w-75 text-white mb-5'>
                      {
                        allContentfulSimpleTextFields.edges[0].node
                          .heroParagraph
                      }
                    </p>
                    <HeroArticleAnchor
                      href='#main'
                      className='btn btn-outline-light btn-lg'
                    >
                      Learn more
                    </HeroArticleAnchor>
                  </div>
                </div>
              </HeroArticleRow>
            </HeroArticleContainer>
          </HeroArticleLayer>
        </HeroArticleInner>
      </HeroArticle>
    )}
  />
)

export default Hero

const HeroArticle = styled.article`
  height: calc(100vh - 80px);
  min-height: 600px;
`

const HeroArticleInner = styled.div`
  height: 100%;
`

const HeroArticleLayer = styled.div`
  background-image:
    linear-gradient(
      -60deg,
      rgba(0, 0, 0, 0) 36%,
      rgba(81, 45, 169, 0.7) 30%
    );
  height: 100%;
  position: relative;
`

const HeroArticleContainer = styled.div`
  align-items: center;
  display: flex;
  height: 100%;
`

const HeroArticleRow = styled.div`
  color: #fff;
`

const HeroArticleHeading = styled.h2`
  font-size: 2.4rem;
  font-weight: bold;
  line-height: 1.4;
  margin-bottom: 0.5em;
`

const HeroArticleAnchor = styled(AnchorLink)`
  border-radius: 1.2em;
`
