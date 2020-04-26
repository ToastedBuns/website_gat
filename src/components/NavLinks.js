import React from 'react'
import { Link } from 'gatsby'

const NavLinks = () => {
  // let homeIcon = (
  //   <svg
  //     className="icon home-icon"
  //     enableBackground="new 0 0 63 55"
  //     height="55px"
  //     id="Layer_1"
  //     version="1.1"
  //     viewBox="0 0 63 55"
  //     width="63px"
  //     xmlSpace="preserve"
  //     xmlns="http://www.w3.org/2000/svg"
  //     xmlnsXlink="http://www.w3.org/1999/xlink"
  //   >
  //     <polygon
  //       fill="#231F20"
  //       points="32,-0.32 0.68,31 11,31 11,55 25,55 25,41 38,41 38,55 52,55 52,31 63.319,31 "
  //     />
  //   </svg>
  // )
  return (
    <div className="nav-links">
      <Link to="/about">
        <i className="fas fa-info fa-2x" />
      </Link>
      <Link to="/">
        <i className="fas fa-home fa-2x" />
      </Link>
      <Link to="/donate">
        <i className="fas fa-donate fa-2x" />
      </Link>
    </div>
  )
}

export default NavLinks
