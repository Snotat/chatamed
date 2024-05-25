import React, { useEffect, useState } from "react";
import "../styles/topbar.css";
import { ImSun } from "react-icons/im";
import { BsMoonStarsFill } from "react-icons/bs";
import { Link } from "react-router-dom";
import light from "../Images/logo_dark.png";
import dark from "../Images/logo_light.png";
import { useNavigate } from "react-router-dom";
import { BiSolidMessageDetail } from "react-icons/bi";
import { IoPerson } from "react-icons/io5";

function TopBar() {
  const [isDark, setIsDark] = useState(true);
  const navigate = useNavigate();
  const signout = () => {
    localStorage.clear();
    navigate("/");
  };
  useEffect(() => {
    if (isDark) {
      document.body.classList.remove("dark");
    } else {
      document.body.classList.add("dark");
    }
  }, [isDark]);
  const handleChange = (event) => {
    if (event.target.checked) {
      console.log("✅ Checkbox is checked");
    } else {
      console.log("⛔️ Checkbox is NOT checked");
    }
    setIsDark((current) => !current);
  };
  return (
    <div className="topbar">
      <div className="tb_left">
        <Link to="/">{isDark ? <img src={dark} /> : <img src={light} />}</Link>
      </div>
      <div className="tb_right">
        {localStorage.getItem("token") && (
          <>
            {" "}
            <Link to="/profile" className="tb_icons">
              <IoPerson className="tb_icon" />
            </Link>{" "}
            <Link to="/messages" className="tb_icons">
              <BiSolidMessageDetail className="tb_icon" />
            </Link>{" "}
          </>
        )}
        <div onClick={handleChange} className="tb_icons ">
          {isDark ? (
            <BsMoonStarsFill className="tb_icon" />
          ) : (
            <ImSun className="tb_icon" />
          )}
        </div>
        {localStorage.getItem("token") ? (
          <div onClick={signout} className="tb_icons  tb_icon_text">
            Sign Out
          </div>
        ) : (
          <Link to="/sign" className="tb_icons  tb_icon_text">
            Sign Up
          </Link>
        )}
      </div>
    </div>
  );
}

export default TopBar;
