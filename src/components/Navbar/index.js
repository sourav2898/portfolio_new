import React, {useEffect} from 'react'
import './navbar.scss'
import AOS from "aos";
import "aos/dist/aos.css";

const Navbar = () => {
    useEffect(() => {
        AOS.init({
            duration: 2000
        });
        AOS.refresh();
      }, []);

    return (
        <nav className="navbar" id="navbar">
            <div className="max-width">
                <div data-aos="fade-down" className="logo"><a href="#home">Portfo<span>lio</span></a></div>
                <ul className="menu">
                    <li data-aos="fade-down"><a href="#home" className="menu-btn">Home</a></li>
                    <li data-aos="fade-down"><a href="#about" className="menu-btn">About</a></li>
                    <li data-aos="fade-down"><a href="#services" className="menu-btn">Services</a></li>
                    <li data-aos="fade-down"><a href="#skills" className="menu-btn">Skills</a></li>
                    <li data-aos="fade-down"><a href="#projects" className="menu-btn">Projects</a></li>
                    <li data-aos="fade-down"><a href="#contact" className="menu-btn">Contact</a></li>
                </ul>
                <div className="mobile"> 
                    Hii
                </div>
            </div>
        </nav>
    )
}

export default Navbar
