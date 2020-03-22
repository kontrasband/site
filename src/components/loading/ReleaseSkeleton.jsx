import React from 'react'
import Skeleton from 'react-loading-skeleton'
import { Container, Row, Col } from 'react-bootstrap';
import ReleaseDetailsSkeleton from './ReleaseDetailsSkeleton';

export default function ReleaseSkeleton({ md }) {
  return (
    <Container>
      <Row className="justify-content-center gap-one-bottom-md">
        <Col xs={12} md={md}>
          <Skeleton width="100%" height={360} />
        </Col>
        <Col xs={12} md={6}>
          <ReleaseDetailsSkeleton />
        </Col>
      </Row>
    </Container>
  )
}
