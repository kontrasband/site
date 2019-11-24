import React from "react";
import { Container, Row, Col } from "react-bootstrap";

export default function Footer() {
  return (
    <footer className="pt-5 pb-5 footer">
      <Container>
        <Row className="justify-content-between align-items-center">
          <Col md={6}>
            <small className="small">
              <span>&copy; 2019 all rights reserved</span>
            </small>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}
