import React from 'react'
import Layout from '../components/Layout'
import Seo from '../components/Seo'
import Hero from '../components/Hero'
import Whats from '../components/Whats'
import Products from '../components/Products'
import Company from '../components/Company'

const IndexPage = () => (
  <Layout>
    <Seo title='LUCIUS' />
    <Hero />
    <main id='main'>
      <Whats />
      <Products />
      <Company />
    </main>
  </Layout>
)

export default IndexPage
