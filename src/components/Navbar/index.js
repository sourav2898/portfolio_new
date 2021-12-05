import React, {useEffect} from 'react'
import './navbar.scss'
import AOS from "aos";
import "aos/dist/aos.css";
import SocialLinks from '../SocialLinks';

const Navbar = () => {
    useEffect(() => {
        AOS.init({
            duration: 2000
        });
        AOS.refresh();
      }, []);

    return (
        <nav class="navbar" id="navbar">
            <div class="max-width">
                <div data-aos="fade-down" class="logo"><a href="#home">Portfo<span>lio</span></a></div>
                <ul class="menu">
                    <li data-aos="fade-down"><a href="#home" class="menu-btn">Home</a></li>
                    <li data-aos="fade-down"><a href="#about" class="menu-btn">About</a></li>
                    <li data-aos="fade-down"><a href="#service" class="menu-btn">Services</a></li>
                    <li data-aos="fade-down"><a href="#skills" class="menu-btn">Skills</a></li>
                    <li data-aos="fade-down"><a href="#contact" class="menu-btn">Contact</a></li>
                </ul>
                <div class="menu-btn">
                    <i class="fas fa-bars"></i>
                </div>
            </div>
        </nav>
    )
}

export default Navbar
