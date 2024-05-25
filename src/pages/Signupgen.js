import React from "react";
import { TbArrowBigRightFilled } from "react-icons/tb";
import "../styles/sign.css";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";

function Signupgen() {
  return (
    <div className="sign">
      <>
        <Link to="/signuppat">
          <button>
            Sign up as a patient{" "}
            <span>
              <TbArrowBigRightFilled />
            </span>
          </button>
        </Link>
        <Link to="/signuppro">
          <button>
            Sign up as a professional{" "}
            <span>
              {" "}
              <TbArrowBigRightFilled />
            </span>
          </button>
        </Link>
        <div className="signgenin">
          Already have an account, then{" "}
          <Link to="/patsignin">
            <button className="signingen">Sign In</button>
          </Link>
        </div>
      </>
      <div className="signupdown">
        <Footer />
      </div>
    </div>
  );
}

export default Signupgen;
