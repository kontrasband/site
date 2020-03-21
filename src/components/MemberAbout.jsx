import React from "react";
import { Col } from "react-bootstrap";

export default function MemberAbout({ member, ...rest }) {
  const { name, role, img, insta, align, about } = member;

  return (
    <Col xs={6} md={8} lg={9}>
    <div className="block-content gap-one-bottom-sm">
      <div className="block-album-info">
        <ul>
          {about && about.map(detail => {
            const { key, value } = detail
            if (align === 'left') {
              return  (
                <li key={key}>
                  <h5 className="uppercase list-inline-item">{key}</h5>
                  <span>
                    {value}
                  </span>
                </li>
              )
            }

            return (
              <li key={key} className="text-right">
                <span>
                  {value}
                </span>
                <h5 className="uppercase list-inline-item ml-4">{key}</h5>
              </li>
            )
          })}
        </ul>
      </div>
    </div>
    </Col>
  );
}
