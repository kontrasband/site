import React from 'react'

export default function StoreLinks({ stores, show = true, className }) {
  return (
    <ul className={`block-social list-inline ${className || ''}`}>
      {show && stores.map(store => (
        <li className="list-inline-item mr-0" key={store.name}>
            <a href={store.url}>
            <i className={`socicon-${store.name}`} />
            </a>
        </li>
      ))}
    </ul>
  )
}
