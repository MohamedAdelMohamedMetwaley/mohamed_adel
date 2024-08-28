import Header from "./components/Header/Header";
import Projects from "./components/Projects/Projects";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import Navbar from "./components/Navbar/Navbar";
import PageLoad from "./components/PageLoad/PageLoad";
import FloatingSVGS from "./components/FloatingSVGS/FloatingSVGS";
import { useRef } from "react";

function App() {
  const homeRef = useRef();
  const projectsRef = useRef();
  const aboutRef = useRef();
  const contactRef = useRef();

  return (
    <>
      <PageLoad />
      <FloatingSVGS />
      <Navbar refs={[homeRef, projectsRef, aboutRef, contactRef]} />
      <Header refProps={homeRef} />
      <Projects refProps={projectsRef} />
      <About refProps={aboutRef} />
      <Contact refProps={contactRef} />
    </>
  );
}

export default App;
