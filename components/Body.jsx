import React from "react";

import Header from "./Header";
import Preloader from "./Preloader";
import Scripts from "./Scripts";

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
