import React from 'react'
import PageTitle from '../PageTitle'
import { Container } from 'react-bootstrap'

export default function Song({ title, children }) {
  return (
    <div className="even-odd-bg">
      <PageTitle title={title} subtitle/>
      <Container className="lyrics-container">
        {children}
      </Container>
    </div>
  )
}
