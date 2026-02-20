import { useNavigate } from "react-router-dom";
import "../App.css";
import dogImg from "../assets/aboutim.png"; // replace later with your dog image

function AboutUs() {
  const navigate = useNavigate();

  return (
    <div className="about-page">

      <button className="about-back" onClick={() => navigate(-1)}>
        ←
      </button>

      <div className="about-container">

        {/* Mission */}
        <div className="about-section">
          <h2 className="about-title">🐾 Our Mission</h2>

          <div className="about-card">
            To rescue, rehabilitate, and rehome stray and abandoned dogs while
            promoting compassionate care, responsible adoption, and animal
            welfare awareness in our community.
          </div>
        </div>

        {/* Vision */}
        <div className="about-section">
          <h2 className="about-title">⭐ Our Vision</h2>

          <div className="about-card vision">
            A world where every dog is valued, loved, and has a forever home —
            a world free from neglect, abandonment, and cruelty, where humans
            and animals coexist in harmony.
          </div>
        </div>

        {/* Contact */}
        <div className="about-contact">

          <div className="contact-left">
            <h2 className="contact-title">Contact Us</h2>

            <label>Name</label>
            <input type="text" />

            <label>E-Mail</label>
            <input type="email" />

            <label>Message</label>
            <textarea rows="4"></textarea>
          </div>

          <div className="contact-right">
            <img src={dogImg} alt="Dog" />
          </div>

        </div>

      </div>
    </div>
  );
}

export default AboutUs;
