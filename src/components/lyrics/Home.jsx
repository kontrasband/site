import React from 'react';
import { NavLink } from 'react-router-dom';

export default function Home() {
  return (
    <div>
      <ul>
        <li>
          <NavLink to="/lyrics/velde">Velde</NavLink>
          <NavLink to="/lyrics/24">24</NavLink>
          <NavLink to="/lyrics/side-b">Side B</NavLink>
          <NavLink to="/lyrics/side-a">Side A</NavLink>
        </li>
      </ul>
    </div>
  )
}
