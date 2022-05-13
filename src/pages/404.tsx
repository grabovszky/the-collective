import * as React from 'react'
import Layout from '@lekoarts/gatsby-theme-jodie/src/components/layout'

const NotFound: React.FunctionComponent<any> = () => (
  <Layout>
    <div style={{ textAlign: 'center' }}>
      <h1>404</h1>
      <p>A keresett oldal nem található.</p>
    </div>
  </Layout>
)

export default NotFound
