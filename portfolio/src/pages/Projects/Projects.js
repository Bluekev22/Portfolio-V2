import React from 'react'
import ProjectCard from '../../components/ProjectCard'
import { Grid } from "@mui/material"
import Fade from 'react-reveal/Fade'
import GoldenFlights from '../../assets/img/GoldenFlights.png'
import Movies from '../../assets/img/Movies.png'
import BudgetTracker from '../../assets/img/BudgetTracker.png'
import FitnessTracker from '../../assets/img/FitnessTracker.png'

function Projects() {

    const projects = [
        { title: 'Golden Flights', image: GoldenFlights, classname: "golden-flights", path: "/Flights", alt: "Golden Flights Project"},
        { title: 'Move Towards the Movies', image: Movies, classname: "movies", path: "/Movies", alt: "Move Toward the Movies Project"},
        { title: 'Budget Tracker', image: BudgetTracker, classname: "budget-tracker", path: "/Budget", alt: "Budget Tracker Project"},
        { title: 'Fitness Tracker', image: FitnessTracker, classname: "fitness-tracker", path: "/Fitness", alt: "Fitness Tracker Project"}
    ]

    return (
        <Grid container spacing={8} justifyContent="center">
        <Grid item>
            <Fade top>
            <ProjectCard title={projects[0].title} image={projects[0].image} classname={projects[0].classname} path={projects[0].path} alt={projects[0].alt}></ProjectCard>
            </Fade>
        </Grid>
        <Grid item>
            <Fade top delay={250}>
        <ProjectCard title={projects[1].title} image={projects[1].image} classname={projects[1].classname} path={projects[1].path} alt={projects[1].alt}></ProjectCard>
        </Fade>    
         </Grid>
        <Grid item>
            <Fade top delay={500}>
            <ProjectCard title={projects[2].title} image={projects[2].image} classname={projects[2].classname} path={projects[2].path} alt={projects[2].alt}></ProjectCard>
            </Fade>
        </Grid>
        <Grid item>
            <Fade top delay={750}>
            <ProjectCard title={projects[3].title} image={projects[3].image} classname={projects[3].classname} path={projects[3].path} alt={projects[3].alt}></ProjectCard>
            </Fade>
        </Grid>
    </Grid>
    );
}

export default Projects;