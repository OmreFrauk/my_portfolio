import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "./App.css";
import { Home } from "./pages/Home";

function App() {
  return (
    <Router>
      <Home />
      <Routes>
        <Route exact path="/" Route={<Home />} />
        <Route path="/works" Route={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;
