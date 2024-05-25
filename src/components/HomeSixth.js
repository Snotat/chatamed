import React from "react";
import "../styles/homesecond.css";
import {
  TbArrowBigRightFilled,
  TbArrowBigRightLineFilled,
} from "react-icons/tb";
import measles from "../Images/measles.jpg";
function HomeSixth() {
  return (
    <div className="homesecond">
      <div className="hs_content hs_clay">
        <div className="homesec_top">
          Daily World Health news
          <span>
            {" "}
            <TbArrowBigRightLineFilled />
          </span>
        </div>
        <div className="homesec_post">
          <div className="hs_img">
            <img src={measles} alt="" />
          </div>
          <div className="hsp_text">
            <div className="hsp_head">
              Measles outbreaks and what parents need to know
            </div>
            <div className="hsp_desc">
              In the UK, clusters of measles cases have recently been reported
              in the West Midlands and London. In the US, hundreds of people
              were exposed to measles at a Sacramento hospital in early March,
              and this week, the Centers for Disease Control and Prevention
              (CDC) sent a team of infectious disease experts to Chicago, where
              an outbre.... <a href="/">Read more...</a>{" "}
            </div>
            <div className="hsp_react">
              <span>(0)Likes</span>
              <span>(0)Dislikes</span>
              <span>(0)Comments</span>
              <span>(0)Share</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomeSixth;
