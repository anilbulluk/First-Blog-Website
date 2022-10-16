import Hero from "./screen/Hero";
import InfoBar from "./component/InfoBar";
import Navbar from "./component/Navbar";
import Project from "./screen/Project";
import About from "./screen/About";
import Contact from "./screen/Contact";
import Footer from "./component/Footer";


function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Hero></Hero>
      <InfoBar></InfoBar>
      <Project></Project>
      <About></About>
      <Contact></Contact>
      <Footer></Footer>
    </div>
  );
}

export default App;
