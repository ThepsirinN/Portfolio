import { MyPageContext } from "./context/PageContext";
import { useEffect, useState } from "react";
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
  const [isLoading, setIsLoading] = useState(true);
  const { page, setPageValue } = MyPageContext();

  useEffect(() => {
    let tid = setTimeout(() => {
      setPageValue("🧑About");
      setIsLoading(false);
    }, 2000);
    return () => {
      clearTimeout(tid);
    };
  }, []);

  return (
    <div className="App">
      {isLoading && (
        <div className="loading-section">
          <div className="loader"></div>
          <div className="loader-text">
            <span>Barko.</span>
            <span className="loader-inner-text">Bank</span>
          </div>
        </div>
      )}
      {!isLoading && (
        <>
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
        </>
      )}
    </div>
  );
};

export default App;
