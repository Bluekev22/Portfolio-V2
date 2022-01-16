import React from 'react'
import { Grid } from '@mui/material'
import BetterBuyGIF from '../../../assets/GIFs/BetterBuyGIF.gif'

function BetterBuy() {
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
          src={BetterBuyGIF}
          alt="Better Buy GIF"
        />
      </Grid>
    </Grid>
  )
}

export default BetterBuy
