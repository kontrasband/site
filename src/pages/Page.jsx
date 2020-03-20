import React from 'react'

export default function Page({ name, children }) {
  return (
    <div className="wrapper">
      <section id={name} className="main">
        {children}
      </section>
    </div>
  )
}
