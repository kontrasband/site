import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import ReleaseDetailsSkeleton from './ReleaseDetailsSkeleton';
import ImageSkeleton from './ImageSkeleton';

export default function ReleaseSkeleton({ md }) {
  return (
    <Container>
      <Row className="justify-content-center gap-one-bottom-md">
        <Col xs={12} md={md}>
          <ImageSkeleton className="mb-3" />
        </Col>
        <Col xs={12} md={6}>
          <ReleaseDetailsSkeleton />
        </Col>
      </Row>
    </Container>
  )
}
