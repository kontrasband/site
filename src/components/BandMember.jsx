import React from "react";
import { Col } from "react-bootstrap";
import Image from './image/Image';

export default function BandMember({ member, ...rest }) {
  const { name, role, img, insta } = member;

  return (
    <Col md={6} lg={6} {...rest}>
      <a
        href={`https://instagram.com/${insta}`}
        className="link-unstyled"
        target="_blank"
        rel="noopener noreferrer"
      >
        <div className="block-member">
          <Image src={`${process.env.PUBLIC_URL}${img}`} alt={name} paddingTop="150%" />
          <div className="member-info">
            <h6 className="uppercase mb-0 ">{name}</h6>
            <span className="mt-0">{role}</span>
            <span className="mx-2">|</span>
            <span className="mt-0">
              @{insta}
            </span>
          </div>
        </div>
      </a>
    </Col>
  );
}
