import React, {useEffect} from 'react'
import './App.scss'
import Home from './components/Home';
import Navbar from './components/Navbar';
import AOS from "aos";
import "aos/dist/aos.css";
import SocialLinks from './components/SocialLinks';

function App() {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  return (
    <>
    
    <div className="App">
        <div className="social-links">
          <SocialLinks />
        </div>
        <div className="email">
          <a href="mailto:souravkumardubey2898@gmail.com">souravkumardubey2898@gmail.com</a>
        </div>
        <Navbar />
        <div className="main-comp">
          <Home />
        </div>
    </div>
    {/*  */}
    </>
  );
}

export default App;
