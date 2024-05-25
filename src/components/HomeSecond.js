import React from "react";
import "../styles/homesecond.css";
import {
  TbArrowBigRightFilled,
  TbArrowBigRightLineFilled,
} from "react-icons/tb";
import darkspot from "../Images/darkspots.jpg";
function HomeSecond() {
  return (
    <div className="homesecond">
      <div className="hs_content hs_clay">
        <div className="homesec_top">
          Forum
          <span>
            {" "}
            <TbArrowBigRightLineFilled />
          </span>
        </div>
        <div className="homesec_post">
          <div className="hs_img">
            <img src={darkspot} alt="" />
          </div>
          <div className="hsp_text">
            <div className="hsp_head">Dark spots my the face?</div>
            <div className="hsp_desc">
              Guys!!! I am not comfortable with dark spots on my face. I have
              loosed confidence and self-esteem, is there any soap, cream or
              procedure to remove them from home? Everyone su....{" "}
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

export default HomeSecond;
