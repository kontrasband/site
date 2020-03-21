import React from 'react'
import { NavLink } from 'react-router-dom';
import StoreLinks from './StoreLinks'

export default function ReleaseDetails({ details = [], stores, released }) {
  return (
    <div className="block-content gap-one-bottom-sm">
      <div className="block-album-info">
        <ul>
          {details.map(detail => {
            const { key, value, href, navlink } = detail
            return (
              <li key={key}>
                <h5 className="uppercase list-inline-item">{key}</h5>
                <span>
                  {navlink ? <NavLink to={navlink}>{value}</NavLink> : null}
                  {href ? (
                    <a href={href} target="_blank" rel="noopener noreferrer">{value}</a>
                  ) : null}
                  {!navlink && !href ? value : null}
                </span>
              </li>
            )
          })}
        </ul>
      </div>
      {stores && <StoreLinks stores={stores} show={released} className="mt-4" />}
    </div>
  )
}
