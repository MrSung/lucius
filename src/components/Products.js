import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import styled from 'styled-components'
import { nanoid } from 'nanoid'
import { ProductImage, ProductTable } from '../components/Product'

function parseProducts (obj) {
  const columns = []

  for (let index = 0; index < obj.productHeading1.length; index++) {
    columns.push(
      <article className={index > 0 ? 'mt-5' : ''} key={nanoid()}>
        {obj.productHeading1[index].content !== '' ? (
          <h3 className='pb-3'>{obj.productHeading1[index].content}</h3>
        ) : (
          ''
        )}
        <div className='row'>
          <div className='col-md-5'>
            <ProductImage
              productImgPath={obj.productImage[index].content}
              productImgAlt=''
              productImgWidth='400'
              productImgHeight='300'
            />
          </div>
          <div className='col-md-7'>
            {obj.productHeading2[index].content !== '' ? (
              <h4 className='pb-3'>{obj.productHeading2[index].content}</h4>
            ) : (
              ''
            )}
            <ProductTable>
              {obj.productTable[index].tbody.map((row, rowIndex) => (
                <tr key={rowIndex}>
                  <td>{row.property}</td>
                  <td>{row.value}</td>
                </tr>
              ))}
            </ProductTable>
          </div>
        </div>
      </article>
    )
  }

  return columns
}

const Products = () => (
  <StaticQuery
    query={graphql`
      query LuciusProducts {
        allContentfulProducts {
          edges {
            node {
              productsHeading
              productHeading1 {
                content
              }
              productHeading2 {
                content
              }
              productImage {
                content
              }
              productTable {
                tbody {
                  value
                  property
                }
              }
            }
          }
        }
      }
    `}
    render={({ allContentfulProducts }) => (
      <ProductsBlock className='ts-block pb-5'>
        <div className='container'>
          <h2 className='font-weight-bold pb-5'>
            {allContentfulProducts.edges[0].node.productsHeading}
          </h2>
          {parseProducts(allContentfulProducts.edges[0].node)}
        </div>
      </ProductsBlock>
    )}
  />
)

export default Products

const ProductsBlock = styled.section`
  background-color: #f7f7f7;
`
