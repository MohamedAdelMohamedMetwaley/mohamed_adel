import Header from "./components/Header/Header";
import Projects from "./components/Projects/Projects";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import Navbar from "./components/Navbar/Navbar";
// import PageLoad from "./components/PageLoad/PageLoad";

function App() {
  return (
    <>
      {/* <PageLoad /> */}
      <Navbar />
      <Header />
      <Projects />
      <About />
      <Contact />
    </>
  );
}

export default App;
