import React from 'react'
import {Typography,Box,CssBaseline,Card,CardActions, CardMedia,CardContent,Button,Container,Divider,ThemeProvider,createTheme, Stack,Grid} from '@mui/material'
import Navbar from '../Components/Navbar'
import Amon from './Amon'

const theme = createTheme({
  palette: {
    primary: {
      main: '#1976d2', // Adjust as needed
    },
    secondary: {
      main: '#f5f5f5', // Light gray for cards
    },
  },
  spacing: 4, // Global spacing
});

const About = () => {
  return (
    <>
    <CssBaseline/>
    <Navbar/>
    <Box sx={{
            bgcolor: 'background.paper',
            pt: 8,
            pb: 6,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'space-between',
    
            backgroundImage: `linear-gradient(to bottom, rgba(255, 255, 255, 0.95), rgba(245, 245, 245, 0.95))`,
          }} >
<ThemeProvider theme={theme}>
<Container maxWidth="lg">
        <Card sx={{ bgcolor: 'secondary.main', borderRadius: 4, boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.1)' }}>
          <CardContent sx={{ p: 6 }}>
            <Typography variant="h2" align="center" color="textPrimary" >
              About Us
            </Typography>
            <Divider/>
            <Typography variant="body1" align="center" color="textSecondary" component="div" sx={{ mb: 6,mt:6 }}>
              Hello Everyone! Welcome to our platform, a revolutionary web application designed to foster
              interactive learning experiences and facilitate the sharing of educational resources among
              students worldwide.
            </Typography>
              <Typography variant="body1" align="center" color="textSecondary" component="div" sx={{ mb: 6 }}>
      Our mission is to unite students from global colleges, offering a diverse array of courses
      presented by their peers.
    </Typography>
    <Typography variant="body1" align="center" color="textSecondary" component="div" sx={{ mb: 6 }}>
    With our platform, users have the freedom to explore a wide range of courses tailored to their interests and academic needs. From language studies to advanced mathematics, there's something for everyone.
    </Typography>
    <Typography variant="body1" align="center" color="textSecondary" component="div" sx={{ mb: 6 }}>
    Join us on our journey to redefine the way students learn and collaborate. Together, let's embrace the power of knowledge exchange and create a brighter future for education.    </Typography>
          </CardContent>
        </Card>
      </Container>
</ThemeProvider>
        
        <Box sx={{mt:4}}/>
        <Typography variant='h2'>Our Team</Typography>
        
<Stack direction="row" spacing={2}>
<Amon/>
<Amon/>
<Amon/>
    
</Stack>
        
    
      </Box>
      <Divider />


        <Box sx={{ mt: 2}} />
    
        <footer sx={{ bgcolor: 'background.paper', p: 6 }}>
  <Typography variant="h6" align="center" gutterBottom>Footer</Typography>
  <Grid container justifyContent="center" spacing={2}>
    <Grid item>
      <Button variant="text" href="#">Home</Button>
    </Grid>
    <Grid item>
      <Button variant="text" href="#">About Us</Button>
    </Grid>
    <Grid item>
      <Button variant="text" href="#">Contact</Button>
    </Grid>
  </Grid>
  <Typography variant="body2" color="text.secondary" align="center">
      Copyright © 
    </Typography>
</footer>
    </>
  )
}

export default About