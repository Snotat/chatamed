import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { TbBrandWechat } from "react-icons/tb";
import Footer from "../components/Footer";

function Messages() {
  const [duta, setDuta] = useState();
  const id = localStorage.getItem("id");
  useEffect(() => {
    axios.post("http://localhost:4010/api/auth/getmsg", { id }).then((data) => {
      console.log(data);

      const mons = data.data?.filter(
        (v, i, a) => a.findLastIndex((v2) => v2.sender === v.sender) === i
      );

      setDuta(mons);
      duta && console.log("data", duta);
    });
  }, []);
  return (
    <div className="messages list">
      {duta &&
        duta.map((data, index) => {
          const userid = data.users?.filter((data) => {
            return data != id;
          });

          console.log("down", userid, id);
          return (
            <Link
              to={"/chat/" + userid}
              key={index}
              className="getprof list_data"
            >
              <div className="list_data_avatar">
                <TbBrandWechat className="ld_icon" />
              </div>
              <div className="list_data_mid">{data.message.text}</div>
              <div className="list_data_right">
                <span className="ltr_top">&nbsp;</span>
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

export default Messages;
