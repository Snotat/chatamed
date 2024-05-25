import React, { useState } from "react";
import "../styles/sign.css";
import Footer from "../components/Footer";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Signuppro() {
  const navigate = useNavigate();
  const [sign, setSign] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
    profession: "counselor",
    specialty: "",
    title: "",
    address: "",
  });

  const submit = () => {
    if (
      sign.name &&
      sign.email &&
      sign.phone &&
      sign.password &&
      sign.specialty &&
      sign.title &&
      sign.address &&
      sign.profession
    ) {
      axios({
        method: "post",
        url: "http://localhost:4010/api/auth/profsignup",
        data: sign,
      }).then((data) => {
        console.log(data);
        setSign({
          name: "",
          email: "",
          phone: "",
          password: "",
          profession: "counsellor",
          specialty: "",
          title: "",
          address: "",
        });
        navigate("/profsignin");
      });
    } else {
      console.log("Please input all required details appropriately!");
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
            <label htmlFor="title">Title</label>
            <input
              value={sign.title}
              onChange={handleChange}
              type="text"
              id="title"
              name="title"
            />
          </section>
          <section>
            <label htmlFor="name">Full Name</label>
            <input
              value={sign.name}
              onChange={handleChange}
              type="text"
              id="name"
              name="name"
            />
          </section>
          <section>
            <label htmlFor="pro">Profession</label>
            <select
              onChange={handleChange}
              value={sign.profession}
              name="profession"
              id="pro"
            >
              <option value="cousellor">Psychologist/Cousellor</option>
              <option value="doctor">Medical Doctor</option>
              <option value="nurse">Nurse</option>
              <option value="pharmacist">Pharmacist</option>
              <option value="scientist">Biomedical Scientist</option>
              <option value="optometrist">Optometrist</option>
              <option value="dentist">Dentist</option>
              <option value="radiographer">Radiographer</option>
              <option value="physiotherapist">Physiotherapist</option>
              <option value="dietitian">Dietitian</option>
            </select>
          </section>
          <section>
            <label htmlFor="spec">Specialty</label>
            <input
              value={sign.specialty}
              type="text"
              id="spec"
              name="specialty"
              onChange={handleChange}
            />
          </section>
          <section>
            <label htmlFor="email">Email</label>
            <input
              value={sign.email}
              onChange={handleChange}
              type="email"
              name="email"
              id="email"
            />
          </section>
          <section>
            <label htmlFor="phone">Phone Number</label>
            <input
              value={sign.phone}
              onChange={handleChange}
              type="number"
              id="phone"
              name="phone"
            />
          </section>
          <section>
            <label htmlFor="address">Address</label>
            <input
              value={sign.address}
              type="text"
              id="address"
              onChange={handleChange}
              name="address"
            />
          </section>
          <section>
            <label htmlFor="password">Password</label>
            <input
              value={sign.password}
              type="password"
              id="password"
              name="password"
              onChange={handleChange}
            />
          </section>
        </form>
        <button onClick={submit} className="clay_button" type="submit">
          Register
        </button>
      </div>
      <div className="signupdown">
        <Footer />
      </div>
    </div>
  );
}

export default Signuppro;
