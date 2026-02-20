import { useNavigate } from "react-router-dom";
import "../App.css";

function RescueCard({ icon, title, text, button }) {
  return (
    <div className="rescue-card fade-in-card">
      <div className="rescue-icon">{icon}</div>

      <h3 className="rescue-card-title">{title}</h3>

      <div className="rescue-desc">
        {text}
      </div>

      <button className="rescue-btn">
        {button} →
      </button>
    </div>
  );
}

function Rescue() {
  const navigate = useNavigate();

  return (
    <div className="rescue-page fade-in-page">

      {/* Header */}
      <div className="rescue-header">
        <button className="rescue-back" onClick={() => navigate(-1)}>
          ←
        </button>
        <h2>Rescue</h2>
      </div>

      <h3 className="rescue-main-title">
        Make a difference today!!
      </h3>

      <p className="rescue-sub">
        Every small action brings us closer to a better life for our furry friends.
      </p>

      <div className="rescue-list">

        <RescueCard
          icon="🐶"
          title="Foster a Dog"
          text="Give a dog temporary loving home. Help them heal and prepare for their forever family."
          button="Become a Foster"
        />

        <RescueCard
          icon="🤝"
          title="Volunteer"
          text="Join our passionate team! Walk dogs, help with events or manage our social media."
          button="Sign Up to Volunteer"
        />

        <RescueCard
          icon="💖"
          title="Donate"
          text="Your donations fund food, medical care and shelter. Every rupee saves lives."
          button="Donate Now"
        />

      </div>

    </div>
  );
}

export default Rescue;
