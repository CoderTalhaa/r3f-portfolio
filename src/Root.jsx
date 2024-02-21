import { BrowserRouter as Router } from "react-router-dom";
import App from "./App";
import { ToastContainer } from "react-toastify";

function Root() {
  return (
    <>
      <Router>
        <App />
        <ToastContainer />
      </Router>
    </>
  );
}

export default Root;
