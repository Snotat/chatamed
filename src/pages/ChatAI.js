import React, { useState } from "react";
import { OpenAI } from "openai";
import "../styles/talk.css";
import user1 from "../Images/user1.png";
import user2 from "../Images/user2.png";
import axios from "axios";

function ChatAI() {
  const [messages, setMessages] = useState([]);
  const [text, setText] = useState("");

  const send = async () => {
    const api = "";
    const options = {
      method: "POST",
      url: "https://api.textcortex.com/v1/texts/blogs",
      headers: {
        "Content-Type": "application/json",
        Authorization:
          "Bearer gAAAAABmHz0420GWyUMDdOE-O97Cjre3WCB3ZyXnOBp5W7QPuD3kJOLysbjLeSxEpAHo7mQwp10VEz3CdFR3qBGcNMZHjN2qA_i6OvWn69MvbU4u0U9cgyQd9ur8p-N7pqzws7IU9GrT",
      },
      data: {
        context: text,
        formality: "prefer_less",
        keywords: [
          "medical",
          "health",
          "diseases",
          "treatment",
          "medication",
          "procedure",
        ],
        max_tokens: 2048,
        model: "chat-sophos-1",
        n: 1,
        source_lang: "auto",
        target_lang: "auto",
        temperature: 0.65,
        title: "Medical solution/answer",
      },
    };

    axios
      .request(options)
      .then(function (response) {
        console.log(response.data.data.outputs[0]);

        setMessages([
          ...messages,
          { role: "user", content: text },
          { role: "assistant", content: response.data.data.outputs[0].text },
        ]);

        console.log(messages);
        setText("");
      })
      .catch(function (error) {
        console.error(error);
      });
  };
  const handleChange = (event) => {
    setText(event.target.value);
    console.log(text);
  };
  return (
    <div className="chatai">
      <div className="talk">
        <div className="container">
          <div className="msg-header">
            <div className="container1">
              <img src={user1} className="msgimg" />
              <div className="active">
                <p>Robot/AI</p>
              </div>
            </div>
          </div>

          <div className="chat-page">
            <div className="msg-inbox">
              <div className="chats">
                <div className="msg-page">
                  {messages?.map((data, index) => {
                    return data.role == "assistant" ? (
                      <div key={index} className="received-chats">
                        <div className="received-chats-img">
                          <img src={user2} />
                        </div>
                        <div className="received-msg">
                          <div className="received-msg-inbox">
                            <p>{data.content}</p>
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
                            <p className="multi-msg">{data.content}</p>

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
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ChatAI;
