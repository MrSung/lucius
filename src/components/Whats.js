import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import styled from 'styled-components'
import { nanoid } from 'nanoid'
import whatsData from '../data/whatsData'
import What from './What'

const Whats = () => (
  <StaticQuery
    query={graphql`
    query LuciusWhats {
      allContentfulSimpleTextFields {
        edges {
          node {
            whatWeDoHeading
            whatWeDoBody {
              body
              title
            }
          }
        }
      }
    }
  `}
    render={({ allContentfulSimpleTextFields }) => (
      <WhatsBlock className='ts-block pb-0'>
        <div className='container'>
          <h2 className='ts-title font-weight-bold'>
            {
              allContentfulSimpleTextFields.edges[0].node
                .whatWeDoHeading
            }
          </h2>
          <div className='row'>
            {allContentfulSimpleTextFields.edges[0].node.whatWeDoBody.map(({ title, body }, index) => (
              <div className='col-sm-6 col-md-4 col-xl-4 pb-5' key={nanoid()}>
                <What
                  iconStep={index + 1}
                  iconImgPath={whatsData[index]}
                  iconImgAlt=''
                  iconWidth='64'
                  iconHeight='64'
                  heading={title}
                  paragraph={body}
                />
              </div>
            ))}
          </div>
        </div>
      </WhatsBlock>
    )}
  />
)

export default Whats

const WhatsBlock = styled.section`
  background-color: #fff;
`
