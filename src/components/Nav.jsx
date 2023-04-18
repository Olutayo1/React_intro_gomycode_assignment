import React from "react";


function Nav () {
    
    return(
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
    <div className="header"></div>

    <div className="container">
      <a className="navbar-brand" href="www">Navbar</a>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item">
            <a className="nav-link active" aria-current="page" href="www">Home</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="www">Features</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="www">Pricing</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="www">contact us</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>)

};
    
    export default Nav;
    
    






