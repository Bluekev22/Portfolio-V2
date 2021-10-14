import React from 'react'
import { Grid } from "@mui/material"
import './ProjectCard.css'

function ProjectCard(props) {
    return (
        <Grid item lg={3} className="card-container">
            <img className="card-image" src={props.image}></img>
            <div className="caption">
                <p>{props.title}</p>
            </div>
        </Grid>
    )
}

export default ProjectCard;