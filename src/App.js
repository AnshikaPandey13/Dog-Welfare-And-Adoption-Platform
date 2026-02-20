import { BrowserRouter, Routes, Route } from "react-router-dom";
import SplashScreen from "./pages/SplashScreen";
import GetStarted from "./pages/GetStarted";
import Login from "./pages/Login";
import Home from "./pages/Home";
import TakeMeHome from "./pages/TakeMeHome";
import Rescue from "./pages/Rescue";
import HowToHelp from "./pages/HowToHelp";
import Community from "./pages/Community";
import AboutUs from "./pages/AboutUs";


function App() {
return (
<BrowserRouter>
<Routes>
<Route path="/" element={<SplashScreen />} />
<Route path="/start" element={<GetStarted />} />
<Route path="/login" element={<Login />} />
<Route path="/home" element={<Home />} />
<Route path="/take-home" element={<TakeMeHome />} />
<Route path="/rescue" element={<Rescue />} />
<Route path="/help" element={<HowToHelp />} />
<Route path="/community" element={<Community />} />
<Route path="/about" element={<AboutUs />} />
</Routes>
</BrowserRouter>
);
}


export default App;