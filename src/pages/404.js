import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'
import Layout from '../components/Layout'
import Seo from '../components/Seo'

const NotFoundPage = () => (
  <Layout>
    <Seo title='404: Not found' />
    <NotFoundPageBody>
      <div className='container'>
        <h1>NOT FOUND</h1>
        <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
        <Link to='/'>Go back to homepage</Link>
      </div>
    </NotFoundPageBody>
  </Layout>
)

export default NotFoundPage

const NotFoundPageBody = styled.div`
  align-items: center;
  background-color: #f7f7f7;
  display: flex;
  flex-grow: 1;
`
