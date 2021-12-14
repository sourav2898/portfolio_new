import React from 'react'
import './footer.scss'
import { Link } from '@material-ui/core'
import GitHubIcon from '@material-ui/icons/GitHub';
import Facebook from '@material-ui/icons/Facebook';
import Instagram from '@material-ui/icons/Instagram';
import Email from '@material-ui/icons/Email';
import LinkedIn from '@material-ui/icons/LinkedIn';
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
    icons: {
        color: "#495670",
        margin:"10px",
        cursor:"pointer",
        position: "relative",
        top: "0",
        transition: "top ease 0.5s",
    },
    github:{
        color: "gray",
        '&:hover': {
            top:"-2px"
        },
    },
    instagram:{
        color: "crimson",
        '&:hover': {
            top:"-2px"
        },
    },
    facebook:{
        color: "blue",
        '&:hover': {
            top:"-2px"
        },
    },
    LinkedIn:{
        color: "skyblue",
        '&:hover': {
            top:"-2px"
        },
    },
    email:{
        color: "orange",
        '&:hover': {
            top:"-2px"
        },
    }
}));

const Footer = () => {
    const classes = useStyles();
    return (
        <div className="footer">
            
            <div className="footer-social">
                    <Link href="https://github.com/sourav2898?tab=repositories" target="_blank">
                    <GitHubIcon className={`${classes.icons} ${classes.github}`} />
                 </Link>
                 <Link href="https://www.linkedin.com/in/sourav-kumar-b514a0184/" target="_blank"> 
                    <LinkedIn className={`${classes.icons} ${classes.LinkedIn}`} />
                 </Link>
                 <Link href="http://www.facebook.com/sourav.dubey28" target="_blank">
                    <Facebook className={`${classes.icons} ${classes.facebook}`} />
                 </Link>
                 <Link href="http://instagram.com/cristiano_one8" target="_blank"> 
                    <Instagram className={`${classes.icons} ${classes.instagram}`} />
                 </Link>
                 <Link href="mailto:souravkumardubey2898@gmail.com" target="_blank"> 
                    <Email className={`${classes.icons} ${classes.email}`} />
                 </Link>
            </div>
            <Link className="footer_ele" target="_blank" href=""> Designed and Built by Sourav Kumar </Link>
        </div>
    )
}

export default Footer
