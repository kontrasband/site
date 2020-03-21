import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import ReleaseDetails from './ReleaseDetails';

export default function Release({ release, md = 4 }) {
  const { url, img, stores, released, details = [] } = release;
    return (
      <Container>
        <Row className="justify-content-center">
          <Col xs={12} md={md}>
            <a href={url} target="_blank" rel="noopener noreferrer">
              <img src={`${process.env.PUBLIC_URL}${img}`} alt="Latest Release" className="animated" />
            </a>
          </Col>
          <Col xs={12} md={6}>
            <ReleaseDetails details={details} released={released} stores={stores} />
          </Col>
        </Row>
      </Container>

    )
}
