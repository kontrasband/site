import React from "react";
import Page from "./Page";
import PageTitle from "../components/PageTitle";
import band from "../components/database/band_members";
import team from "../components/database/team";
import { Row, Container } from "react-bootstrap";
import BandMember from "../components/BandMember";
import MemberAbout from "../components/MemberAbout";
import { useWindowSize } from "../utils";
import Image from "../components/Image";

const The_Team = [...band, ...team];

export default function About() {
  const { width } = useWindowSize();

  return (
    <Page name="about">
      <PageTitle title="About Us" />
      <PageTitle title="The Band" subtitle />
      <Container className="band-about">
        <Image
          src="/static/img/band.jpg"
          alt=""
          className="w-100"
          paddingTop="66.667%"
        />
        <footer className="photo-credit">
          Photo by{" "}
          <a
            href="https://www.instagram.com/paige_fiddes_creative/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Paige Fiddes
          </a>
        </footer>
        <p>
          Alternative Afrikaans rockers, <b>Kontras</b>, are back with a new
          single, entitled '<b>Iets Is Fokken Fout Met My</b>', the lead single
          from their upcoming EP,{" "}
          <b>
            <i>Somer Sonder Sondes</i>
          </b>
          , due for release on the 26th of November. This single is
          Kontras&apos; first new music in more than a year since they released
          their critically acclaimed debut album,{" "}
          <b>
            <i>Vir Konteks</i>
          </b>
          , during September 2020.
        </p>

        <p>
          The latest single, '<b>Iets Is Fokken Fout Met My</b>', grabs your
          attention immediately as it introduces a new sound for the band.
          Kontras are known for their melodic guitar riffs, catchy hooks and
          driving drums, but this time round they’ve replaced these with sombre
          piano chords, subtle drumwork, and atmospheric guitars. '
          <b>Iets Is Fokken Fout Met My</b>' sees Kontras heading in a more
          intimate direction as they turn the lens on the self instead of the
          exterior world. The sound is angsty and melancholic. Upon further
          inspection you will notice that even though the song sounds
          depressing, the overall message is quite positive.
        </p>

        <blockquote className="blockquote">
          <p className="mb-0">
            ek loop soms net by jou verby
            <br />
            ek eet iets is fout
            <br />
            iets is fokken fout met my
          </p>
        </blockquote>

        <p>
          '<b>Iets Is Fokken Fout Met My</b>' tackles the darkness in oneself
          and the struggle to accept who you are during a difficult time of your
          life. The moment you realise that something is wrong, it becomes
          possible to work on it. Society’s mental health is not very strong at
          the moment, and due to this, we tend to push each other away. We
          should never be embarrassed to ask for help. Even when it feels as
          though you are drowning, many of us are in the same storm. Keep strong
          and know that the sun will shine again.
        </p>

        <PageTitle title="Some Background On Kontras" subtitle />

        <p>
          A band that formed between classes at the University of Stellenbosch,{" "}
          <b>Kontras</b> made their debut in early 2019 when Jacques Groenewald
          (vocals), Daniël Botha (drums), Andrew Veldman (lead guitar) and
          Louwrens Labuschagne (bass guitar) realised that there is a distinct
          lack of genuineness in Afrikaans music. Over the next 2 years, they
          released <b>Side A</b> and <b>Side B</b>, which included{" "}
          <i>Middelklas Middelman</i>. This song put <b>Kontras</b> on the map,
          getting widespread support from Afrikaans is Groot, KykNET,
          Huisgenoot, MaroelaMedia, Sterre, Afrikaanse Musiek Nuus, Texx and the
          City, Plektrum Musiek and many more. <b>Kontras</b> has received more
          than <b>90 000 plays</b> {/* TODO: auto calculate streams */} on
          digital streaming platforms and it’s still growing. <b>Kontras</b>’
          music can be heard nationwide on radio stations such as GrootFM,
          BayFM, HosaRadio, BokRadio, OneFM, MFM 92.6, KovsieFM, LekkerFM, Radio
          Overberg, GrindRadio and TreffersFM.
        </p>

        <blockquote className="blockquote">
          <p className="mb-0">
            Met hul unieke talent wat inderdaad in kontras is met so baie
            afgewaterde Afrikaanse musiek wat al menige oordrom of twee al laat
            bars het, is dit geen wonder dat <b>Kontras</b> se invloede strek
            vanaf punk, pop-punk, alternatiewe musiek en nog meer nie. 'n Groep
            wat verseker met geen andere vergelyk kan word nie!
          </p>
          <footer className="blockquote-footer">Ian Bredenkamp Media</footer>
        </blockquote>

        <p>
          Not too shy on the live music event scene, <b>Kontras</b> has played
          several festivals including <b>Rocking Stellies</b>,{" "}
          <b>The International Tequila Festival</b>, and <b>I Love Stellies</b>{" "}
          where they've shared the stage with the likes of{" "}
          <b>Fokofpolisiekar</b>, <b>Jack Parow</b>, <b>The Plastics</b>,{" "}
          <b>Willim Welsyn</b>, <b>The Kiffness</b>, <b>Straatligkinders</b>,{" "}
          <b>Early B</b>, <b>Van Pletzen</b>, <b>YoungstaCPT</b>, <b>Tasché</b>,
          and <b>Die Heuwels Fantasties</b> to name but a few.
        </p>
      </Container>
      <PageTitle title="The Team" subtitle />
      <Container>
        {The_Team.map((member) => {
          if (member.align === "left" || width < 768) {
            return (
              <Row key={member.name}>
                <BandMember member={member} xs={12} md={5} lg={4} />
                <MemberAbout member={member} />
              </Row>
            );
          }

          return (
            <Row key={member.name}>
              <MemberAbout member={member} />
              <BandMember member={member} xs={12} md={5} lg={4} />
            </Row>
          );
        })}
      </Container>
    </Page>
  );
}
