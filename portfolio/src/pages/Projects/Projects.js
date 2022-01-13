import React from 'react'
import ProjectCard from '../../components/ProjectCard'
import { Grid } from '@mui/material'
import Fade from 'react-reveal/Fade'
import GoldenFlights from '../../assets/img/GoldenFlights.png'
import Movies from '../../assets/img/Movies.png'
import BetterBuy from '../../assets/img/BetterBuy.png'
import BookSearch from '../../assets/img/BookSearch.png'

function Projects() {
  const projects = [
    {
      title: 'Better Buy',
      image: BetterBuy,
      classname: 'better-buy',
      path: '/Better-buy',
      alt: 'Better Buy Project',
    },
    {
      title: 'Golden Flights',
      image: GoldenFlights,
      classname: 'golden-flights',
      path: '/golden-flights',
      alt: 'Golden Flights Project',
    },
    {
      title: 'Move Towards the Movies',
      image: Movies,
      classname: 'move-towards-the-movies',
      path: '/move-towards-the-movies',
      alt: 'Move Towards the Movies Project',
    },
    {
      title: 'Book Search Engine',
      image: BookSearch,
      classname: 'book-search-engine',
      path: '/book-search-engine',
      alt: 'Book Search Engine Project',
    },
  ]

  return (
    <Grid container spacing={8} justifyContent="center">
      <Grid item>
        <Fade top>
          <ProjectCard
            title={projects[0].title}
            image={projects[0].image}
            classname={projects[0].classname}
            path={projects[0].path}
            alt={projects[0].alt}
          ></ProjectCard>
        </Fade>
      </Grid>
      <Grid item>
        <Fade top delay={250}>
          <ProjectCard
            title={projects[1].title}
            image={projects[1].image}
            classname={projects[1].classname}
            path={projects[1].path}
            alt={projects[1].alt}
          ></ProjectCard>
        </Fade>
      </Grid>
      <Grid item>
        <Fade top delay={500}>
          <ProjectCard
            title={projects[2].title}
            image={projects[2].image}
            classname={projects[2].classname}
            path={projects[2].path}
            alt={projects[2].alt}
          ></ProjectCard>
        </Fade>
      </Grid>
      <Grid item>
        <Fade top delay={750}>
          <ProjectCard
            title={projects[3].title}
            image={projects[3].image}
            classname={projects[3].classname}
            path={projects[3].path}
            alt={projects[3].alt}
          ></ProjectCard>
        </Fade>
      </Grid>
    </Grid>
  )
}

export default Projects
