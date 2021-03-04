import React from "react";
import '../resources/navbar.css'



const Navbar = (props) => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div id="navbar_details" className="container-fluid">
        <a className="navbar-brand" href="#">Navbar</a>
       <div>
            <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
                <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">
                    Home
                </a>
                </li>
                <li className="nav-item">
                <a className="nav-link" href="#">
                    About
                </a>
                </li>
                <li className="nav-item">
                <a className="nav-link" href="#">
                    Services
                </a>
                </li>
                <li className="nav-item">
                <a className="nav-link" href="#">
                    Contact
                </a>
                </li>
            </ul>
            </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
