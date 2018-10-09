import React from "react";
import "./Navbar.css";

// Depending on the current path, this component sets the "active" class on the appropriate navigation link item
const NavItem = props => {
  const pageURI = window.location.pathname + window.location.search
  const liClassName = (props.path === pageURI) ? "nav-item active" : "nav-item";
  const aClassName = props.disabled ? "nav-link disabled" : "nav-link"
  return (
    <li className={liClassName}>
      <a href={props.path} className={aClassName}>
        {props.name}
        {(props.path === pageURI) ? (<span className="sr-only">(current)</span>) : ''}
      </a>
    </li>
  )
}

class Navbar extends React.Component {
  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <a className="navbar-brand" href="/">
          <div className="navbar-brand-name">
              <div className="tntt-name">
                <img src="/images/hover.png" className="veym-logo" width="70" height="70" alt="veym-logo"/>
                <div className="brand-name eng">VIETNAMESE EUCHARISTIC YOUTH MOVEMENT IN THE USA</div><div className="brand-name vn">THIẾU NHI THÁNH THỂ VIỆT NAM TẠI HOA KY</div>
              </div>
          </div>
        </a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
          <ul className="navbar-nav">
            <NavItem path="/" name="Home" />
            <NavItem path="/about-us" name="About Us" />
            <NavItem path="/our-regions" name="Our Regions" />
            <NavItem path="/news" name="News" />
            <NavItem path="/resources" name="Resources" />
            <NavItem path="/store" name="TNTT Store" />
          </ul>
        </div>
      </nav>
    )
  }
}

export default Navbar;


