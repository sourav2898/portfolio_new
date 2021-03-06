import React, {useEffect} from 'react'
import './App.scss'
import Home from './components/Home';
import Navbar from './components/Navbar';
import AOS from "aos";
import "aos/dist/aos.css";
import StarfieldAnimation from 'react-starfield-animation'
import SocialLinks from './components/SocialLinks';
import About from './components/about';
import Skills from './components/skills';
import Services from './components/services';
import Projects from './components/projects';
import Contact from './components/contact';
import Footer from './components/footer';

function App() {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  return (
    <>
    
    <div className="App">
      <StarfieldAnimation
          style={{
            position: 'absolute',
            width: '100%',
            height: '100%'
          }}
        />
        <div className="social-links">
          <SocialLinks />
        </div>
        <div className="email" data-aos="fade-up">
          <a href="mailto:souravkumardubey2898@gmail.com">souravkumardubey2898@gmail.com</a>
        </div>
        <Navbar />
        <div className="main-comp">
          <Home />
          <About />
          <Services />
          <Skills />
          <Projects />
          <Contact />
        </div>
        <Footer />
    </div>
    {/*  */}
    </>
  );
}

export default App;
