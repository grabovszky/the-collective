import * as React from 'react'
import Layout from '@lekoarts/gatsby-theme-jodie/src/components/layout'

const NotFound: React.FunctionComponent<any> = () => (
  <Layout>
    <div style={{ textAlign: 'center' }}>
      <h1>404</h1>
      <p>The page you are looking for is not found.</p>
    </div>
  </Layout>
)

export default NotFound
