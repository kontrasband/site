import React from "react";
import { NavLink } from 'react-router-dom';
import { routes } from '../App';
import { useScrollToTop } from "../utils";

function Nav() {
  useScrollToTop();
  return (
    <header className="header default">
      <div className=" left-part">
        <a className="logo scroll" href="#wrapper">
          <img src={`${process.env.PUBLIC_URL}/static/img/kontras-logo-white.png`} alt="logo" className="mb-0 mt-2" />
        </a>
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
