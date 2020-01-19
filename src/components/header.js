import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import "../sass/mystyles.scss"

const Header = ({ siteTitle }) => (
  <nav class="navbar is-transparent">
    <div class="container">
      <div class="navbar-brand">
        <Link to="/" class="navbar-item">
          <h3 class="title is-3">{siteTitle}</h3>
        </Link>
      </div>
      <div id="navMenu"class="navbar-menu is-active">
        <div class="navbar-end">
          <Link to="/" class="navbar-item">Home</Link>
          <Link to="/blog/" class="navbar-item">Blog</Link>
          <Link to="/about/" class="navbar-item">About</Link>
          <Link to="/projects/" class="navbar-item">Projects</Link>
        </div>
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
