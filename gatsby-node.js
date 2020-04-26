const path = require('path')
const _ = require('lodash')

function slugify(string) {
  return (
    '/' +
    string
      .trim()
      .toLowerCase()
      .replace(/ /g, '-')
      .replace(/[^\w-]+/g, '')
  )
}

exports.createPages = ({ actions, graphql }) => {
  const { createPage } = actions

  // Templates
  const templates = {
    post: path.resolve('src/templates/blog-post.js'),
    tag: path.resolve('src/templates/tag-posts.js'),
    postList: path.resolve('src/templates/post-list.js'),
  }

  return graphql(`
    {
      allMarkdownRemark {
        edges {
          node {
            frontmatter {
              tags
            }
            fields {
              slug
            }
          }
        }
      }
    }
  `).then(res => {
    if (res.errors) {
      return Promise.reject(res.errors)
    }

    const posts = res.data.allMarkdownRemark.edges
    // Single post pages
    posts.forEach(({ node }) => {
      createPage({
        path: node.fields.slug,
        component: templates.post,
        context: {
          // Passing slug for template to use to fetch the post
          slug: node.fields.slug,
        },
      })
    })
    // Get all tags
    let tags = []
    _.each(posts, edge => {
      if (_.get(edge, 'node.frontmatter.tags')) {
        tags = tags.concat(edge.node.frontmatter.tags)
      }
    })
    // Remove duplicates
    tags = _.uniq(tags)

    // Tag pages
    tags.forEach(tag => {
      createPage({
        path: `/tags/${_.kebabCase(tag)}`,
        component: templates.tag,
        context: {
          tag,
        },
      })
    })

    // Pagination pages
    const postsPerPage = 10
    const numberOfPages = Math.ceil(posts.length / postsPerPage)

    Array.from({ length: numberOfPages }).forEach((_, index) => {
      const isFirstPage = index === 0
      const currentPage = index + 1

      if (isFirstPage) return

      createPage({
        path: `/page/${currentPage}`,
        component: templates.postList,
        context: {
          limit: postsPerPage,
          skip: index * postsPerPage,
          numberOfPages: numberOfPages,
          currentPage: currentPage,
        },
      })
    })
  })
}

exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions
  if (node.internal.type === `MarkdownRemark`) {
    // const slug = createFilePath({ node, getNode, basePath: `pages` })
    const slug = slugify(node.frontmatter.title)
    createNodeField({
      node,
      name: `slug`,
      value: slug,
    })
  }
}
