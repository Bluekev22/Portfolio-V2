import React from 'react'
import { Grid } from '@mui/material'
import BookSearchEngineGIF from '../../../assets/GIFs/BookSearchEngineGIF.gif'

function BookSearchEngine() {
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
          src={BookSearchEngineGIF}
          alt="Better Buy GIF"
        />
      </Grid>
    </Grid>
  )
}

export default BookSearchEngine
