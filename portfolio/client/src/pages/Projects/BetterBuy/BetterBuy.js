import React from 'react'
import { Grid } from '@mui/material'
import BetterBuyGIF from '../../../assets/GIFs/BetterBuyGIF.gif'

function BetterBuy() {
  return (
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
          Better Buy is a MERN eCommerce website that pulls live product data
          using the Best Buy API in combination with Material UI to deliver a
          platform that creates a less intimating vibe for purchasing tech
          products.
        </Grid>
        <Grid
          container
          item
          direction="row"
          justifyContent="space-around"
          alignItems="center"
          className="form-group"
        >
          <Grid container item lg={3} direction="column" className="form-group">
            <button>Website</button>
          </Grid>

          <Grid container item lg={3} direction="column" className="form-group">
            <button>Code</button>
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
  )
}

export default BetterBuy
