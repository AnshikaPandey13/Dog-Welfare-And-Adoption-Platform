import { useNavigate } from "react-router-dom";
import "../App.css";
import bgImage from "../assets/home.png";

function GetStarted() {
  const navigate = useNavigate();

  return (
    <div className="get-started-full">
      <img
        src={bgImage}
        alt="Puppy"
        className="get-started-bg"
      />

      {/* Text overlay */}
      <div className="get-started-text">
        <h1>
          Hug.<br />
          A.<br />
          Pup.
        </h1>
      </div>

      {/* Button overlay */}
      <button
        className="get-started-btn-full"
        onClick={() => navigate("/login")}
      >
        Get Started →
      </button>
    </div>
  );
}

export default GetStarted;
