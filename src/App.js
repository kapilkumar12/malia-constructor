import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import About_us from "./component/About_us";
import Home from "./component/Home";
import Contact_us from "./component/Contact_us";
import Project_gallery from "./component/Project_gallery";

function App() {
  return (
    <>
      <Router>
        {/* <Header tittle="Malia Contactor" aboutText="Malia Contactor" /> */}

        {/* <div className="container-fluid"> */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about_us" element={<About_us />} />
          <Route path="/contact" element={<Contact_us />} />
          <Route path="/gallery" element={<Project_gallery />} />
        </Routes>
        {/* </div> */}
      </Router>
    </>
  );
}

export default App;
