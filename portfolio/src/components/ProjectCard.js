import React from 'react'
import {NavLink} from 'react-router-dom'
import { Grid } from "@mui/material"

import './ProjectCard.css'

function ProjectCard(props) {
    return (
        <NavLink exact to={props.path}>
            <Grid item lg={3}>
                <div className="card-container">
                <img className={props.classname} src={props.image}></img>
                <div className="caption">
                    <p>{props.title}</p>
                </div>
                </div>
            </Grid>
         </NavLink>
    )
}

export default ProjectCard;