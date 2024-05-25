import React from "react";
import "../styles/homesecond.css";
import {
  TbArrowBigRightFilled,
  TbArrowBigRightLineFilled,
} from "react-icons/tb";
import npd from "../Images/NPD.jpg";
function HomeForth() {
  return (
    <div className="homesecond">
      <div className="hs_content hs_clay">
        <div className="homesec_top">
          Diseases of the day
          <span>
            {" "}
            <TbArrowBigRightLineFilled />
          </span>
        </div>
        <div className="homesec_post">
          <div className="hs_img">
            <img src={npd} alt="" />
          </div>
          <div className="hsp_text">
            <div className="hsp_head">
              Niemann-Pick Disease: Understanding a Rare Genetic Disorder
            </div>
            <div className="hsp_desc">
              Niemann-Pick Disease (NPD) is a rare genetic disorder that affects
              the body's ability to metabolize lipids, leading to the
              accumulation of harmful levels of these substances in various
              organs and tissues. This rare condition, which manifests in
              different forms, poses significant challenges for patients and
              their families, highlight... <a href="/">Read more...</a>{" "}
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

export default HomeForth;
