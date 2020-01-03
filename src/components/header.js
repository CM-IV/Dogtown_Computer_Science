import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import "../pages/_mystyles.scss"

const Header = ({ siteTitle }) => (
  <nav class="navbar" role="navigation" aria-label="main navigation">
    <div class="navbar-brand">
      <Link to="/" class="navbar-item">
        <h3 class="title is-3">{siteTitle}</h3>
      </Link>
    </div>

    <div id="navbarBasicExample" class="navbar-menu is-active">
      <div class="navbar-end">
        <Link to="/" class="navbar-item">Home</Link>
        <Link to="/about/" class="navbar-item">About</Link>
        <Link to="/projects/" class="navbar-item">My Projects</Link>
        <Link to="/blog/" class="navbar-item">Blog</Link>
      </div>
    </div>
  </nav>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
