import React from 'react'
import './social.scss';
import GitHubIcon from '@material-ui/icons/GitHub';
import Facebook from '@material-ui/icons/Facebook';
import Instagram from '@material-ui/icons/Instagram';
import LinkedIn from '@material-ui/icons/LinkedIn';
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
    icons: {
        color: "#495670",
        margin:"10px 0",
        cursor:"pointer",
        position: "relative",
        top: "0",
        transition: "top ease 0.5s",
    },
    github:{
        '&:hover': {
            color: "black",
            top:"-2px"
        },
    },
    instagram:{
        '&:hover': {
            color: "crimson",
            top:"-2px"
        },
    },
    facebook:{
        '&:hover': {
            color: "blue",
            top:"-2px"
        },
    },
    LinkedIn:{
        '&:hover': {
            color: "skyblue",
            top:"-2px"
        },
    }
}));

const SocialLinks = () => {
    const classes = useStyles();
    return (
        <> 
            <div className="section">
                <GitHubIcon className={`${classes.icons} ${classes.github}`} />
                <LinkedIn className={`${classes.icons} ${classes.LinkedIn}`} />
                <Facebook className={`${classes.icons} ${classes.facebook}`} />
                <Instagram className={`${classes.icons} ${classes.instagram}`} />
                <div className="line">  </div>
            </div>
        </>
    )
}

export default SocialLinks
