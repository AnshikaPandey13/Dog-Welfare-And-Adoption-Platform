import { useNavigate } from "react-router-dom";
import "../App.css";

import adoptImg from "../assets/adopt.png";
import rescueImg from "../assets/rescue.jpeg";
import helpImg from "../assets/help.jpeg";
import communityImg from "../assets/community.jpeg";
import aboutImg from "../assets/about.jpeg";
import beforeImg from "../assets/before.jpeg";
import afterImg from "../assets/after.jpeg";
import hapImgm from "../assets/hap1.jpeg";
import hapImgb from "../assets/hap2.jpeg";
import hapImgd from "../assets/hap3.jpeg";

function Home() {
  const navigate = useNavigate();

  return (
    <div className="home-screen">
      <div className="home-card">

        {/* Search Bar */}
        <input
          type="text"
          className="home-search"
          placeholder="FIND..."
        />

        {/* Hero Gradient Box */}
        <div className="home-hero-box">
          <h1 className="home-hero-text">
            GIVE A DOG A<br />
            SECOND<br />
            CHANCE AT LIFE!!
          </h1>
          <button className="apply-btn">APPLY</button>
        </div>

        {/* 4th Slide Cards */}
        <div className="home-cards">
          <div className="image-card">
            <img src={adoptImg} alt="Take Me Home" />
            <button
              className="image-btn"
              onClick={() => navigate("/take-home")}
            >
              TAKE ME HOME
            </button>
          </div>

          <div className="image-card">
            <img src={rescueImg} alt="Rescue" />
            <button
              className="image-btn"
              onClick={() => navigate("/rescue")}
            >
              RESCUE
            </button>
          </div>
        </div>

        {/* 5th Slide (Scroll Section) */}
        <div className="home-scroll-section">

          {/* HOW TO HELP & COMMUNITY (side by side) */}
          <div className="home-cards">
            <div className="image-card">
              <img src={helpImg} alt="How To Help" />
              <button
                className="image-btn"
                onClick={() => navigate("/help")}
              >
                HOW TO HELP
              </button>
            </div>

            <div className="image-card">
              <img src={communityImg} alt="Community" />
              <button
                className="image-btn"
                onClick={() => navigate("/community")}
              >
                COMMUNITY
              </button>
            </div>
          </div>

          {/* ABOUT US (full width) */}
          <div className="image-card">
            <img src={aboutImg} alt="About Us" />
            <button
              className="image-btn"
              onClick={() => navigate("/about")}
            >
              ABOUT US
            </button>
          </div>
{/* HERO SECTION */}
<div className="hero-card">

  <div className="hero-pill">HERO SECTION</div>

  <h2 className="hero-title">
    HAPPY TAILS & NEW BEGINNINGS
  </h2>

<div className="hero-images">
  <div className="hero-img-box">
    <img src={beforeImg} alt="Before" />
  </div>

  {/* Arrow */}
  <div className="hero-arrow">→</div>

  <div className="hero-img-box">
    <img src={afterImg} alt="After" />
  </div>
</div>

  {/* Dog Info */}
  <h3 className="hero-name">Cherry</h3>
  <p className="hero-sub">
    Adopted on Jan 2025
  </p>
  <p className="hero-quote">
    “She has brought so much joy in our lives!”
  </p>

  {/* Mini Cards */}
  <div className="hero-mini-cards">
    <div className="mini-card">
      <img src={hapImgm} alt="Max" />
      <p>Max<br /><span>Dec 2024</span></p>
    </div>

    <div className="mini-card">
      <img src={hapImgb} alt="Brownie" />
      <p>Brownie<br /><span>Nov 2024</span></p>
    </div>

    <div className="mini-card">
      <img src={hapImgd} alt="Daisy" />
      <p>Daisy<br /><span>Mar 2024</span></p>
    </div>
  </div>

</div>

        </div>

      </div>
    </div>
    
  );
}

export default Home;
