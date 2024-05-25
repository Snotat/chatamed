import React, { useState } from "react";
import "../styles/sign.css";
import Footer from "../components/Footer";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Signuppat() {
  const [sign, setSign] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
  });
  const navigate = useNavigate();
  const submit = () => {
    if (sign.name && sign.email && sign.phone && sign.password) {
      axios({
        method: "post",
        url: "http://localhost:4010/api/auth/usersignup",
        data: sign,
      }).then((data) => {
        console.log(data);
        navigate("/patsignin");
        setSign({ name: "", email: "", phone: "", password: "" });
      });
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
        <div className="signupup_head">Sign Up</div>
        <form action="">
          <section>
            <label htmlFor="name">Full Name</label>
            <input
              type="name"
              name="name"
              id="name"
              value={sign.name}
              onChange={handleChange}
            />
          </section>
          <section>
            <label htmlFor="email">Email</label>
            <input
              type="email"
              name="email"
              id="email"
              onChange={handleChange}
            />
          </section>
          <section>
            <label htmlFor="phone">Phone Number</label>
            <input
              type="number"
              id="phone"
              name="phone"
              onChange={handleChange}
            />
          </section>
          <section>
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              onChange={handleChange}
            />
          </section>
        </form>
        <button className="clay_button" type="submit" onClick={submit}>
          Register
        </button>
      </div>

      <div className="signupdown">
        <Footer />
      </div>
    </div>
  );
}

export default Signuppat;
