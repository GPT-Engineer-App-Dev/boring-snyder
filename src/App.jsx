import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Index from "./pages/Index.jsx";
import Portfolio from "./pages/Portfolio.jsx";
import Team from "./pages/Team.jsx";
import Philosophy from "./pages/Philosophy.jsx";
import Navbar from "./components/Navbar.jsx";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Index />} />
        <Route exact path="/portfolio" element={<Portfolio />} />
        <Route exact path="/team" element={<Team />} />
        <Route exact path="/philosophy" element={<Philosophy />} />
      </Routes>
    </Router>
  );
}

export default App;