import * as React from 'react'
import { Link, useStaticQuery, graphql } from 'gatsby'
import '../styles.scss'
import {
  FaTwitter,
  FaLinkedin,
  FaInstagram,
  FaStrava,
  FaGithub,
} from 'react-icons/fa'

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          siteTitle
        }
      }
    }
  `)

  const [isActive, setisActive] = React.useState(false)

  return (
    <div>
      <nav
        className="navbar has-background-light"
        role="navigation"
        aria-label="main navigation"
      >
        <div className="container is-max-desktop">
          <div className="navbar-brand py-4 pr-2">
            <Link className="navbar-item has-text-weight-bold is-size-4" to="/">
              &rsaquo; {data.site.siteMetadata.siteTitle}
              <span className="cursor"></span>
            </Link>
            <button
              onClick={() => {
                setisActive(!isActive)
              }}
              className={`navbar-burger ${isActive ? 'is-active' : ''}`}
              aria-label="menu"
              aria-expanded="false"
              data-target="navbarBasic"
            >
              <span aria-hidden="true"></span>
              <span aria-hidden="true"></span>
              <span aria-hidden="true"></span>
            </button>
          </div>
          <div
            id="navbarBasic"
            className={`navbar-menu ${isActive ? 'is-active' : ''}`}
          >
            <div className="navbar-end">
              <Link to="/posts" className="navbar-item">
                Posts
              </Link>
              <Link to="/photography" className="navbar-item">
                Photography
              </Link>
              <Link to="/about" className="navbar-item">
                About
              </Link>
              <Link to="/contact" className="navbar-item">
                Contact
              </Link>
              <a
                href="https://twitter.com/_disco"
                className="navbar-item is-hidden-touch"
                title="twitter"
              >
                <FaTwitter />
              </a>
              <a
                href="https://github.com/d1sc0"
                className="navbar-item is-hidden-touch"
                title="github"
              >
                <FaGithub />
              </a>
              <a
                href="https://www.instagram.com/_d1sco/"
                className="navbar-item is-hidden-touch"
                title="instagram"
              >
                <FaInstagram />
              </a>
              <a
                href="https://www.strava.com/athletes/1170885"
                className="navbar-item is-hidden-touch"
                title="strava"
              >
                <FaStrava />
              </a>
              <a
                href="https://uk.linkedin.com/in/stuartjmackenzie"
                className="navbar-item is-hidden-touch"
                title="strava"
              >
                <FaLinkedin />
              </a>
            </div>
          </div>
        </div>
      </nav>

      <section className="section">
        <div className="container is-max-desktop">
          <div className="main-content">{children}</div>
        </div>
      </section>

      <footer className="footer has-background-white pt-2">
        <div className="content has-text-centered">
          <div className="socials pb-3">
            <a
              href="https://twitter.com/_disco"
              className="mr-4"
              title="twitter"
            >
              <FaTwitter size="1.6rem" />
            </a>
            <a href="https://github.com/d1sc0" className="mr-4" title="github">
              <FaGithub size="1.6rem" />
            </a>
            <a
              href="https://www.instagram.com/_d1sco/"
              className="mr-4"
              title="instagram"
            >
              <FaInstagram size="1.6rem" />
            </a>
            <a
              href="https://www.strava.com/athletes/1170885"
              className="mr-4"
              title="strava"
            >
              <FaStrava size="1.6rem" />
            </a>
            <a
              href="https://uk.linkedin.com/in/stuartjmackenzie"
              className="mr-4"
              title="strava"
            >
              <FaLinkedin size="1.6rem" />
            </a>
          </div>
          <strong>{data.site.siteMetadata.siteTitle}</strong> was built by{' '}
          <a href="https://twitter.com/_disco">Stuart Mackenzie</a> using
          Gatsby.
        </div>
      </footer>
    </div>
  )
}
export default Layout
