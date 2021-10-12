import React from 'react';
import {Link} from 'react-router-dom';
import { Grid } from '@mui/material';

function Navbar() {
    return (
    <Grid container spacing={12} justifyContent="center">
        <Grid item>
            <Link to="/">Home</Link>
        </Grid>
        <Grid item>
            <Link to="/projects">Projects</Link>
        </Grid>
        <Grid item>
            <Link to="/skills">Skills</Link>
        </Grid>
        <Grid item>
            <Link to="/contact">Contact</Link>
        </Grid>
    </Grid>
    )
}

export default Navbar;