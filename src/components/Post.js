import React from 'react'
import { Link } from 'gatsby'
import Img from 'gatsby-image'
import { slugify } from '../util/utilityFunctions'

const Post = ({ slug, title, author, date, body, fluid, tags }) => {
  return (
    <div className="blog-post-card">
      <div className="left-section">
        <div className="post-thumbnail">
          <Link to={slug}>
            <Img fluid={fluid} className="thumbnail-image" />
          </Link>
          <div className="post-card-tags">
            <ul className="tags">
              {tags.map(tag => (
                <li key={tag}>
                  <Link className="tag" to={`/tags/${slugify(tag)}`}>
                    {tag}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <div className="right-section">
        <h3>
          <Link to={slug}>{title}</Link>
        </h3>
        <small>{date}</small>
        <div className="separator" />
        <p>{body}</p>
        <div className="read-more-btn">
          <Link to={slug}>
            <i className="fas fa-arrow-right fa-2x" />
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Post
