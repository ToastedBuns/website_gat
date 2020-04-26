import React from 'react'
import { Link, graphql } from 'gatsby'
import Layout from '../components/layout'
import Metatags from '../components/Metatags'
import Img from 'gatsby-image'
import { slugify } from '../util/utilityFunctions'
import { DiscussionEmbed } from 'disqus-react'

export default function Template(props) {
  const post = props.data.markdownRemark.frontmatter
  const disqusShortname = 'pkpersonal'
  const disqusConfig = {
    identifier: props.data.markdownRemark.id,
    title: post.title,
  }
  const baseUrl = 'https://toastedbuns.co.uk'
  const twitterHandle = 'G1edriusLt'

  return (
    <Layout>
      <Metatags
        title={post.title}
        description={post.description}
        thumbnail={baseUrl + post.image.childImageSharp.fluid.src}
        pathname={props.location.pathname}
        url={baseUrl}
      />
      <article className="article-container">
        <h1 className="page-title">{post.title}</h1>
        <hr className="horizontal-ruler" />
        <Img fluid={post.image.childImageSharp.fluid} />
        <h4>
          Posted by: {post.author} on {post.date}
        </h4>
        <div
          dangerouslySetInnerHTML={{ __html: props.data.markdownRemark.html }}
        />
        <br />
        <div className="single-post-tags">
          <ul className="tags">
            {post.tags.map(tag => (
              <li key={tag}>
                <Link className="tag" to={`/tags/${slugify(tag)}`}>
                  {tag}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        {/* <ul>
          {post.tags.map(tag => (
            <li key={tag}>
              <Link to={`/tags/${slugify(tag)}`}>{tag}</Link>
            </li>
          ))}
        </ul> */}
        <hr className="horizontal-ruler" />
        <DiscussionEmbed shortname={disqusShortname} config={disqusConfig} />
      </article>
      <ul className="social-share-links">
        <li>
          <a
            className="facebook"
            target="_blank"
            rel="noopener noreferrer"
            href={
              'https://www.facebook.com/sharer/sharer.php?u=' +
              baseUrl +
              props.location.pathname
            }
          >
            <i className="fab fa-2x fa-facebook-f" />
          </a>
        </li>
        <li>
          <a
            className="twitter"
            target="_blank"
            rel="noopener noreferrer"
            href={
              'https://twitter.com/share?url=' +
              baseUrl +
              props.location.pathname +
              '&text=' +
              post.title +
              '&via=' +
              twitterHandle
            }
          >
            <i className="fab fa-2x fa-twitter" />
          </a>
        </li>
        <li>
          <a
            className="google"
            target="_blank"
            rel="noopener noreferrer"
            href={
              'https://plus.google.com/share?url=' +
              baseUrl +
              props.location.pathname
            }
          >
            <i className="fab fa-2x fa-google" />
          </a>
        </li>
        <li>
          <a
            className="linkedin"
            target="_blank"
            rel="noopener noreferrer"
            href={
              'https://www.linkedin.com/shareArticle?url=' +
              baseUrl +
              props.location.pathname
            }
          >
            <i className="fab fa-2x fa-linkedin" />
          </a>
        </li>
      </ul>
    </Layout>
  )
}

export const postQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      html
      frontmatter {
        title
        description
        author
        date(formatString: "MMMM Do YYYY")
        tags
        image {
          childImageSharp {
            resize(width: 860, height: 484) {
              src
            }
            fluid(maxWidth: 786) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`
