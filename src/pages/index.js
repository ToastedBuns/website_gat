import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/layout'
import Post from '../components/Post'
import PaginationLinks from '../components/PaginationLinks'

const IndexPage = ({ data }) => {
  const postsPerPage = 10
  const numberOfPages = Math.ceil(
    data.allMarkdownRemark.totalCount / postsPerPage
  )
  return (
    <Layout>
      {/* <h1>Welcome to ToastedBuns</h1>
      <h2>Recent posts</h2> */}
      {data.allMarkdownRemark.edges.map(({ node }) => (
        <Post
          key={node.id}
          slug={node.fields.slug}
          title={node.frontmatter.title}
          author={node.frontmatter.author}
          date={node.frontmatter.date}
          body={node.excerpt}
          tags={node.frontmatter.tags}
          fluid={node.frontmatter.image.childImageSharp.fluid}
        />
      ))}
      <PaginationLinks currentPage={1} numberOfPages={numberOfPages} />
    </Layout>
  )
}

export const pageQuery = graphql`
  query SiteIndexQuery {
    allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      limit: 10
    ) {
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
            date(formatString: "MMMM Do YYYY")
            author
            tags
            image {
              childImageSharp {
                fluid(maxWidth: 660, maxHeight: 371) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
          fields {
            slug
          }
          excerpt(pruneLength: 250)
        }
      }
    }
  }
`

export default IndexPage
