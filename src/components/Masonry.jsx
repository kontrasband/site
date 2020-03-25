import React from 'react'
import { Row, Col } from 'react-bootstrap'
import Image from './image/Image'

export default function Masonry({ images }) {
  return (
    <Row className="justify-content-center text-center">
      <Col xs={12}>
        <div className="card-gallery image-gallery">
          {images.map(im => (
            <a
              href={im}
              className="popup-image mb-0"
              key={im}
            >
              <Image
                className="animated"
                alt=""
                src={im}
                paddingTop={`${Math.random() * 100 + 50}%`}
              />
            </a>
          ))}
        </div>
      </Col>
    </Row>
  )
}
