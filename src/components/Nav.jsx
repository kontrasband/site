import React from "react";
import { NavLink } from 'react-router-dom';
import { useScrollToTop } from "../utils";
import { routes }  from '../App';


function Nav() {
  useScrollToTop();
  return (
    <header className="header default">
      <div className=" left-part">
        <NavLink className="logo scroll" to="/">
          <img src={`${process.env.PUBLIC_URL}/static/img/kontras-logo-white.png`} alt="logo" className="mb-0 mt-2" />
        </NavLink>
      </div>
      <div className="right-part">
        <nav className="main-nav">
          <div className="toggle-mobile-but">
            {/* eslint-disable-next-line */}
            <a href="#" className="mobile-but">
              <div className="lines"></div>
            </a>
          </div>
          <ul className="main-menu list-inline">
            {[...routes].reverse().map(route => (
              <li key={route.path}>
                <NavLink className="scrolllist-inline-item" to={route.path}>
                  {route.title}
                </NavLink>
              </li>
            ))}
            {/* <li>
              <a className="scroll list-inline-item" href="/about">
                about
              </a>
            </li>
            <li>
              <a className="scroll list-inline-item" href="/band">
                Band
              </a>
            </li>
            <li>
              <a className="scroll list-inline-item" href="/gallery">
                Gallery
              </a>
            </li>
            <li>
              <a className="scroll list-inline-item" href="/contact">
                Contact
              </a>
            </li> */}
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Nav;
