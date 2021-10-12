import React from 'react';
import {NavLink} from 'react-router-dom';
import { Grid } from '@mui/material';

function Navbar() {
    return (
    <Grid container spacing={12} justifyContent="center">
        <Grid item>
            <NavLink className="navbar-link" activeClassName="navbar-link-active" exact to="/">Home</NavLink>
        </Grid>
        <Grid item>
            <NavLink className="navbar-link" activeClassName="navbar-link-active" exact to="/projects">Projects</NavLink>
        </Grid>
        <Grid item>
            <NavLink className="navbar-link" activeClassName="navbar-link-active" exact to="/skills">Skills</NavLink>
        </Grid>
        <Grid item>
            <NavLink className="navbar-link" activeClassName="navbar-link-active" exact to="/contact">Contact</NavLink>
        </Grid>
    </Grid>
    )
}

export default Navbar;