import { useNavigate } from "react-router-dom";
import "../App.css";
import dog1 from "../assets/take4.jpg";
import dog2 from "../assets/take1.jpg";

function DogCard({ img, name, breed, age, gender, tags }) {
  return (
    <div className="tmh-card">
      <img src={img} alt={name} className="tmh-img" />

      <h3 className="tmh-name">{name}</h3>

      <div className="tmh-details">
        <p>Breed: {breed}</p>
        <p>Age: {age}</p>
        <p>Gender: {gender}</p>
      </div>

      <div className="tmh-tags">
        {tags.map((tag, i) => (
          <span key={i}>{tag}</span>
        ))}
      </div>

      <button className="tmh-btn">Adopt</button>
    </div>
  );
}

function TakeMeHome() {
  const navigate = useNavigate();

  return (
    <div className="tmh-page">

      {/* Header */}
      <div className="tmh-header">
        <button className="tmh-back" onClick={() => navigate(-1)}>
          ←
        </button>
        <h2>Take Me Home</h2>
        <span className="tmh-paw">🐾</span>
      </div>

      <h3 className="tmh-title">Available Dogs for Adoption</h3>

      <div className="tmh-list">
        <DogCard
          img={dog1}
          name="Max"
          breed="Labrador"
          age="4 Months"
          gender="Male"
          tags={["Friendly", "Good with kids", "Vaccinated"]}
        />

        <DogCard
          img={dog2}
          name="Jimmy"
          breed="Street Dog"
          age="10 Months"
          gender="Female"
          tags={["Playful", "Gentle", "Vaccinated"]}
        />
      </div>

    </div>
  );
}

export default TakeMeHome;
