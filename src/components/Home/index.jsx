import React from 'react'
import './home.scss'
import AOS from "aos";
import "aos/dist/aos.css";  
import Typewriter from 'typewriter-effect';

const Home = () => {

    return (
      <div className="home" data-aos="fade-right">
        <div className="home-container"> 
          <p> Hi, my name is </p>
          <p> Sourav Kumar. </p>
          <p> And I'm a  
            <Typewriter
              style={{display:"inline-block"}}
              options={{
                strings: ['','Computer Science Engineer.', ' Full Stack Developer.','Freelancer.'],
                autoStart: true,
                loop: true,
              }}
            />
          </p>
          <p> I’m a software engineer specializing in building (and occasionally designing) exceptional digital experiences. </p>
          <a href="#contact" id="text-4">HIRE ME!</a>
        </div>
      </div>
    )
}

export default Home
