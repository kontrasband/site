import React from "react";
import { Col } from "react-bootstrap";

export default function BandMember(props) {
  const { name, role, img } = props;

  return (
    <Col md={6} lg={6}>
      <div className="block-member">
        <img src={img} alt={name} />
        <div className="member-info">
          <h6 className="uppercase mb-0 ">{name}</h6>
          <span className=" mt-0">{role}</span>
        </div>
      </div>
    </Col>
  );
}
