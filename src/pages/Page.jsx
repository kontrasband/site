import React from 'react';
import Contact from '../components/Contact';

export default function Page({ name, children }) {
  return (
    <section id={name} className="main page-container">
      {children}
    </section>
  )
}
