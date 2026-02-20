import { useNavigate } from "react-router-dom";
import "../App.css";

function Login() {
  const navigate = useNavigate();

  return (
    <div className="login-page">
      <div className="login-card">
        <h2>WELCOME</h2>
        <p className="login-sub">SIGN IN TO CONTINUE!</p>

        {/* IMPORTANT WRAPPER */}
        <div className="login-fields">
          <input type="email" placeholder="EMAIL" />
          <input type="password" placeholder="PASSWORD" />
          <button
            className="login-btn"
            onClick={() => navigate("/home")}
          >
            LOGIN
          </button>
        </div>

        <p className="or-text">Sign in with</p>

        <div className="social-row">
          <span className="social fb">f</span>
          <span className="social x">X</span>
          <span className="social google">G</span>
          <span className="social apple"></span>
        </div>

        <p className="signup-text">
          Don’t have an account? <span>Sign up</span>
        </p>
      </div>
    </div>
  );
}

export default Login;
