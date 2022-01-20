import React from 'react'
import { Grid } from '@mui/material'
import PDF from '../../assets/pdf/Resume.pdf'
import { IoLogoJavascript, IoLogoCss3 } from 'react-icons/io5'
import { AiOutlineConsoleSql } from 'react-icons/ai'
import { DiHtml5, DiReact, DiNodejsSmall, DiJqueryLogo } from 'react-icons/di'
import { SiMaterialui, SiMysql, SiMongodb } from 'react-icons/si'
import { FaNode, FaBootstrap } from 'react-icons/fa'

function Skills() {
  return (
    <Grid
      container
      direction="row"
      justifyContent="center"
      alignItems="stretch"
      spacing={20}
      style={{ color: '#BFE9F9', fontSize: '24px' }}
    >
      <Grid
        item
        direction="column"
        justifyContent="space-between"
        alignItems="center"
      >
        <Grid
          item
          mb={2}
          style={{
            color: '#2bb6ed',
            fontSize: '30px',
            borderBottom: '2px solid #033269',
          }}
        >
          Languages
        </Grid>
        <Grid item>
          <IoLogoJavascript /> Javascript
        </Grid>
        <Grid item></Grid>
        <Grid item>
          <AiOutlineConsoleSql /> SQL
        </Grid>
        <Grid item>
          <IoLogoCss3 /> CSS
        </Grid>
        <Grid item>
          <DiHtml5 /> HTML
        </Grid>
        <Grid item className="form-group"></Grid>
      </Grid>
      <Grid
        item
        direction="column"
        justifyContent="space-between"
        alignItems="center"
      >
        <Grid
          item
          mb={2}
          style={{
            color: '#2bb6ed',
            fontSize: '30px',
            borderBottom: '2px solid #033269',
          }}
        >
          Tools
        </Grid>
        <Grid item>
          <DiReact /> React
        </Grid>
        <Grid item>
          <SiMaterialui /> Material UI
        </Grid>
        <Grid item>
          <DiNodejsSmall /> Express.js
        </Grid>
        <Grid item>
          <FaNode /> Node.js
        </Grid>
        <Grid item>
          <DiJqueryLogo /> JQuery
        </Grid>
        <Grid item>
          <SiMysql /> MySQL
        </Grid>
        <Grid item>
          <SiMongodb /> MongoDB
        </Grid>
        <Grid item>
          <FaBootstrap /> Bootstrap
        </Grid>
      </Grid>
      <Grid
        container
        item
        lg={3}
        direction="column"
        className="form-group"
        alignSelf="center"
      >
        <button>
          <a
            style={{ textDecoration: 'none', color: '#cff2f7' }}
            href={PDF}
            target="_blank"
            rel="noreferrer"
          >
            download resume
          </a>
        </button>
      </Grid>
    </Grid>
  )
}

export default Skills
