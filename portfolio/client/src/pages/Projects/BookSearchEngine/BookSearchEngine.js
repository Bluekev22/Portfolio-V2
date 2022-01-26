import React from 'react'
import { Grid } from '@mui/material'
import BookSearchEngineGIF from '../../../assets/GIFs/BookSearchEngineGIF.gif'
import { IoArrowBack } from 'react-icons/io5'
import { NavLink } from 'react-router-dom'

function BookSearchEngine() {
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
            Book Search Engine allows users to search books using the Google
            Books API and save those books to a collection and delete if
            necessary.
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
                href="https://mighty-tundra-51567.herokuapp.com/"
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
                href="https://github.com/Bluekev22/Book-Search-Engine"
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
            src={BookSearchEngineGIF}
            alt="Book Search Engine GIF"
          />
        </Grid>
      </Grid>
    </>
  )
}

export default BookSearchEngine
