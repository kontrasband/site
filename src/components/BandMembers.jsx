import React from "react";

import { Container, Row, Col } from "react-bootstrap";

import BandMember from "./BandMember";
import Members from "./database/band_members";

export default function BandMembers() {
  return (
    <section id="band" className="band main ">
      <Container>
        <Row className="justify-content-center">
          <Col xs={12} md={10} lg={9}>
            <div className="block-content text-center gap-one-bottom-md">
              <div className="block-title ">
                <h1 className="uppercase">Band members</h1>
              </div>
            </div>
          </Col>
        </Row>
      </Container>

      <Container>
        <Row>
          {Members.map(mem => (
            <BandMember member={mem} key={mem.id} />
          ))}
        </Row>
      </Container>
    </section>
  );
}
