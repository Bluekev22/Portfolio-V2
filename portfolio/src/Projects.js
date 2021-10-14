import React from 'react'
import ProjectCard from './components/ProjectCard'
import { Grid } from "@mui/material"
import GoldenFlights from './assets/img/GoldenFlights.png'
import movies from './assets/img/movies.png'
import BudgetTracker from './assets/img/BudgetTracker.png'
import FitnessTracker from './assets/img/FitnessTracker.png'

function Projects() {

    const projects = [
        { title: 'Golden Flights', image: GoldenFlights},
        { title: 'Move Towards the Movies', image: movies},
        { title: 'Budget Tracker', image: BudgetTracker},
        { title: 'Fitness Tracker', image: FitnessTracker}
    ]

    return (
        <Grid container spacing={8} justifyContent="center">
        <Grid item>
            <ProjectCard title={projects[0].title} image={projects[0].image}></ProjectCard>
        </Grid>
        <Grid item>
        <ProjectCard title={projects[1].title} image={projects[1].image}></ProjectCard>
        </Grid>
        <Grid item>
            <ProjectCard title={projects[2].title} image={projects[2].image}></ProjectCard>
        </Grid>
        <Grid item>
            <ProjectCard title={projects[3].title} image={projects[3].image}></ProjectCard>
        </Grid>
    </Grid>
    );
}

export default Projects;