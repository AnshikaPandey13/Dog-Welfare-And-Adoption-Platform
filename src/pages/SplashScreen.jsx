import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import "../App.css";
import logo from "../assets/logo.png";

function SplashScreen() {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate("/start");
    }, 3000);

    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div className="splash">
      <motion.img
        src={logo}
        alt="Hug A Pup Logo"
        className="splash-logo"
        initial={{ scale: 0.3, opacity: 0 }}
        animate={{
          scale: [0.3, 1.1, 1],
          opacity: 1,
          rotate: [0, -2, 2, -2, 0],
        }}
        transition={{
          duration: 3,
          ease: "easeInOut",
        }}
      />
    </div>
  );
}

export default SplashScreen;
