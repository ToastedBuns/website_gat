import React from 'react'
import Layout from '../components/layout'

const livestream = () => {
  return (
    <Layout>
      <article className="article-container">
      <h1>Toasted Buns Live Streams!</h1>
      <p>Toasted Buns Gaming <b>Wednesdays 8 PM!</b></p>
      <p>Toasted Buns Podcast with Ahmed <b>Sundays 7 PM!</b></p>
      <p>Also Available on:</p>
      <p>Youtube: <a
        rel="noopener noreferrer"
        target="_blank"
        className="youtube"
        href="https://www.youtube.com/channel/UCGcwJNqGKsT4fhHhk2pxIiQ"
      >
      https://www.youtube.com/channel/UCGcwJNqGKsT4fhHhk2pxIiQ"
      </a></p>
      <p>DLive: <a
        rel="noopener noreferrer"
        target="_blank"
        className="DLive"
        href="https://dlive.tv/toastedbuns"
      >
      https://dlive.tv/toastedbuns
      </a>
      </p>
      <iframe height="378" width="620" src="https://player.twitch.tv/?channel=toastedbunslt" allowfullscreen ></iframe>

      </article>
    </Layout>
  )
}

export default livestream
