import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';

export default function PageTitle({ title, subtitle }) {
    return (
      <Container>
        <Row className="justify-content-center">
          <Col xs={12} md={10} lg={9}>
            <div className="block-content text-center gap-one-bottom-md">
              <div className="block-title ">
                {subtitle ? <h2 className="uppercase">{title}</h2> : <h1 className="uppercase">{title}</h1>}
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    )
}
