import React from "react";
import { Container, Col, Row } from "react-bootstrap";

const RELEASE_LINKS = [
  {
    id: 0,
    link: "https://itunes.apple.com/za/artist/kontras/1445772282",
    icon: "socicon-apple",
    name: "apple"
  },
  {
    id: 1,
    link: "https://play.google.com/store/music/artist/Kontras?id=Aanobdoml5f2absa7i3ooltrm3q&hl=en",
    icon: "socicon-play",
    name: "play"
  },
  {
    id: 2,
    link: "https://www.amazon.com/gp/product/B07KY4GB56/ref=dm_ws_sp_ps_dp",
    icon: "socicon-amazon",
    name: "amazon"
  },
  {
    id: 3,
    link: "https://open.spotify.com/artist/13mo5g6PR09u3Rq8bEstY2?si=sytJqeERQw2EI8u1mZn0UQ",
    icon: "socicon-spotify",
    name: "spotify"
  },
  {
    id: 4,
    link: "https://www.youtube.com/channel/UC3PTVGTBJz9UmWwOxhS1i9g",
    icon: "socicon-youtube",
    name: "youtube"
  },
]

export default function LatestAlbum() {
  return (
    <section id="album" className="latest main">
      <Container className="container">
        <Row className="justify-content-center">
          <Col xs={12} md={10} lg={9}>
            <div className="block-content text-center gap-one-bottom-md">
              <div className="block-title ">
                <h1 className="uppercase">Latest Release</h1>
              </div>
            </div>
          </Col>
        </Row>
      </Container>

      <Container>
        <Row className="justify-content-center">
          <Col xs={12} md={6}>
            <img src={process.env.PUBLIC_URL + "/static/img/artwork/velde.jpg"} alt="Latest Release" />
          </Col>
          <Col xs={12} md={6}>
            <div className="block-content gap-one-bottom-sm">
              <div className="block-album-info">
                <ul>
                  <li>
                    <h5 className="uppercase list-inline-item ">Title</h5>
                    <span>Velde</span>
                  </li>
                  <li>
                    <h5 className="uppercase list-inline-item ">Album</h5>
                    <span>Ruimtevaarder</span>
                  </li>
                  <li>
                    <h5 className="uppercase list-inline-item">Released</h5>
                    <span>20 March 2020</span>
                  </li>
                  <li>
                    <h5 className="uppercase list-inline-item ">Label</h5>
                    <span>Independent</span>
                  </li>
                  <li>
                    <h5 className="uppercase list-inline-item">Genre</h5>
                    <span>Afrikaans Pop Rock</span>
                  </li>
                  <li>
                    <h5 className="uppercase list-inline-item">Artwork</h5>
                    <span><a href="http://instagram.com/nannaventer" target="_blank" rel="noopener noreferrer">@nannaventer</a></span>
                  </li>
                  <li>
                    <h5 className="uppercase list-inline-item">Produced</h5>
                    <span><a href="http://instagram.com/joellismusic" target="_blank" rel="noopener noreferrer">@joellismusic</a></span>
                  </li>
                  <li>
                    <h5 className="uppercase list-inline-item">Music Video</h5>
                    <span><a href="https://www.youtube.com/watch?v=2OeLrsLnCio" target="_blank" rel="noopener noreferrer">YouTube</a></span>
                  </li>
                </ul>
              </div>
              <ul className="block-social list-inline mt-4">
                {RELEASE_LINKS.map(link => (
                  <li key={link.id} className="list-inline-item mr-0">
                    <a href={link.link}>
                      <i className={link.icon} />
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
