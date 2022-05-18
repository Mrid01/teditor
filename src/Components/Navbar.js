import React from "react";


export default function Navbar(props) {
  return (
    <>
      <nav
        className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}
      >
        <div className="container-fluid">
          <a className="navbar-brand" href="/">
            {props.title}
          </a>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            
            <div className={`form-check form-switch ms-auto mb-1 mb-lg-1 mx-4 text-${props.mode==='light'?'dark':'light'} `}>
              <input
                className="form-check-input "
                type="checkbox"
                onClick={props.toggleMode}
                role="switch"
                id="flexSwitchCheckDefault"
                
              />
              <label
                className="form-check-label"
                htmlFor="flexSwitchCheckDefault"
              >
                Dark mode
              </label>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
