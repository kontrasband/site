import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import ReleaseDetails from './ReleaseDetails';
import ReleaseArtwork from './ReleaseArtwork';

export default function Release({ release, md = 4 }) {
  const { url, img, stores, released, details = [] } = release;
    return (
      <Container>
        <Row className="justify-content-center">
          <Col xs={12} md={md}>
            <ReleaseArtwork url={url} img={img} />
          </Col>
          <Col xs={12} md={6}>
            <ReleaseDetails details={details} released={released} stores={stores} />
          </Col>
        </Row>
      </Container>

    )
}
