import React from "react";

import { Container, Row, Col } from "react-bootstrap";

const RELEASES = [
  {
    id: 2,
    title: "Velde",
    url: "http://smarturl.it/xya64y",
    img: "/static/img/artwork/velde.jpg",
    released: false,
    stores: [
      {
        url: "https://itunes.apple.com/za/artist/kontras/1445772282",
        name: "apple"
      },
      {
        url: "https://play.google.com/store/music/artist/Kontras?id=Aanobdoml5f2absa7i3ooltrm3q&hl=en",
        name: "play"
      },
      {
        url: "https://www.amazon.com/gp/product/B07KY4GB56/ref=dm_ws_sp_ps_dp",
        name: "amazon"
      },
      {
        url: "https://open.spotify.com/artist/13mo5g6PR09u3Rq8bEstY2?si=sytJqeERQw2EI8u1mZn0UQ",
        name: "spotify"
      },
      {
        url: "https://www.youtube.com/channel/UC3PTVGTBJz9UmWwOxhS1i9g",
        name: "youtube"
      }
    ]
  },
  {
    id: 1,
    title: "Side B",
    url: "http://smarturl.it/xya64y",
    img: "/static/img/album/2.jpg",
    released: true,
    stores: [
      {
        url: "https://itunes.apple.com/za/artist/kontras/1445772282",
        name: "apple"
      },
      {
        url: "https://play.google.com/store/music/artist/Kontras?id=Aanobdoml5f2absa7i3ooltrm3q&hl=en",
        name: "play"
      },
      {
        url: "https://www.amazon.com/gp/product/B07KY4GB56/ref=dm_ws_sp_ps_dp",
        name: "amazon"
      },
      {
        url: "https://open.spotify.com/artist/13mo5g6PR09u3Rq8bEstY2?si=sytJqeERQw2EI8u1mZn0UQ",
        name: "spotify"
      },
      {
        url: "https://www.youtube.com/channel/UC3PTVGTBJz9UmWwOxhS1i9g",
        name: "youtube"
      }
    ]
  },
  {
    id: 0,
    title: "Side A",
    url: "http://smarturl.it/80n151",
    img: "/static/img/album/1.jpg",
    released: true,
    stores: [
      {
        url: "https://itunes.apple.com/za/artist/kontras/1445772282",
        name: "apple"
      },
      {
        url: "https://play.google.com/store/music/artist/Kontras?id=Aanobdoml5f2absa7i3ooltrm3q&hl=en",
        name: "play"
      },
      {
        url: "https://www.amazon.com/gp/product/B07KY4GB56/ref=dm_ws_sp_ps_dp",
        name: "amazon"
      },
      {
        url: "https://open.spotify.com/artist/13mo5g6PR09u3Rq8bEstY2?si=sytJqeERQw2EI8u1mZn0UQ",
        name: "spotify"
      },
      {
        url: "https://www.youtube.com/channel/UC3PTVGTBJz9UmWwOxhS1i9g",
        name: "youtube"
      },
    ]
  },
];



export default function Discography() {
  return (
    <section id="discography" className="discography main">
      <Container>
        <Row className="justify-content-center">
          <Col xs={12} md={10} lg={9}>
            <div className="block-content text-center gap-one-bottom-md">
              <div className="block-title ">
                <h1 className="uppercase">Discography</h1>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
      <Container>
        <Row>
          {RELEASES.map(release => (
            <Col xs={12} md={6} lg={4} key={release.id}>
              <div className="block-album block-content">
                <h5 className="mb-0 opc-70 uppercase">{release.title}</h5>
                <a className="link" href={release.url}>
                  View Release ›
                </a>
                <a href={release.url}>
                  <img
                    className="animated"
                    src={release.img}
                    alt=""
                  />
                </a>
                <ul className="block-social list-inline mb-md-3">
                  {release.released && release.stores.map(store => (
                    <li className="list-inline-item mr-0" key={store.name}>
                      <a href={store.url}>
                        <i className={`socicon-${store.name}`} />
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
}
