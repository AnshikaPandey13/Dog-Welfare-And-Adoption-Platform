import { useNavigate } from "react-router-dom";
import "../App.css";

function CommunityCard({ icon, title, text }) {
  return (
    <div className="community-card">
      <div className="community-icon">{icon}</div>

      <h3 className="community-card-title">{title}</h3>

      <p className="community-desc">
        {text}
      </p>

      <button className="community-btn">
        Join Topic
      </button>
    </div>
  );
}

function Community() {
  const navigate = useNavigate();

  return (
    <div className="community-page">

      <button className="community-back" onClick={() => navigate(-1)}>
        ←
      </button>

      <div className="community-container">

        <div className="community-pill">
          Dog Connect Community
        </div>

        <p className="community-sub">
          Join paws,share stories and support each other 🐾
        </p>

        <p className="community-welcome">
          Welcome to a space where dog lovers unite. Ask questions,
          share advice and help dogs in need!!
        </p>

        <CommunityCard
          icon="🩺"
          title="Health and Care"
          text="Get advice on common dog illnesses,vaccinations or treatments"
        />

        <CommunityCard
          icon="🐕"
          title="Nutrition and Feeding"
          text="Discuss what's best for your dogs tummy and diet needs."
        />

        <CommunityCard
          icon="👨‍⚕️"
          title="Ask a Vet"
          text="Post Health queries and get expert advice from our volunteer vets."
        />

      </div>

    </div>
  );
}

export default Community;
