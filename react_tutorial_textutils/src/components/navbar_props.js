import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom';

export default function Navbar(props) {
  return (
    <nav className={`navbar navbar-expand-lg bg-${props.mode} navbar-${props.mode}`}>
      <div className="container-fluid">
        <a className="navbar-brand" href="/">{props.title}</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link" aria-current="page" to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about">{props.about}</Link>
            </li>
          </ul>
          <div className="d-flex">
            <div className="bg-primary rounded mx-2" onClick={() => { props.toggleColor('primary') }} style={{ height: '20px', width: '30px', cursor: 'pointer' }}>
            </div>
            <div className="bg-danger rounded mx-2" onClick={() => { props.toggleColor('danger') }} style={{ height: '20px', width: '30px', cursor: 'pointer' }}>
            </div>
            <div className="bg-success rounded mx-2" onClick={() => { props.toggleColor('success') }} style={{ height: '20px', width: '30px', cursor: 'pointer' }}>
            </div>
            <div className="bg-warning rounded mx-2" onClick={() => { props.toggleColor('warning') }} style={{ height: '20px', width: '30px', cursor: 'pointer' }}>
            </div>
          </div>
          <div className={`form-check form-switch mx-3 text-${props.mode === 'light' ? 'dark' : 'light'}`}>
            <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" onClick={props.toggleMode} />
            <label className="form-check-label" for="flexSwitchCheckDefault">Dark Mode</label>
          </div>
          <form className="d-flex" role="search">
            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
            <button className="btn btn-outline-primary" type="submit">Search</button>
          </form>
        </div>
      </div>
    </nav>
  );
}

Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  about: PropTypes.string
}

Navbar.defaultProps = {
  title: "Set title here",
  about: "About text here"
}