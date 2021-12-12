import React from 'react'
import './projects.scss'
import fb from '../../assets/projects/fb.png';
import netflix from '../../assets/projects/netflix.png';
import tiktok from '../../assets/projects/tiktok.png';
import instagram from '../../assets/projects/instagram.png';
import gamedb from '../../assets/projects/gamedb.png';
import GitHub from '@material-ui/icons/GitHub';
import ScreenShare from '@material-ui/icons/ScreenShare';
import { Link } from '@material-ui/core';

const projects = [
    {
        name: "Facebook Clone",
        github:"https://github.com/sourav2898/Facebook_clone",
        visit:"https://facebook-clone-three-tau.vercel.app/",
        img:fb,
        desc: "This is a facebook clone made with simple functionalities like Login, Logout, Posting Images, Like, Unlike, Comment, Delete Comment etc.., Complete Responsive.",
        stacks:["React.js","MaterialUI","Firebase","SCSS","HTML"]
    },
    {
        name: "Netflix Clone",
        github:"https://github.com/sourav2898/Netflix_clone",
        visit:"https://netflix-clone-ochre.vercel.app/",
        img:netflix,
        desc: "This is a netflix clone which simply shows out different categories of movies or webseries with the trailers(if available). Complete Responsive. ",
        stacks:["HTML","SCSS","React.js","MaterialUI"]
    },
    {
        name: "Instagram Clone",
        github:"https://github.com/sourav2898/instagram-clone",
        visit:"https://instagram-clone-jade.vercel.app/",
        img:instagram,
        desc: "This is an instagram clone with its basic functionalities like Login, Logout, Posting Images, Like, Unlike, Comment, Delete Comment etc.., Complete Responsive.",
        stacks:["HTML","SCSS","React.js","MaterialUI","Firebase"]
    },
    {
        name: "TikTok Clone",
        github:"https://github.com/sourav2898/tik-tok-clone",
        visit:"https://tik-tok-clone-five.vercel.app/",
        img:tiktok,
        desc: "This is a tiktok clone made with functionalities like liking a video, unliking, pausing, playing etc.., Complete Responsive.",
        stacks:["HTML","SCSS","React.js","MaterialUI"]
    },
    {
        name: "Games DB",
        github:"https://github.com/sourav2898/Games_DB_ANGULARJS",
        visit:"https://games-db-angularjs.vercel.app/",
        img:gamedb,
        desc: "This a site where you can get all your game details which you want to see. We have functionalities like sorting(type of game) and searching of a game.",
        stacks:["HTML","SCSS","Angular"]
    }
]

const Projects = () => {
    return (
        <div className="project" id="projects">
            <h2 className="title" data-aos="fade-up">Projects</h2>
            <div className="container">
                {
                    projects.map((value,index) => {
                        return <Link target="_blank" href={value.visit} className="row" key={index} data-aos="flip-left"> 
                        <div className="header">
                            <h2> {value.name} </h2> 
                            <div>
                                <Link target="_blank" href={value.github}> 
                                    <GitHub className="github" />
                                </Link>
                                <Link target="_blank" href={value.visit}> 
                                    <ScreenShare className="pointer" />
                                </Link>
                                
                            </div>
                        </div>
                        <div className="image">
                            <img src={value.img} alt="project_image"/>
                        </div>
                        <p className="description">
                            {value.desc}
                        </p>
                        <p className="stacks"> Stacks Used: </p>
                        <p className="stacks"> 
                            {
                                value?.stacks?.map((value,index) => {
                                    return <span key={index}> {value} </span>
                                })
                            }
                        </p>
                    </Link>
                    })
                }
            </div>
            <div className="more" >
                <p> To see more of projects please visit : <Link target="_blank" href="https://github.com/sourav2898?tab=repositories" > GitHub </Link> | <Link target="_blank" href="https://vercel.com/dashboard"> Vercel </Link> </p>
            </div>
        </div>
    )
}

export default Projects
