import React from "react";
import Head from "next/head";

export default function Header() {
  return (
    <Head>
      {/* <!-- Metas --> */}
      <meta charSet="utf-8" />
      <title>Kontras</title>
      <meta name="description" content="" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta property="og:title" content="Kontras" />
      <meta property="og:description" content="Afrikaans Alternative Rock" />
      <meta
        property="og:image"
        content="http://www.kontrasband.com/static/img/kontras-aandklas.jpg"
      />
      <meta property="og:url" content="http://www.kontrasband.com/" />
      {/* <!-- Css --> */}
      <link
        href="/static/css/bootstrap.css"
        rel="stylesheet"
        type="text/css"
        media="all"
      />
      <link
        href="/static/css/base.css"
        rel="stylesheet"
        type="text/css"
        media="all"
      />
      <link
        href="/static/css/main.css"
        rel="stylesheet"
        type="text/css"
        media="all"
      />
      <link
        href="/static/css/flexslider.css"
        rel="stylesheet"
        type="text/css"
        media="all"
      />
      <link
        href="/static/css/magnific-popup.css"
        rel="stylesheet"
        type="text/css"
        media="all"
      />
      <link
        href="/static/css/fonts.css"
        rel="stylesheet"
        type="text/css"
        media="all"
      />
      <link rel="stylesheet" type="text/css" href="/static/css/our.css" />
      <link
        href="http://fonts.googleapis.com/css?family=Dosis:100,300,400,600,700"
        rel="stylesheet"
        type="text/css"
      />
      <link
        href="https://fonts.googleapis.com/css?family=Open+Sans:300i,300,400,400i,600,700,800"
        rel="stylesheet"
      />
      <link rel="icon" type="image/png" href="static/img/icon-170x170.png" />
    </Head>
  );
}
