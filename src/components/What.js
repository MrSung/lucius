import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const What = ({ iconStep, iconImgPath, iconImgAlt, iconWidth, iconHeight, heading, paragraph }) => (
  <WhatFigure>
    <WhatStep>{iconStep}</WhatStep>
    <WhatCircle>
      <WhatImage
        src={iconImgPath}
        alt={iconImgAlt}
        width={iconWidth}
        height={iconHeight}
      />
    </WhatCircle>
    <figcaption>
      <WhatHeading>{heading}</WhatHeading>
      <WhatContent>{paragraph}</WhatContent>
    </figcaption>
  </WhatFigure>
)

What.propTypes = {
  iconStep: PropTypes.number.isRequired,
  iconImgPath: PropTypes.string.isRequired,
  iconImgAlt: PropTypes.string.isRequired,
  iconWidth: PropTypes.string.isRequired,
  iconHeight: PropTypes.string.isRequired,
  heading: PropTypes.string.isRequired,
  paragraph: PropTypes.string.isRequired
}

export default What

const WhatFigure = styled.figure`
  margin-bottom: 1.5625rem;
  position: relative;
`

const WhatStep = styled.span`
  background-color: #3a79f9;
  border-radius: 50%;
  box-shadow: 0.125rem 0.1875rem 0.9375rem rgba(0, 0, 0, 0.15);
  color: #fff;
  font-weight: 600;
  height: 1.875rem;
  left: 0;
  line-height: 1.875rem;
  position: absolute;
  text-align: center;
  top: 0;
  width: 1.875rem;

  @media (max-width: 575px) {
    left: -90px;
    margin: auto;
    right: 0;
  }
`

const WhatCircle = styled.div`
  background-color: rgb(235, 241, 254);
  border-radius: 50%;
  display: inline-block;
  flex: 0 0 120px;
  height: 120px;
  line-height: 120px;
  margin-bottom: 2.5625rem;
  overflow: hidden;
  text-align: center;
  width: 120px;

  @media (max-width: 575px) {
    display: block;
    margin-left: auto;
    margin-right: auto;
  }
`

const WhatImage = styled.img`
  margin-bottom: 1.5rem;
  vertical-align: bottom;
`

const WhatHeading = styled.h4`
  font-size: 1.25rem;
  margin-bottom: 1em;
`

const WhatContent = styled.p`
  color: rgba(0, 0, 0, 0.5);
`
