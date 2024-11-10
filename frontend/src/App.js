import { Route, Routes } from "react-router-dom";
import "./App.css";
import { Home } from "./pages/Home";
import { AboutMe } from "./pages/AboutMe";
import { Contact } from "./pages/Contact";

function App() {
  return (
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route path="/about" element={<AboutMe />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
  );
}

export default App;
