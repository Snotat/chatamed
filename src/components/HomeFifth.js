import React from "react";
import "../styles/homesecond.css";
import {
  TbArrowBigRightFilled,
  TbArrowBigRightLineFilled,
} from "react-icons/tb";
import oral from "../Images/oralhealthday.png";
function HomeFifth() {
  return (
    <div className="homesecond">
      <div className="hs_content hs_clay">
        <div className="homesec_top">
          World Health Days
          <span>
            {" "}
            <TbArrowBigRightLineFilled />
          </span>
        </div>
        <div className="homesec_post">
          <div className="hs_img">
            <img src={oral} alt="" />
          </div>
          <div className="hsp_text">
            <div className="hsp_head">March 20: World oral health day.</div>
            <div className="hsp_desc">
              Poor oral health can lead to various health issues, including gum
              disease, tooth decay, and even more serious conditions such as
              heart disease and diabetes. By raising awareness about the
              importance of oral health and encouraging people to take care of
              their teeth and gums, World Oral Health Day aims to imp....{" "}
              <a href="/">Read more...</a>{" "}
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

export default HomeFifth;
