import { Link } from "react-router-dom";
import { TypeAnimation } from "react-type-animation";
import "./home.css";
import { useState } from "react";

const Home = () => {
  const [typingStatus, setTypingStatus] = useState("human1")

  return (
    <div className="home">
      <img src="/orbital.png" alt="" className="orbital" />
      <div className="left">
        <h1>ASSISTANT</h1>
        <h2>AI; Intensify your Creativity and Productivity</h2>
        <h3>
          Assistant is a conversational AI that simulates human interaction to
          provide information, answer questions, and assist with tasks.
        </h3>
        <Link to="/dashboard">Get Started</Link>
      </div>
      <div className="right">
        <div className="imgContainer">
          <div className="bgContainer">
            <div className="bg"></div>
          </div>
          <img src="/bot.png" alt="" className="bot" />
          <div className="chat">
            <img
              src={
                typingStatus === "human1"
                  ? "/human1.jpeg"
                  : typingStatus === "human2"
                  ? "/human2.jpeg"
                  : "bot.png"
              }
              alt=""
              className="chatImg"
            />
            <TypeAnimation
              sequence={[
                "Dean: Benefits of AI in healthcare?",
                2000,
                () => setTypingStatus("bot"),
                "Assistant: Faster diagnoses, personalized care, automation.",
                2000,
                () => setTypingStatus("human2"),
                "Victoria: Fun fact about space?",
                2000,
                () => setTypingStatus("bot"),
                "Assistant: A day on Venus is longer than its year.",
                2000,
                () => setTypingStatus("human1"),
              ]}
              wrapper="span"
              repeat={Infinity}
              cursor={true}
              omitDeletionAnimation={true}
            />
          </div>
        </div>
      </div>
      <div className="terms">
        <img src="/logo.png" alt="" className="termImg" />
        <div className="links">
          <Link to="/">Terms of Service</Link>
          <span>|</span>
          <Link to="/">Privacy Policy</Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
