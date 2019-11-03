import React from "react";

export default function Preloader() {
  return (
    <div className="loader">
      {/* <!-- Preloader inner --> */}
      <div className="loader-inner">
        <svg
          width="120"
          height="220"
          viewBox="0 0 100 100"
          className="loading-spinner"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle
            className="spinner"
            cx="50"
            cy="50"
            r="21"
            fill="#13181d"
            strokeWidth="2"
          />
        </svg>
      </div>
      {/* <!-- End preloader inner --> */}
    </div>
  );
}
