import React from "react";

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
          <div className="col-md-6 col-lg-6">
            <div className="block-member">
              <img src="static/img/band_members/Jacques.jpg" alt="Jacques" />
              <div className="member-info">
                <h6 className="uppercase mb-0 ">Jacques Groenewald</h6>
                <span className=" mt-0">Vocals</span>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-lg-6">
            <div className="block-member">
              <img src="static/img/band_members/Andrew.jpg" alt="Andrew" />
              <div className="member-info">
                <h6 className="uppercase mb-0 ">Andrew Veldman</h6>
                <span className=" mt-0">Lead Guitar</span>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-lg-6">
            <div className="block-member">
              <img src="static/img/band_members/Daniel.jpg" alt="Daniel" />
              <div className="member-info">
                <h6 className="uppercase mb-0 ">Daniel Botha</h6>
                <span className=" mt-0">Drums</span>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-lg-6">
            <div className="block-member">
              <img src="static/img/band_members/Louwrens.jpg" alt="Louwrens" />
              <div className="member-info">
                <h6 className="uppercase mb-0 ">Louwrens Labuschagne</h6>
                <span className=" mt-0">Bass Guitar</span>
              </div>
            </div>
          </div>
        </div>
        {/* <!--End row--> */}
      </div>
      {/* <!--End container--> */}
    </section>
  );
}
