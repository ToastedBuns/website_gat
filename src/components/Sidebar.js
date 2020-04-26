import React from 'react'
import { Link } from 'gatsby'
import Logo from '../images/icon-256x256.png'
import DLive from '../images/dlive-icon.png'
import Blubrry from '../images/blubrry-icon.png'
import MailList from '../components/MailList'

const Sidebar = () => (
  <nav id="sidebar">
    {/* HEADER */}
    <div className="sidebar-header">
      <Link to="/">
        <img src={Logo} alt="ToastedBuns logo" />
      </Link>
      <p>One toasted bun at a time</p>
      <hr />
    </div>
    {/* HEADER */}
    {/* BUTTONS */}
    <ul className="side-links">
      <li>
        <Link to="/">
          <i className="fas fa-home fa-2x nav-icon" />
          <span> Home</span>
        </Link>
      </li>
      <li>
        <Link to="/about" title="About us">
          <i className="fas fa-info fa-2x nav-icon" />
          <span> About</span>
        </Link>
      </li>
      <li>
        <Link to="/donate" title="Help us grow <3">
          <i className="fas fa-donate fa-2x nav-icon" />
          <span> Donate</span>
        </Link>
      </li>
      <li>
        <Link to="/livestream" title="Live Stream">
          <i className="fas fa-donate fa-2x nav-icon" />
          <span> Live Stream</span>
        </Link>
      </li>
    </ul>
    <hr className="separator-ruler" />
    {/* BUTTONS */}
    <ul className="social-links">
      <li>
        <a
          rel="noopener noreferrer"
          target="_blank"
          className="youtube"
          href="https://www.youtube.com/channel/UCGcwJNqGKsT4fhHhk2pxIiQ"
        >
          <i className="fab fa-youtube fa-2x" />
        </a>
      </li>
      <li>
        <a
          rel="noopener noreferrer"
          target="_blank"
          className="facebook"
          href="https://www.facebook.com/the.toasted.buns"
        >
          <i className="fab fa-facebook-f fa-2x" />
        </a>
      </li>
      <li>
        <a
          rel="noopener noreferrer"
          target="_blank"
          href="https://dlive.tv/ToastedBuns"
        >
          <img
            src={DLive}
            alt="dlive"
            style={{ maxWidth: 38, maxHeight: 38 }}
          />
        </a>
      </li>
      <li>
        <a
          rel="noopener noreferrer"
          target="_blank"
          className="twitch"
          href="https://www.twitch.tv/toastedbunslt"
        >
          <i className="fab fa-twitch fa-2x" />
        </a>
      </li>
      <li>
        <a
          rel="noopener noreferrer"
          target="_blank"
          href="https://www.blubrry.com/toastedbuns/"
        >
          <img src={Blubrry} alt="blubrry" style={{ maxWidth: 40 }} />
        </a>
      </li>
    </ul>
    <ul className="social-links" style={{ marginBottom: 20 }}>
      <li>
        <a
          rel="noopener noreferrer"
          target="_blank"
          className="stitcher"
          href="https://www.stitcher.com/podcast/toasted-buns-podcast"
        >
          <i className="fab fa-stripe-s fa-2x" />
        </a>
      </li>
      <li>
        <a
          rel="noopener noreferrer"
          target="_blank"
          className="itunes"
          href="https://itunes.apple.com/gb/podcast/toasted-buns-podcast/id1461720321"
        >
          <i className="fab fa-itunes-note fa-2x" />
        </a>
      </li>
      <li>
        <a
          rel="noopener noreferrer"
          target="_blank"
          className="spotify"
          href="https://open.spotify.com/show/3JD34Ne9uIaTovKc4pKUzk"
        >
          <i className="fab fa-spotify fa-2x" />
        </a>
      </li>
      <li>
        <a
          rel="noopener noreferrer"
          target="_blank"
          className="rss"
          href="https://pi.toastedbuns.co.uk/wordpress/?feed=podcast"
        >
          <i className="fas fa-rss fa-2x" />
        </a>
      </li>
    </ul>
    <div className="side-footer">
      <MailList />
      <iframe src="https://discordapp.com/widget?id=520902353822547989&theme=light" width="349" height="500" allowtransparency="true" frameBorder="0"></iframe>
      <p>ToastedBuns&copy; {new Date().getFullYear()}</p>
    </div>
  </nav>
)

export default Sidebar
