import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Footer from "../components/Footer";
import { RxAvatar } from "react-icons/rx";

function GetProf() {
  const { id } = useParams();
  console.log(id);

  const [duta, setDuta] = useState();
  useEffect(() => {
    axios
      .post(
        "http://localhost:4010/api/auth/getprof",
        { id: id.toLowerCase() },
        {
          "Content-Type": "application/json",
        }
      )
      .then((data) => {
        console.log(data.data);
        setDuta([...data.data]);
        duta && console.log("data", duta);
      });
  }, []);

  return (
    <div className="list">
      {duta &&
        duta.map((data, index) => {
          return (
            <Link
              to={"/chat/" + data._id}
              key={index}
              className="getprof list_data"
            >
              <div className="list_data_avatar">
                <RxAvatar className="ld_icon" />
              </div>
              <div className="list_data_left">{data.title}</div>
              <div className="list_data_mid">{data.name}</div>
              <div className="list_data_right">
                <span className="ltr_top">
                  {(data.profession == "doctor" ||
                    data.profession == "radiographer") && <>Medical</>}
                  &nbsp;{" "}
                  {data.profession.charAt(0).toUpperCase() +
                    data.profession.slice(1)}
                </span>
                <span className="ltr_bottom">{data.specialty}</span>
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

export default GetProf;
