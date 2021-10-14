import React from 'react'
import './Navbar.css'
import {NavLink} from 'react-router-dom'
import { Grid } from '@mui/material'

function Navbar() {
    return (
    <Grid container spacing={12} justifyContent="center">
        <Grid item>
            <NavLink className="navbar-link" activeClassName="navbar-link-active" exact to="/"><p>Home</p></NavLink>
        </Grid>
        <Grid item>
            <NavLink className="navbar-link" activeClassName="navbar-link-active" exact to="/projects"><p>Projects</p></NavLink>
        </Grid>
        <Grid item>
            <NavLink className="navbar-link" activeClassName="navbar-link-active" exact to="/skills"><p>Skills</p></NavLink>
        </Grid>
        <Grid item>
            <NavLink className="navbar-link" activeClassName="navbar-link-active" exact to="/contact"><p>Contact</p></NavLink>
        </Grid>
    </Grid>
    )
}

export default Navbar;