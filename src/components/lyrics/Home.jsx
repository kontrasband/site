import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import ReleaseArtwork from '../ReleaseArtwork';
import PageTitle from '../PageTitle';
import DISCOGRAPHY from '../database/discography';

export default function Home() {
  return (
    <Container>
      <PageTitle title="Lyrics" />
      <Row>
          {DISCOGRAPHY.map(release => (
        <Col xs={12} md={6} xl={3}>
          <NavLink to={`/lyrics/${release.title.replace(' ', '-').toLowerCase()}`}>
            <ReleaseArtwork img={release.img} />
          </NavLink>
        </Col>
          ))}
      </Row>
    </Container>
  )
}
