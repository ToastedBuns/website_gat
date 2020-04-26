import React from 'react'
import Helmet from 'react-helmet'

const Metatags = props => {
  return (
    <Helmet
      title={props.title}
      meta={[
        { name: 'title', content: props.title },
        {
          name: 'description',
          content: props.description && props.description,
        },
        {
          property: 'og:title',
          content: props.title,
        },
        {
          property: 'og:url',
          content: props.pathname ? props.url + props.pathname : props.url,
        },
        {
          property: 'og:image',
          content: props.thumbnail && props.thumbnail,
        },
        {
          property: 'og:image:secure_url',
          content: props.thumbnail && props.thumbnail,
        },
        {
          property: 'og:description',
          content: props.description && props.description,
        },
        {
          property: 'og:image:width',
          content: '960',
        },
        {
          property: 'og:image:height',
          content: '630',
        },
        {
          property: 'og:locale',
          content: 'en',
        },
        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'twitter:title', content: props.title },
        {
          name: 'twitter:description',
          content: props.description && props.description,
        },
        {
          name: 'twitter:image',
          content: props.thumbnail && props.thumbnail,
        },
        { property: 'og:type', content: 'website' },
        { name: 'robots', content: 'index, follow' },
        { name: 'twitter:creator', content: '@G1edriusLt' },
        { property: 'og:site_name', content: 'toastedbuns.co.uk' },
      ]}
    >
      <html lang="en" />
    </Helmet>
  )
}

export default Metatags
