import React from 'react'
import './Home.css'
import { Grid } from '@mui/material'
import Headshot from '../../components/Headshot'
import Signature from '../../assets/img/Signature.png'

function Home() {
  return (
    <Grid
      item
      className="home-container"
      alignItems="center"
      justifyContent="center"
      container
      spacing={12}
    >
      <Grid
        container
        item
        lg={9}
        spacing={1}
        alignItems="center"
        justifyContent="center"
      >
        <Grid item className="headline">
          Hello! My name is Kevin, and I'm a front end web devloper.
        </Grid>
        <Grid item className="about-me">
          I am tirelessly seeking out more knowledge so that I can integrate it
          into my designs. I love the process of coming up with a solution,
          brainstorming, researching thoroughly, and finally, sculpting those
          answers into a design that I can be proud of.
        </Grid>
      </Grid>
      <Grid item lg={3}>
        <Headshot />
        <div className="headshot-mask"></div>
        <img className="signature" src={Signature} alt="Signature" />
      </Grid>
    </Grid>
  )
}

export default Home
