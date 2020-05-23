import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import styled from 'styled-components'
import { nanoid } from 'nanoid'

const Company = () => (
  <StaticQuery
    query={graphql`
      query LuciusCompany {
        allContentfulCompany {
          edges {
            node {
              companyHeading
              companyTable {
                th
                td
              }
            }
          }
        }
      }
    `}
    render={({ allContentfulCompany }) => (
      <CompanyBlock className='ts-block'>
        <div className='container'>
          <h2 className='font-weight-bold pb-5'>
            {allContentfulCompany.edges[0].node.companyHeading}
          </h2>
          <CompanyTable className='table'>
            <tbody>
              {allContentfulCompany.edges[0].node.companyTable.map((tableData) => (
                <tr key={nanoid()}>
                  <th scope='row'>
                    {tableData.th[0]}
                    <br />
                    {tableData.th[1]}
                  </th>
                  <td>
                    {tableData.td[0]}
                    <br />
                    {tableData.td[1]}
                  </td>
                </tr>
              ))}
            </tbody>
          </CompanyTable>
        </div>
      </CompanyBlock>
    )}
  />
)

export default Company

const CompanyBlock = styled.section`
  background-color: #fff;
`

const CompanyTable = styled.table`
  th,
  td {
    vertical-align: middle;
  }

  th {
    @media (min-width: 575px) {
      min-width: 160px;
    }
  }

  tr:last-of-type th,
  tr:last-of-type td {
    border-bottom: 1px solid #dee2e6;
  }
`
