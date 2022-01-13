import React from 'react'
import { Grid } from '@mui/material'
import MoveTowardsTheMoviesGIF from '../../../assets/GIFs/MoveTowardsTheMoviesGIF.gif'

function MoveTowardsTheMovies() {
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
          src={MoveTowardsTheMoviesGIF}
          alt="Better Buy GIF"
        />
      </Grid>
    </Grid>
  )
}

export default MoveTowardsTheMovies
