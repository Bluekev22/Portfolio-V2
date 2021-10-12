import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faLinkedin, faTwitter, faGithub} from '@fortawesome/free-brands-svg-icons';
import { Grid } from '@mui/material';

function Footer() {
    return (
    <Grid container spacing={2} justifyContent="center">
        <Grid item><a className="linkedin" href="https://www.linkedin.com/in/shank-kevin" target="_blank"><FontAwesomeIcon icon={faLinkedin} /></a></Grid>
        <Grid item><a className="github" href="https://github.com/Bluekev22" target="_blank"><FontAwesomeIcon icon={faGithub} /></a></Grid>
        <Grid item><a className="twitter" href="https://twitter.com/kevshank22" target="_blank"><FontAwesomeIcon icon={faTwitter} /></a></Grid>
    </Grid> 
    )
}

export default Footer;