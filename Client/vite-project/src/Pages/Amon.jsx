import React from 'react'
import {Typography,Box,CssBaseline,Card,CardActions, CardMedia,CardContent,Button,Container,Divider,ThemeProvider,createTheme, Stack} from '@mui/material'
import Image from "./Assests/mateo-avila-chinchilla-x_8oJhYU31k-unsplash.jpg"

function Amon() {
  return (
    <div>
        <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        alt="Amon"
        height="180"
        image={Image}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Amon
        </Typography>
        <Typography variant="body2" color="text.secondary">
        Hi there! I'm Amon, a highly motivated and enthusiastic 3rd year full-stack developer.
        </Typography>
        <Typography variant="body2" color="text.secondary">
        If you're interested in connecting, please feel free to reach out to me on LinkedIn or GitHub.        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" variant='contained'>Contact Me</Button>
        
      </CardActions>
    </Card>
      
    </div>
  )
}

export default Amon
