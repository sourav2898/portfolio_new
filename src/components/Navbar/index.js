import React, {useEffect,useState} from 'react'
import './navbar.scss'
import AOS from "aos";
import "aos/dist/aos.css";
import Hamburger from '@material-ui/icons/Menu';
import Close from '@material-ui/icons/Close';
import { Link } from '@material-ui/core';

const Navbar = () => {
    const [showNav, setShowNav] = useState(false);
    useEffect(() => {
        AOS.init({
            duration: 2000
        });
        AOS.refresh();
        setShowNav(false)
      }, []);

      const changeNav = () => {
          setShowNav(!showNav);
      }

    return (
        <nav className="navbar" id="navbar">
            <div className="max-width">
                <div data-aos="fade-down" className="logo"><Link href="#home">Portfo<span>lio</span></Link></div>
                <ul className="menu">
                    <li data-aos="fade-down"><Link href="#home" className="menu-btn">Home</Link></li>
                    <li data-aos="fade-down"><Link href="#about" className="menu-btn">About</Link></li>
                    <li data-aos="fade-down"><Link href="#services" className="menu-btn">Services</Link></li>
                    <li data-aos="fade-down"><Link href="#skills" className="menu-btn">Skills</Link></li>
                    <li data-aos="fade-down"><Link href="#projects" className="menu-btn">Projects</Link></li>
                    <li data-aos="fade-down"><Link href="#contact" className="menu-btn">Contact</Link></li>
                </ul>
                <div className="mobile">
                    {
                        !showNav 
                        ?
                        <Hamburger data-aos="fade-left" onClick={changeNav}/>
                        :
                        <div data-aos="fade-left" className="nav_mob"> 
                            <div className="mob_close"> <Close onClick={changeNav} /> </div>
                            <ul className="menu_mob">
                                <li data-aos="zoom-in"><Link href="#home" onClick={changeNav} className="menu-btn">Home</Link></li>
                                <li data-aos="zoom-in"><Link onClick={changeNav} href="#about" className="menu-btn">About</Link></li>
                                <li data-aos="zoom-in"><Link onClick={changeNav} href="#services" className="menu-btn">Services</Link></li>
                                <li data-aos="zoom-in"><Link onClick={changeNav} href="#skills" className="menu-btn">Skills</Link></li>
                                <li data-aos="zoom-in"><Link onClick={changeNav} href="#projects" className="menu-btn">Projects</Link></li>
                                <li data-aos="zoom-in"><Link onClick={changeNav} href="#contact" className="menu-btn">Contact</Link></li>
                            </ul>
                        </div>  
                    } 
                </div>
            </div>
        </nav>
    )
}

export default Navbar
