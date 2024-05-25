import React from "react";
import "../styles/homefirst.css";
import { TbArrowBigRightFilled } from "react-icons/tb";
import A from "../Images/A.jpeg";
import B from "../Images/B.jpg";
import E from "../Images/E.jpg";
import F from "../Images/F.jpg";
import G from "../Images/G.jpg";
import H from "../Images/H.jpg";
import I from "../Images/I.jpg";
import C from "../Images/C.jpg";
import D from "../Images/D.jpg";
import J from "../Images/J.jpg";
import K from "../Images/K.jpg";
import L from "../Images/L.jpg";
import M from "../Images/M.jpg";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";

import { Link } from "react-router-dom";

function HomeFirst() {
  return (
    <div className="homefirst">
      <div className="slideshow">
        <Slide
          arrows={false}
          canSwipe={false}
          cssClass="slind"
          duration={3000}
          easing="cubic"
          onChange={function noRefCheck() {}}
          slidesToScroll={13}
          slidesToShow={13}
          onStartChange={function noRefCheck() {}}
          transitionDuration={500}
        >
          <div className="each-slide-effect">
            <img style={{ width: "100%" }} src={A} alt="" />
          </div>
          <div className="each-slide-effect">
            <img style={{ width: "100%" }} src={B} alt="" />
          </div>
          <div className="each-slide-effect">
            <img style={{ width: "100%" }} src={C} alt="" />
          </div>{" "}
          <div className="each-slide-effect">
            <img style={{ width: "100%" }} src={D} alt="" />
          </div>
          <div className="each-slide-effect">
            <img style={{ width: "100%" }} src={E} alt="" />
          </div>
          <div className="each-slide-effect">
            <img style={{ width: "100%" }} src={F} alt="" />
          </div>{" "}
          <div className="each-slide-effect">
            <img style={{ width: "100%" }} src={G} alt="" />
          </div>
          <div className="each-slide-effect">
            <img style={{ width: "100%" }} src={H} alt="" />
          </div>
          <div className="each-slide-effect">
            <img style={{ width: "100%" }} src={I} alt="" />
          </div>{" "}
          <div className="each-slide-effect">
            <img style={{ width: "100%" }} src={J} alt="" />
          </div>
          <div className="each-slide-effect">
            <img style={{ width: "100%" }} src={K} alt="" />
          </div>
          <div className="each-slide-effect">
            <img style={{ width: "100%" }} src={L} alt="" />
          </div>{" "}
          <div className="each-slide-effect">
            <img style={{ width: "100%" }} src={M} alt="" />
          </div>
        </Slide>
      </div>
      <div className=""> </div>
      <div className="hf_section">
        <span className="hf_bottom">
          Do you want answers/solutions to health questions/problems?
        </span>
        <Link to="/medics">
          <button className="hf_button">
            Chat a medic{" "}
            <span>
              <TbArrowBigRightFilled />
            </span>
          </button>
        </Link>
      </div>
    </div>
  );
}

export default HomeFirst;
