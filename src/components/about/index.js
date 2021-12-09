import React, { useRef, useState } from 'react'
import './about.scss'
import pic from '../../assets/body.jpg';
const About = () => {
    
    return (
        <div className="about" >
            <h2 class="title" data-aos="fade-up">About Me</h2>
            <div className="about-container">
                <div className="about-info" data-aos="fade-right">
                    <p>
                        “My name is Sourav. I am from Dhanbad, Jharkhand, India. I graduated in 2020 with a bachelor’s degree in Computer Science and Engneering from Kolhan University. I am a full-time freelance web designer who specializes in creating beautiful, useable, professional website using best practice accessibility. All my sites are lovingly hand coded. I am a designer, developer, and overall thinker.My area of interest are Web development and competitive coding. Apart from academics I follow and play Football, Cricket and a big fan of Cristiano Ronaldo and Virat Kohli. Check out some of the links below to see what I’ve been up to lately.”
                    </p>
                    <div class="wrapper" data-aos="fade-right">
                        <div class="link_wrapper">
                            <a href="sourav_Kumar_cv.pdf">Download CV</a>
                            <div class="icon">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 268.832 268.832">
                                    <path d="M265.17 125.577l-80-80c-4.88-4.88-12.796-4.88-17.677 0-4.882 4.882-4.882 12.796 0 17.678l58.66 58.66H12.5c-6.903 0-12.5 5.598-12.5 12.5 0 6.903 5.597 12.5 12.5 12.5h213.654l-58.66 58.662c-4.88 4.882-4.88 12.796 0 17.678 2.44 2.44 5.64 3.66 8.84 3.66s6.398-1.22 8.84-3.66l79.997-80c4.883-4.882 4.883-12.796 0-17.678z"/>
                                </svg>
                            </div>
                        </div>
                    </div>
                    <div class="coding_platforms" >
                        <a target="_blank" class="hackerrank"  href="https://www.hackerrank.com/cristiano_one8?hr_r=1"><img src="images/hackerrank.png" alt=""/> HackerRank</a>
                        <a target="_blank" class="leetcode" href="https://leetcode.com/cristiano_one8/"><img src="images/leetcode.png" alt=""/> LeetCode</a>
                        <a target="_blank" class="github"  href="https://github.com/sourav2898"><img src="images/github.png" alt=""/> GitHub</a>
                    </div>
                </div>
                <div className="about-pic" data-aos="fade-left">
                    <img src={pic} alt="my pic" />
                </div>
            </div>
        </div>
    )
}

export default About
