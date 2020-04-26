import React from 'react'
import Layout from '../components/layout'
import Error from '../images/error-404.jpg'
const NotFoundPage = () => (
  <Layout>
    <article className="article-container">
    <img
          src={Error}
          alt="error"
        />
    <br />
    <h1 className="text-right">Please Return To Home!</h1>
    </article>
  </Layout>
)

export default NotFoundPage
