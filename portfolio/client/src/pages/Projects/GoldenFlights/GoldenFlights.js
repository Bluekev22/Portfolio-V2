import React from 'react'
import { Grid } from '@mui/material'
import GoldenFlightsGIF from '../../../assets/GIFs/GoldenFlightsGIF.gif'
import { IoArrowBack } from 'react-icons/io5'
import { NavLink } from 'react-router-dom'

function GoldenFlights() {
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
            Golden Flights is an application where you can reserve flights
            efforlessly in a sleek and elegant way. This website follows the MVC
            framwork featuring Express-Session for authentication, Handlebars.js
            as the templating language, Sequelize as its ORM, and PDFMake for
            downloading tickets.
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
                href="https://powerful-eyrie-53621.herokuapp.com/"
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
                href="https://github.com/mels065/golden-flight"
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
            src={GoldenFlightsGIF}
            alt="Golden Flights GIF"
          />
        </Grid>
      </Grid>
    </>
  )
}

export default GoldenFlights
