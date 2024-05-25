import React, { useState } from "react";
import prof from "../utils/professsionals";
import "../styles/list.css";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";

function List() {
  console.log(prof);

  const [profe, setProfe] = useState(prof);

  return (
    <div className="list">
      {profe.map((data, index) => {
        return (
          <Link
            to={"/getprof/" + data.type.toLowerCase()}
            key={index}
            className="list_data"
          >
            <div className="list_data_left">
              <img src={data.icon} alt="" />
            </div>
            <div className="list_data_mid">
              {data.type == "Doctor" || data.type == "Scientist" ? (
                <>Medical &nbsp;{data.type}</>
              ) : (
                data.type
              )}
            </div>
          </Link>
        );
      })}

      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default List;
