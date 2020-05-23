import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const FooterBottom = ({ bottomImgPath, bottomImgAlt, bottomImgWidth, bottomImgHeight, bottomFigureTextTop, bottomFigureTextBottom }) => (
  <BottomFigure>
    <BottomFigureImage
      src={bottomImgPath}
      alt={bottomImgAlt}
      width={bottomImgWidth}
      height={bottomImgHeight}
    />
    <BottomFigureCaption>
      <span>{bottomFigureTextTop}</span>
      <span>{bottomFigureTextBottom}</span>
    </BottomFigureCaption>
  </BottomFigure>
)

export default FooterBottom

FooterBottom.propTypes = {
  bottomImgPath: PropTypes.string.isRequired,
  bottomImgAlt: PropTypes.string.isRequired,
  bottomImgWidth: PropTypes.number.isRequired,
  bottomImgHeight: PropTypes.number.isRequired,
  bottomFigureTextTop: PropTypes.string.isRequired,
  bottomFigureTextBottom: PropTypes.string.isRequired
}

const BottomFigure = styled.figure`
  align-items: center;
  display: flex;
  margin-bottom: 0;
  padding: 0.5em 1em;
`

const BottomFigureImage = styled.img`
  margin-bottom: 0;
`

const BottomFigureCaption = styled.figcaption`
  margin-left: 1em;

  span {
    color: #fff;
    display: block;
  }

  span + span {
    color: rgba(255, 255, 255, 0.3);
  }
`
