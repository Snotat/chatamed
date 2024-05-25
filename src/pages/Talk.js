import React, { useEffect, useState } from "react";
import "../styles/talk.css";
import user1 from "../Images/user1.png";
import user2 from "../Images/user2.png";
import axios from "axios";
import { useParams } from "react-router-dom";

function Talk() {
  const { id } = useParams();
  const myid = localStorage.getItem("id");
  console.log(id, myid);
  const [text, setText] = useState("");
  const [messages, setMessages] = useState([]);
  const [count, setCount] = useState(1);

  const send = () => {
    axios
      .post("http://localhost:4010/api/auth/addmessage", {
        from: myid,
        to: id,
        message: text,
      })
      .then((res) => {
        console.log("restt", res);
        setCount(count + 1);
        setText("");
      });
  };

  useEffect(() => {
    axios
      .post("http://localhost:4010/api/auth/getmessages", {
        from: myid,
        to: id,
      })
      .then((res) => {
        console.log(res.data);
        setMessages(res.data);
      });
  }, [count]);

  const handleChange = (event) => {
    setText(event.target.value);
    console.log(text);
  };

  return (
    <div className="talk">
      <div className="container">
        <div className="msg-header">
          <div className="container1">
            <img src={user1} className="msgimg" />
            <div className="active"></div>
          </div>
        </div>

        <div className="chat-page">
          <div className="msg-inbox">
            <div className="chats">
              <div className="msg-page">
                {messages.map((data, index) => {
                  return data.fromSelf == false ? (
                    <div key={index} className="received-chats">
                      <div className="received-chats-img">
                        <img src={user1} />
                      </div>
                      <div className="received-msg">
                        <div className="received-msg-inbox">
                          <p>{data.message}</p>
                        </div>
                      </div>
                    </div>
                  ) : (
                    <div key={index} className="outgoing-chats">
                      <div className="outgoing-chats-img">
                        <img src={user1} />
                      </div>
                      <div className="outgoing-msg">
                        <div className="outgoing-chats-msg">
                          <p className="multi-msg">{data.message}</p>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="msg-bottom">
              <div className="input-group">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Write message..."
                  value={text}
                  onChange={handleChange}
                />

                <span className="input-group-text send-icon">
                  <button onClick={send} className="">
                    Send
                  </button>
                </span>

                <div onClick={() => setCount(count + 1)}>..</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Talk;
