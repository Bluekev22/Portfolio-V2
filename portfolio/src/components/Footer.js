import React from 'react'
import './Footer.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faLinkedin, faTwitter, faGithub} from '@fortawesome/free-brands-svg-icons'
import { Grid } from '@mui/material'

const linkedin = <FontAwesomeIcon icon={faLinkedin} />
const github = <FontAwesomeIcon icon={faGithub} />
const twitter = <FontAwesomeIcon icon={faTwitter} />

function Footer() {
    return (
    <Grid container spacing={2} justifyContent="center">
        <Grid item><a className="linkedin" href="https://www.linkedin.com/in/shank-kevin" target="_blank">{linkedin}</a></Grid>
        <Grid item><a className="github" href="https://github.com/Bluekev22" target="_blank">{github}</a></Grid>
        <Grid item><a className="twitter" href="https://twitter.com/kevshank22" target="_blank">{twitter}</a></Grid>
    </Grid> 
    )
}

export default Footer;