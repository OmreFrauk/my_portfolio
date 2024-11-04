import { Route, Routes } from "react-router-dom";
import "./App.css";
import { Home } from "./pages/Home";
import { AboutMe } from "./pages/AboutMe";

function App() {
  return (
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route path="/about" element={<AboutMe />} />
    </Routes>
  );
}

export default App;
