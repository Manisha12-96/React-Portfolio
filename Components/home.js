// import React, { useState } from "react";
import homedata from "../yourData";
export default function home() {
  return (
    <div>
      <section
        id="home"
        className="flex height-fix"
        style={{ color: "#616161" }}
      >
        <div id="pt" className="canvas"></div>
        <div className="flex">
          <div className="text">
            {homedata.headtitle1}{" "}
            <span className="highlight">{homedata.headtitle2}</span>.
            <br />
            {homedata.headtitle3}
          </div>

          <div className="button page-link" dest="about">
            {homedata.headtitle4}
            {homedata.headicon1}
          </div>

          <nav className="flex">
            {homedata.navlink.map((navlink, index) => (
              <>
                <div className="link-wrap" key={index}>
                  <div className="active page-link" dest="home"></div>
                  <div className="page-link" dest={navlink.dest}>
                    {navlink.opt}
                  </div>
                </div>
              </>
            ))}
            {homedata.toggleicon}
          </nav>
        </div>
      </section>
    </div>
  );
}
