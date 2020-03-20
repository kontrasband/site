import React from "react";

function Nav() {
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
            <li>
              <a className="scroll list-inline-item" href="/">
                Home
              </a>
            </li>
            <li>
              <a className="scroll list-inline-item" href="/about">
                about
              </a>
            </li>
            <li>
              <a className="scroll list-inline-item" href="/music">
                discography
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
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Nav;
