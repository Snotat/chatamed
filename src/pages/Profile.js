import React, { useEffect, useState } from "react";
import { IoPersonCircleOutline } from "react-icons/io5";
import "../styles/profile.css";
import { IoMdSettings } from "react-icons/io";
import { useNavigate } from "react-router-dom";

function Profile() {
  const navigate = useNavigate();
  useEffect(() => {
    const isAuth = localStorage.getItem("token");
    console.log(isAuth);
    isAuth == null || (isAuth == "" && navigate("/sign"));
  }, []);
  const [prof, setProf] = useState(true);
  useEffect(() => {
    console.log(localStorage.getItem("profession"));
    if (
      localStorage.getItem("profession") == null ||
      localStorage.getItem("profession") == ""
    ) {
      setProf(false);
    }
  }, []);

  return (
    <div className="profile">
      <div className="profiler clay">
        <h3 className="profile_head">
          <div className="profile_head_left">Profile</div>
          <div className="profile_head_right">
            Edit
            <IoMdSettings />
          </div>
        </h3>
        <div className="profile_top">
          <IoPersonCircleOutline className="profile_icon" />
        </div>
        <div className="profile_mid">
          <section>
            <div className="profile_left">Name</div>
            <div className="profile_right">
              {localStorage.getItem("title")}&nbsp;
              {localStorage.getItem("name")}
            </div>
          </section>
          <section>
            <div className="profile_left">Email</div>
            <div className="profile_right">{localStorage.getItem("email")}</div>
          </section>
          <section>
            <div className="profile_left">Phone Number</div>
            <div className="profile_right">{localStorage.getItem("phone")}</div>
          </section>
          {prof && (
            <>
              {" "}
              <section>
                <div className="profile_left">Profession</div>
                <div className="profile_right">
                  {localStorage.getItem("profession")}
                </div>
              </section>
              <section>
                <div className="profile_left">Specialty</div>
                <div className="profile_right">
                  {localStorage.getItem("specialty")}
                </div>
              </section>
              <section>
                <div className="profile_left">Address</div>
                <div className="profile_right">
                  {localStorage.getItem("address")}
                </div>
              </section>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default Profile;
