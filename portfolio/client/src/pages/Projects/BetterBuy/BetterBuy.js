import React from 'react'
import { NavLink } from 'react-router-dom'
import { Grid } from '@mui/material'
import BetterBuyGIF from '../../../assets/GIFs/BetterBuyGIF.gif'
import { IoArrowBack } from 'react-icons/io5'

function BetterBuy() {
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
            Better Buy is an eCommerce website that pulls live product data
            using Best Buy's products API. It was born from the idea that
            shopping for tech products should be clean and simple. The front end
            was built with React and MaterialUI was used for the component
            library. The back end was created with Node, express for the
            routing, and MongoDB along with mongoose were chosen for the
            database.
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
                href="https://better-buy-shop.herokuapp.com/"
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
                href="https://github.com/Better-Buy/better-buy"
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
            src={BetterBuyGIF}
            alt="Better Buy GIF"
          />
        </Grid>
      </Grid>
    </>
  )
}

export default BetterBuy
