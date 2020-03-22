import React from 'react'
import Page from './Page'
import PageTitle from '../components/PageTitle';
import band from '../components/database/band_members';
import team from '../components/database/team';
import { Row, Container } from 'react-bootstrap';
import BandMember from '../components/BandMember';
import MemberAbout from '../components/MemberAbout';
import { useWindowSize } from '../utils';
import Image from '../components/image/Image';

const The_Team = [...band, ...team];

export default function About() {
  const { width } = useWindowSize();

  return (
    <Page name="about">
      <PageTitle title="About Us" />
      <PageTitle title="The Band" subtitle />
      <Container className="band-about">
        <Image src="/static/img/band.jpg" alt="" className="w-100" paddingTop="66.667%" />
        <footer className="photo-credit">Photo by Paige Fiddes</footer>
        <p>
          South Africa's latest sensation, <b>Kontras</b>, is back with a brand new single, <b>'Velde'</b>; the first release from
          their upcoming debut album, <i>Ruimtevaarder</i>, set to be released in early September. If you are a fan of
          {" "}<b>Spoegwolf</b>, <b>Fokofpolisiekar</b>, or <b>Die Heuwels Fantasties</b>, then <b>'Velde'</b> is the perfect fit for you.
        </p>

        <p>
          <b>Kontras'</b> latest hit, <b>'Velde'</b> tackles themes of loss and frustration, yet finds hope in the every day and
          mundane surroundings. This Stellenbosch based band found their roots in punk, but <b>'Velde'</b> proves
          that the band has grown their sound to incorporate a lighter and more tender product with a new
          sound that is sure to be a fan favourite among South Africans.
        </p>

        <p>
          Since their sold-out debut in February 2019, <b>Kontras</b> has seen a wide array of success during their
          short-lived existence. Their single <b>'Middelklas Middelman'</b> is currently spinning on national television
          on <b>KykNET</b>, received praise from well-known print publications such as <b>Huisgenoot</b>, who said that &ldquo;<i>die
          akoeste verwerking sal mense in 'n rokerige kroeg in vervoering hê</i>&rdquo;. They've also been mentioned in
          various online publications such as <b>Texx and the City</b>, <b>Sterre</b>, <b>Afrikaanse Musiek Nuus</b>, <b>RWRant</b>, <b>SA
          Music News</b>, <b>Plectrum Musiek</b>, <b>MatieMedia</b>, and <b>Cape Town Experiences Magazine</b> to name but a
          few.
        </p>

        <blockquote className="blockquote">
          <p className="mb-0">
            Met hul unieke talent wat inderdaad in kontras is met so baie afgewaterde Afrikaanse musiek wat al menige oordrom of
            twee al laat bars het, is dit geen wonder dat <b>Kontras</b> se invloede strek vanaf punk, pop-punk, alternatiewe musiek en nog
            meer nie. 'n Groep wat verseker met geen andere vergelyk kan word nie!
          </p>
          <footer className="blockquote-footer">Ian Bredenkamp Media</footer>
        </blockquote>

        <p>
          <b>'Middeklas Middelman'</b> also received support from the influential <b>Afrikaans Is Groot</b> who included
          this track as part of their official <a href="https://open.spotify.com/playlist/2D8Bq06NMp2DIHHmNeMBQ4?si=dkAa6ZyLRkisF1al6dyoAQ">Alternatief is Groot</a> playlist on Spotify. Furthermore, Spotify also
          included this track as part of the editorial playlist <b>Afrikaans Pop Hits</b> and it's currently receiving
          thousands of streams via <b>Apple Music</b>'s editorial playlist, <a href="https://music.apple.com/in/playlist/alternatiewe-afrikaans/pl.fdadbcef62bb4bc196202bae0a858350">Alternatiewe Afrikaans</a>, where <b>Kontras</b> shares the company of Afrikaans legends such as <b>Francois van Coke</b>, <b>Fokofpolisiekar</b>, <b>Karen Zoid</b>, <b>Die
          Heuwels Fantasies</b>, <b>aKING</b>, <b>Jack Parow</b> and many more artists.
        </p>

        <p>
          Within weeks of release, <b>Kontras</b> has received more than <b>35 000</b> plays on digital streaming platforms
          and it's still growing. <b>Kontras'</b> music can be heard nationwide on radio stations such as <b>BokRadio</b>, <b>OneFM</b>, <b>MFM 92.6</b>, <b>KovsieFM</b>, <b>LekkerFM</b>, <b>Radio Overberg</b>, <b>GrindRadio</b> and <b>TreffersFM</b>. Of these
          stations, <b>Kontras'</b> charted with multiple singles on the <b>MFM Top 40</b> for a total of 40 weeks, while on <b>KovsieFM</b> for 10 weeks where <b>Kontras'</b> single <b>'24'</b> is sitting comfortably on #2, and <b>'My Dolla Nee'</b>
          reached the <b>#18</b> position on their end of year chart for 2019.
        </p>

        <p>
          Not too shy on the live music event scene, <b>Kontras</b> has played several festivals including <b>Rocking
          Stellies</b>, <b>The International Tequila Festival</b>, and <b>I Love Stellies</b> where they've shared the stage with
          the likes of <b>Fokofpolisiekar</b>, <b>Jack Parow</b>, <b>The Plastics</b>, <b>Willim Welsyn</b>, <b>The Kiffness</b>, <b>Straatligkinders</b>, <b>Early B</b>, <b>Van Pletzen</b>, <b>YoungstaCPT</b>, <b>Tasché</b>, and <b>Die Heuwels Fantasties</b> to name but a few.
        </p>
      </Container>
      <PageTitle title="The Team" subtitle />
              <Container>
      {The_Team.map(member => {
        if (member.align === "left" || width < 768) {
          return (
            <Row key={member.name}>
              <BandMember member={member} xs={12} md={5} lg={4} />
              <MemberAbout member={member}/>
            </Row>
          )
        }

        return (
          <Row key={member.name}>
            <MemberAbout member={member}/>
            <BandMember member={member} xs={12} md={5} lg={4} />
          </Row>
        )
      })}
      </Container>
    </Page>
  )
}
