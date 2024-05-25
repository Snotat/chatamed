import React from "react";
import "../styles/home.css";
import HomeFirst from "../components/HomeFirst";
import HomeSecond from "../components/HomeSecond";
import HomeThird from "../components/HomeThird";
import HomeForth from "../components/HomeForth";
import HomeFifth from "../components/HomeFifth";
import HomeSixth from "../components/HomeSixth";
import Footer from "../components/Footer";

function Home() {
  return (
    <div className="home">
      <span className="home_sec">
        {" "}
        <HomeFirst />
      </span>{" "}
      <span className="home_sec">
        {" "}
        <HomeSecond />
      </span>
      <span className="home_sec">
        {" "}
        <HomeThird />
      </span>
      <span className="home_sec">
        <HomeForth />
      </span>
      <span className="home_sec">
        <HomeFifth />
      </span>
      <span className="home_sec">
        <HomeSixth />
      </span>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default Home;
