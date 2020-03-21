import React from 'react'

export default function Page({ name, children }) {
  return (
    <section id={name} className="main page-container">
      {children}
    </section>
  )
}
