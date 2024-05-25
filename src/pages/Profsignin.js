import React, { useContext, useState } from "react";
import "../styles/sign.css";
import Footer from "../components/Footer";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

function Profsignin() {
  const [sign, setSign] = useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate();
  const submit = (e) => {
    e.preventDefault();
    try {
      if (sign.email && sign.password) {
        axios({
          method: "post",
          url: "http://localhost:4010/api/auth/profsignin",
          data: sign,
        }).then((data) => {
          console.log(data);
          localStorage.setItem("token", data.data.token);
          localStorage.setItem("name", data.data.data.name);
          localStorage.setItem("id", data.data.data._id);
          localStorage.setItem("phone", data.data.data.phone);
          localStorage.setItem("profession", data.data.data.profession);
          localStorage.setItem("title", data.data.data.title);
          localStorage.setItem("address", data.data.data.address);
          localStorage.setItem("specialty", data.data.data.specialty);
          localStorage.setItem("email", data.data.data.email);
          navigate("/");
        });
      }
    } catch (error) {
      console.error("Authentication failed:", error);
      localStorage.removeItem("token");
    }
  };
  const handleChange = (event) => {
    const { name, value } = event.target;
    console.log(sign);
    setSign(() => {
      return {
        ...sign,
        [name]: value,
      };
    });
  };
  return (
    <div className="signup">
      <div className="signupup clay">
        <div className="signupup_head">Sign In as professional</div>
        <form action="">
          <section>
            <label htmlFor="email">Email</label>
            <input
              onChange={handleChange}
              type="email"
              name="email"
              id="email"
            />
          </section>
          <section>
            <label htmlFor="password">Password</label>
            <input
              onChange={handleChange}
              name="password"
              type="password"
              id="password"
            />
          </section>
        </form>
        <button onClick={submit} className="clay_button" type="submit">
          Log in
        </button>

        <Link to="/patsignin">Sign in as patient</Link>
      </div>
      <div className="signupdown">
        <footer>
          <Footer />
        </footer>
      </div>
    </div>
  );
}

export default Profsignin;
