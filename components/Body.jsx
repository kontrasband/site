import React from "react";

import Header from "../components/Header";
import Preloader from "../components/Preloader";
import Scripts from "../components/Scripts";

export default function Body(props) {
  return (
    <div>
      <Header />
      <Preloader />

      <div className="wrapper">{props.children}</div>

      <Scripts />
    </div>
  );
}
