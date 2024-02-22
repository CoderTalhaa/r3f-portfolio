import { Route, Routes } from "react-router-dom";
import {Home ,Projects} from "./components/index.js"

function App() {
  return (
  <>
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="projects" element={<Projects />} />
      </Routes>
    </div>
  </>
  );
}

export default App;
