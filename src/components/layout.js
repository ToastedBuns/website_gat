import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import '../styles/index.scss'
import Sidebar from './Sidebar'
import ScrollUpButton from './ScrollUpButton'
import NavLinks from './NavLinks'

const Layout = props => {
  return (
    <div>
      <Helmet
        title="Toasted Buns"
        meta={[
          {
            name: 'description',
            content:
              'ToastedBuns is a podcast show and blog website for everything interesting/controversial/funny',
          },
          { name: 'keywords', content: 'podcast, blog, news, funny' },
        ]}
      >
        <link
          rel="stylesheet"
          href="https://use.fontawesome.com/releases/v5.5.0/css/all.css"
          integrity="sha384-B4dIYHKNBt8Bc12p+WXckhzcICo0wtJAoU8YZTY5qE0Id1GSseTk6S+L3BlXeVIU"
          crossOrigin="anonymous"
        />
        <html lang="en" />
      </Helmet>

      <div className="wrapper">
        <Sidebar />
        <NavLinks />
        <div id="content">
          <div className="custom-container">{props.children}</div>
          <ScrollUpButton scrollStepInPx="75" delayInMs="10" />
        </div>
      </div>
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
