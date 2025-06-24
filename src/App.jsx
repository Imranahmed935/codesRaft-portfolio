import "./App.css";
import About from "./Components/About/About";
import Education from "./Components/Education/Education";
import Project from "./Components/Project/Project";
import Skill from "./Components/Skill/Skill";
import Home from "./Pages/Home/Home";

function App() {
  return (
    <>
      <Home />
      <About/>
      <Skill/>
      <Project/>
      <Education/>
    </>
  );
}

export default App;
