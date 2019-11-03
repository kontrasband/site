import React from "react";

import BandMember from "./BandMember";
import Members from "./database/band_members";

export default function BandMembers() {
  return (
    <section id="band" className="band main ">
      {/* <!--Container--> */}
      <div className="container">
        {/* <!--Row--> */}
        <div className="row justify-content-center">
          <div className="col-12 col-md-10 col-lg-9">
            <div className="block-content text-center gap-one-bottom-md">
              <div className="block-title ">
                <h1 className="uppercase">Band members</h1>
              </div>
            </div>
          </div>
        </div>
        {/* <!--End row--> */}
      </div>
      {/* <!--End container--> */}

      {/* <!--Container--> */}
      <div className="container">
        {/* <!--Row--> */}
        <div className="row">
          {Members.map(mem => (
            <BandMember member={mem} key={mem.id} />
          ))}
        </div>
        {/* <!--End row--> */}
      </div>
      {/* <!--End container--> */}
    </section>
  );
}
