import { Box, Grid, Typography } from '@mui/material'
import React from 'react'
import head from '../../assets/header-img.png'
const Header = () => {
  return (
    <Box sx={{ backgroundColor: "#000000",
    backgroundImage: "linear-gradient(147deg, #000000 0%, #2c3e50 74%)"}}>
    <Grid container  direction="row"
  justifyContent="space-between"
  alignItems="center">
        <Grid item xs={6}> <Typography sx={{color:"white",fontSize:"bold",fontSize:"2rem"}}>The Marvel Cinematic Universe (MCU) films are a series of American superhero films produced by Marvel Studios based on characters that appear in publications by Marvel Comics</Typography>
    </Grid>
        <Grid item xs={6}><img style={{width:"50%"}} src={head} alt="header"/></Grid>
    </Grid>
    
    </Box>
  )
}

export default Header