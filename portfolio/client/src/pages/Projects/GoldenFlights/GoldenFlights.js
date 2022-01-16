import React from 'react'
import { Grid } from '@mui/material'
import GoldenFlightsGIF from '../../../assets/GIFs/GoldenFlightsGIF.gif'

function GoldenFlights() {
  return (
    <Grid
      container
      direction="row"
      justifyContent="space-between"
      alignItems="center"
    >
      <Grid item style={{ color: '#BFE9F9' }}></Grid>
      <Grid item>
        <img
          style={{ width: '50vw' }}
          src={GoldenFlightsGIF}
          alt="Better Buy GIF"
        />
      </Grid>
    </Grid>
  )
}

export default GoldenFlights
