import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

export const ProductImage = ({ productImgPath, productImgAlt, productImgWidth, productImgHeight }) => (
  <figure>
    <img
      src={productImgPath}
      alt={productImgAlt}
      width={productImgWidth}
      height={productImgHeight}
    />
  </figure>
)

ProductImage.propTypes = {
  productImgPath: PropTypes.string.isRequired,
  productImgAlt: PropTypes.string.isRequired,
  productImgWidth: PropTypes.string.isRequired,
  productImgHeight: PropTypes.string.isRequired
}

export const ProductTable = ({ children }) => (
  <table className='table'>
    <thead>
      <tr>
        <th>Property</th>
        <th>Value</th>
      </tr>
    </thead>
    <ProductTableBody>{children}</ProductTableBody>
  </table>
)

ProductTable.propTypes = {
  children: PropTypes.node.isRequired
}

const ProductTableBody = styled.tbody`
  tr:last-of-type th,
  tr:last-of-type td {
    border-bottom: 1px solid #dee2e6;
  }
`
