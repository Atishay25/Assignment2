import React from "react";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light" style={{borderRadius: "25px"}}>
      <a href="#" style={{fontSize: "32px", fontFamily: "Georgia", fontStyle: "inherit", marginLeft: "5vh", marginRight: "10vh"}}>
        MACHAU RESIDENCIES
      </a>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNavDropdown"
        aria-controls="navbarNavDropdown"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarNavDropdown">
        <ul className="navbar-nav">
          <li className="nav-item active">
            <a className="nav-link" href="#">
              MUSIC<span className="sr-only"></span>
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              SPORTS
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              TECH
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              GYM
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              INDOOR GAMES
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              MESSING & LAUNDRY FACILITIES
            </a>
          </li>
          <li className="nav-item dropdown">
            <a
              className="nav-link dropdown-toggle"
              href="#"
              id="navbarDropdownMenuLink"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
              style={{marginLeft: "28vh"}}
            >
              CONTACT US
            </a>
            <div
              className="dropdown-menu"
              aria-labelledby="navbarDropdownMenuLink"
            >
              <a className="dropdown-item" href="#">
                Action
              </a>
              <a className="dropdown-item" href="#">
                Another action
              </a>
              <a className="dropdown-item" href="#">
                Something else here
              </a>
            </div>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;