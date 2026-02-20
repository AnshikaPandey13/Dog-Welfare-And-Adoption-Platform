import { useNavigate } from "react-router-dom";
import "../App.css";

function HowToHelp() {
  const navigate = useNavigate();

  return (
    <div className="help-page">

      {/* Back Button */}
      <button className="help-back" onClick={() => navigate(-1)}>
        ←
      </button>

      <div className="help-container">

        <div className="help-pill">
          Lost and Found
        </div>

        <p className="help-sub">
          Reuniting hearts, one paw At a Time
        </p>

        <p className="help-welcome">
          Welcome to a space where dog lovers unite. Ask questions,
          share advice and help dogs in need!!
        </p>

        {/* Lost a Dog */}
        <div className="help-card">
          <h3>Lost a Dog?</h3>
          <p>
            Post a missing pet report and let our community help you bring them home.
          </p>

          <ul>
            <li>📍 Users: Breed, Age, Colour</li>
            <li>📷 Upload clear photos</li>
            <li>📞 Contact information</li>
          </ul>

          <button className="help-btn">
            Post Lost Dog
          </button>
        </div>

        {/* Found a Dog */}
        <div className="help-card">
          <h3>Found a Dog</h3>
          <p>
            Spotted or Found a Lost Dog? Share details - you might be their heroes!
          </p>

          <ul>
            <li>📍 Location of dog</li>
            <li>📝 Basic info and when found</li>
            <li>📷 Clear identity photos</li>
          </ul>

          <button className="help-btn">
            Post Found Dog
          </button>
        </div>

        {/* Safety Tips */}
        <div className="help-safety">
          <h3>🐾 Safety Tips</h3>
          <ul>
            <li>✔ Use A Collar with ID Tag</li>
            <li>✔ Microchip your Dog</li>
            <li>✔ Keep recent photos</li>
            <li>✔ Act fast - report immediately</li>
          </ul>
        </div>

      </div>
    </div>
  );
}

export default HowToHelp;
