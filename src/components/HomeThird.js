import React from "react";
import "../styles/homesecond.css";
import {
  TbArrowBigRightFilled,
  TbArrowBigRightLineFilled,
} from "react-icons/tb";
import burberry from "../Images/burberry.jpg";
function HomeThird() {
  return (
    <div className="homesecond">
      <div className="hs_content hs_clay">
        <div className="homesec_top">
         Daily Food for Thought
          <span>
            {" "}
            <TbArrowBigRightLineFilled />
          </span>
        </div>
        <div className="homesec_post">
          <div className="hs_img">
            <img src={burberry} alt="" />
          </div>
          <div className="hsp_text">
            <div className="hsp_head"> The Health Benefits of Blueberries </div>
            <div className="hsp_desc">
              Blueberries, with their vibrant hue and burst of flavor, are more
              than just a tasty treat; they are a nutritional powerhouse packed
              with health benefits. From their antioxidant properties to their
              role in promoting brain health, blueberries offer a plethora of
              reasons to incorporate them into your diet.....{" "}
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

export default HomeThird;
