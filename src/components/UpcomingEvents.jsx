import React from "react";

import Events from "./database/upcoming_events";

export default function UpcomingEvents() {
  const events = Events;

  return (
    <div className="row">
      {events.map(ev => (
        <div className="col-md-4 " key={ev.id}>
          <h3 className="uppercase mb-0 font-weight-600">Our Next Shows</h3>
          <a
            href={ev.eventUrl}
            style={{ color: "white" }}
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="block-content front-p pt-3 pb-3 text-center bg-red mb-4 mb-lg-0">
              <span className=" p mb-0">
                {ev.eventName}
                <br />
                {ev.location}
              </span>
            </div>
          </a>
          <div className="block-content front-p mt-2">
            <a
              className="btn btn-primary uppercase with-ico border-2 w-100"
              href={ev.tickets.url ? ev.tickers.url : ev.eventUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="icon-ticket" />
              {ev.tickets.price + (!ev.tickets.url && " at the door")}
            </a>
          </div>
        </div>
      ))}
    </div>
  );
}
