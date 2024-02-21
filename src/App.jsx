import { Route, Routes } from "react-router-dom";
import {Home , About , Contact, Projects} from "./components/index.js"

function App() {
  return (
  <>
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
        <Route path="projects" element={<Projects />} />
      </Routes>
    </div>
  </>
  );
}

export default App;
