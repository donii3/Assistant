import { Link } from "react-router-dom";
import "./home.css";

const Home = () => {
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
        </div>
      </div>
    </div>
  );
};

export default Home;
