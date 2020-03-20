import React from "react";

import Preloader from "./Preloader";

export default function Body(props) {
  return (
    <>
      <Preloader />
      <div className="wrapper">{props.children}</div>
    </>
  );
}
