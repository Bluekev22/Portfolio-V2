import React from 'react'
import { Grid } from '@mui/material'
import MoveTowardsTheMoviesGIF from '../../../assets/GIFs/MoveTowardsTheMoviesGIF.gif'
import { IoArrowBack } from 'react-icons/io5'
import { NavLink } from 'react-router-dom'

function MoveTowardsTheMovies() {
  return (
    <>
      <NavLink
        exact
        to="/projects"
        style={{ marginBottom: '-30px', textDecoration: 'none' }}
      >
        <p style={{ color: '#BFE9F9', fontSize: '19.20px' }}>
          <IoArrowBack
            style={{
              color: '#BFE9F9',
              fontSize: '19.20px',
              marginBottom: '-3px',
            }}
          />{' '}
          Back
        </p>
      </NavLink>

      <Grid
        container
        direction="row"
        justifyContent="space-around"
        alignItems="center"
      >
        <Grid
          container
          item
          direction="column"
          justifyContent="space-around"
          alignItems="center"
          lg={6}
          spacing={2}
        >
          <Grid item style={{ color: '#BFE9F9', fontSize: '19.20px' }} lg={5}>
            Move Towards the Movies is a web app that fetches movie data from
            the GraceNote Movie API based on the zipcode, and displays all
            movies playing in the area. The idea was to create a website that
            was able to show the nearest theater for the specific movie chosen.
            Click on a movie title and see details on the movie, showtimes, and
            an image fetched from TMDB API.
          </Grid>
          <Grid
            container
            item
            direction="row"
            justifyContent="space-around"
            alignItems="center"
            className="form-group"
          >
            <Grid
              container
              item
              lg={3}
              direction="column"
              className="form-group"
            >
              <a
                className="a-button"
                style={{ textDecoration: 'none', color: '#cff2f7' }}
                href="https://mels065.github.io/move-towards-the-movies/"
                target="_blank"
                rel="noreferrer"
              >
                website
              </a>
            </Grid>

            <Grid
              container
              item
              lg={3}
              direction="column"
              className="form-group"
            >
              <a
                className="a-button"
                style={{ textDecoration: 'none', color: '#cff2f7' }}
                href="https://github.com/mels065/move-towards-the-movies"
                target="_blank"
                rel="noreferrer"
              >
                code
              </a>
            </Grid>
          </Grid>
        </Grid>

        <Grid item lg={5}>
          <img
            style={{ width: '40vw' }}
            src={MoveTowardsTheMoviesGIF}
            alt="Move Toward the Movies GIF"
          />
        </Grid>
      </Grid>
    </>
  )
}

export default MoveTowardsTheMovies
