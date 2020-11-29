import React from 'react'
import Page from './Page'
import PageTitle from '../components/PageTitle';
import band from '../components/database/band_members';
import team from '../components/database/team';
import { Row, Container } from 'react-bootstrap';
import BandMember from '../components/BandMember';
import MemberAbout from '../components/MemberAbout';
import { useWindowSize } from '../utils';
import Image from '../components/Image';

const The_Team = [...band, ...team];

export default function About() {
  const { width } = useWindowSize();

  return (
    <Page name="about">
      <PageTitle title="About Us" />
      <PageTitle title="The Band" subtitle />
      <Container className="band-about">
        <Image src="/static/img/band.jpg" alt="" className="w-100" paddingTop="66.667%" />
        <footer className="photo-credit">Photo by <a href="https://www.instagram.com/paige_fiddes_creative/" target="_blank" rel="noopener noreferrer">Paige Fiddes</a></footer>
        <p>
          Afrikaans rock band, <b>Kontras</b>, have finally released their debut album <i>Vir Konteks</i> on all digital platforms on the 11th of September 2020. The Stellenbosch band has released several singles throughout the year, namely <i>'Die Happy Song'</i>, <i>‘Mors Jou Drank’</i>, <i>‘Die Ruimtevaarder’</i> and <i>‘Velde’</i> (the latter also has a music video). <i>‘Velde’</i> &amp; <i>‘Die Ruimtevaarder’</i> has received tremendous support from <i>Apple Music</i>’s editorial playlist, <a href="https://music.apple.com/in/playlist/alternatiewe-afrikaans/pl.fdadbcef62bb4bc196202bae0a858350">Alternatiewe Afrikaans</a>, <i>Die Happy Song</i> garnered national publicity due to its topics of womanhood and GBV, and <i>‘Mors Jou Drank’</i> charted for more than 10 weeks on KovsieFM’s ‘Clip Hard Rock Chart’.
        </p>

        <p>
          What makes Kontras’ <i>Vir Konteks</i> a step above other albums, is that it caters to everyone. <b>Kontras </b>made a point of it to give listeners context on who they are and where they come from; break up songs, love songs, party songs, political commentary and songs that will leave you angry. It builds a bridge between alternative and contemporary Afrikaans music by including element from each genre. <i>Vir Konteks</i> ties in the current global and political climate from the past 10 years, but it also doesn’t shy away from placing the individual under the microscope.
        </p>

        <p>
          Tracks like Chemikalieë, Parafien Paradys, and Die Mislukte Rewolusie questions the status quo of Afrikaans culture, while tounge in cheek bops like Peruvian Flu and Mors Jou Drank reminds us not to take ourselves too seriously. Velde, Die Ruimtevaarder and <i>Die Happy Song</i> places the focus on your loved ones and how they can help you get through a difficult time. Gee Meer and Sprokies Katastrofies tackles our inner demons and tackles subjects like anxiety, self-loathing and mental health issues. Sout In My Are is an ode to the working class; willing to do anything to put food on the table, while Jou Eie Kruisiging makes use of bible metaphors to make sense of a messy breakup.
        </p>

        <blockquote className="blockquote">
          <p className="mb-0">
            “Ons as mense mis soveelkeer die ware konteks agter wat vir ons gesê word deur ander. Selde krap ons dieper as die oppervlak. <i>Vir Konteks</i> is 'n dieper krap vir 'n groter jeuk, wat ons voel ons nie kan bereik nie”
          </p>
          <footer className="blockquote-footer">Jacques Groenewald (vocalist)</footer>
        </blockquote>

        <PageTitle title="Some Background On Kontras" subtitle />

        <p>
          A band that formed between classes at the University of Stellenbosch, <b>Kontras</b> made their debut in early 2019 when Jacques Groenewald (vocals), Daniël Botha (drums), Andrew Veldman (lead guitar) and Louwrens Labuschagne (bass guitar) realised that there is a distinct lack of genuineness in Afrikaans music. Over the next 2 years, they released <b>Side A</b> and <b>Side B</b>, which included <i>Middelklas Middelman</i>. This song put <b>Kontras</b> on the map, getting widespread support from Afrikaans is Groot, KykNET, Huisgenoot, MaroelaMedia, Sterre, Afrikaanse Musiek Nuus, Texx and the City, Plektrum Musiek and many more. <b>Kontras</b> has received more than <b>90 000 plays</b> {/* TODO: auto calculate streams */} on digital streaming platforms and it’s still growing. <b>Kontras</b>’ music can be heard nationwide on radio stations such as GrootFM, BayFM, HosaRadio, BokRadio, OneFM, MFM 92.6, KovsieFM, LekkerFM, Radio Overberg, GrindRadio and TreffersFM.
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
                <MemberAbout member={member} />
              </Row>
            )
          }

          return (
            <Row key={member.name}>
              <MemberAbout member={member} />
              <BandMember member={member} xs={12} md={5} lg={4} />
            </Row>
          )
        })}
      </Container>
    </Page>
  )
}
