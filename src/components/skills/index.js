import React from 'react'
import './skills.scss'
import react from '../../assets/images/react.png';
import angular from '../../assets/images/angular1.png';
import css from '../../assets/images/css.jpg';
import express from '../../assets/images/express1.png';
import git from '../../assets/images/git.png';
import github from '../../assets/images/github.png';
import html from '../../assets/images/html.png';
import java from '../../assets/images/java.png';
import javascript from '../../assets/images/javascript.png';
import material from '../../assets/images/material.svg';
import mongo from '../../assets/images/mongo.jpg';
import next from '../../assets/images/next.png';
import node from '../../assets/images/node.png';
import scss from '../../assets/images/scss.png';
import spring from '../../assets/images/spring.png';
import redux from '../../assets/images/redux.png';
import firebase from '../../assets/images/firebase.png';

const skills = [
    {
        name: "Java",
        img: java
    },
    {
        name: "Javascript",
        img: javascript
    },
    {
        name: "React.js",
        img: react
    },
    {
        name: "Node.js",
        img: node
    },
    {
        name: "Express.js",
        img: express
    },
    {
        name: "MongoDB",
        img: mongo
    },
    {
        name: "Next.js",
        img: next
    },
    {
        name: "Angular",
        img: angular
    },
    {
        name: "Firebase",
        img: firebase
    },
    {
        name: "Redux",
        img: redux
    },
    {
        name: "CSS",
        img: css
    },
    {
        name: "HTML",
        img: html
    },
    
    {
        name: "Git",
        img: git
    },
    {
        name: "GitHub",
        img: github
    },
    {
        name: "MaterialUI",
        img: material
    },
    {
        name: "SCSS",
        img: scss
    },
    {
        name: "Spring Boot",
        img: spring
    },
]

const Skills = () => {
    return (
        <div className="skills" id="skills">
            <h2 className="title" data-aos="fade-up">My Skills</h2>
            <div className="container">
                {
                    skills.map((value,index) => {
                        return <div key={index} className="rows" data-aos="fade-up">
                            <img src={value.img} alt={value.name} />
                            <h2> {value.name} </h2>
                        </div>
                    })
                }
            </div>
        </div>
    )
}

export default Skills
