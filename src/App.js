import { MyPageContext } from "./context/PageContext";
import { useEffect } from "react";
import Nav from "./components/Nav";
import AboutMe from "./components/AboutMe";
import Expreience from "./components/Expreience";
import ExamplePort from "./components/ExamplePort";
import Education from "./components/Education";
import Skill from "./components/Skill";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import "./App.css";

const App = () => {
  const { page,setPageValue } = MyPageContext();

  useEffect(() => {
    setPageValue("🧑About")
    /* return () => {
    } */
  }, [])
  
  
  return (
    <div className="App">
      <Nav />
      <main className="Information">
        {page === "🧑About" && <AboutMe />}
        {page === "🤯Experience" && <Expreience />}
        {page === "📙Portfolio" && <ExamplePort />}
        {page === "🏫Education" && <Education />}
        {page === "🏃‍♂️Skill" && <Skill />}
        {page === "📞Contact" && <Contact />}
      </main>
      <Footer />
    </div>
  );
};

export default App;
