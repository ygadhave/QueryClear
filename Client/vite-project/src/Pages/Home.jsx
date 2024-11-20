import React from 'react'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'
import Grid from '@mui/material/Grid';
import Box  from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { CssBaseline, Stack, Card, CardHeader, CardContent, CardActions } from '@mui/material';
import {Container,Divider} from '@mui/material';
import {Button} from '@mui/material';
import { useNavigate } from 'react-router-dom';
import {Carousel} from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css"; 
import TestimonialCard from '../Components/TestimonialCard';



const testimonials = [
  {
    id: 1,
    name: 'John Doe',
    company: 'ACME Corporation',
    avatar: 'https://source.unsplash.com/random/100x100?face',
    quote: 'This product is amazing! It saved me a lot of time and effort.',
  },
  {
    id: 2,
    name: 'John Doe',
    company: 'ACME Corporation',
    avatar: 'https://source.unsplash.com/random/100x100?face',
    quote: 'This product is amazing! It saved me a lot of time and effort.',
  },
  {
    id: 3,
    name: 'John Doe',
    company: 'ACME Corporation',
    avatar: 'https://source.unsplash.com/random/100x100?face',
    quote: 'This product is amazing! It saved me a lot of time and effort.',
  },
  {
    id: 4,
    name: 'John Doe',
    company: 'ACME Corporation',
    avatar: 'https://source.unsplash.com/random/100x100?face',
    quote: 'This product is amazing! It saved me a lot of time and effort.',
  },
 
];

const tiers = [
  {
    title: 'Personalized Learning',
    price: 'Students practice at their own pace, first filling in gaps in their understanding and then accelerating their learning.',
    buttonText: 'Sign up for free',
    buttonVariant: 'outlined',
  },
  {
    title: 'Trusted Content',
    subheader: '',
    price: 'Created by experts, Edu Connect’s library of trusted, standards-aligned practice and lessons covers through early college, grammar, science, history, and more. It’s all free for learners and teachers.',
    buttonText: 'Get started',
    buttonVariant: 'contained',
  },
  {
    title: 'Empower Teachers',
    price: 'With Edu Connect, teachers can identify gaps in their students’ understanding, tailor instruction, and meet the needs of every student.',
    buttonText: 'Contact us',
    buttonVariant: 'outlined',
  },
];

const Home = () => {
  const navigate=useNavigate();

  return (
    <div>
      <Navbar/>
      <CssBaseline/>

      {/* main page */}
      
      <Grid container component="main" sx={{ height: '100vh' }}>
        <Grid
          item
          xs={6}
          sm={4}
          md={7}
          sx={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1572985353481-b9064d14b646?q=80&w=1888&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)', // Replace with actual image URL
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundColor: (theme) =>
              theme.palette.mode === 'light'
                ? theme.palette.grey[50]
                : theme.palette.grey[900], // Use theme colors for consistency
            // ...other styles
          }}
        />
        <Grid item xs={6} sm={8} md={5}>
          <Box
            sx={{
              bgcolor: 'background.paper',
              p: 4, // Use consistent spacing
              pt: 18, // Adjust top padding for visual balance
            }}
          >
            <Container maxWidth="sm">
              <Typography variant="h2" align="center" gutterBottom>
                LEARN, CONNECT, THRIVE
              </Typography>
              <Typography variant="h4" align="center" gutterBottom>
                Where Education Meets Interactivity.
              </Typography>
              <Typography variant="body1" align="center" paragraph>
                The premier platform for cultivating meaningful connections,
                acquiring knowledge, and seeking expert guidance within the
                confines of your academic institution.
              </Typography>
              <Stack direction="row" spacing={2} justifyContent="center" sx={{mt:4}}>
                <Button variant="contained" onClick={()=>{navigate("/login")}}>Teachers Here</Button>
                <Button variant="outlined" onClick={()=>{navigate("/login")}}>Learners Here</Button>
              </Stack>
            </Container>
          </Box>
        </Grid>
      </Grid>

      <Box
        sx={{
          p: 4,
          pt: 6, // Adjust top padding
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          
        }}
      >
        <Typography variant="h4" align="center" gutterBottom>
          Why EDU CONNECT?
        </Typography>
        <Container maxWidth="md">
          <Grid container spacing={4} alignItems="center" >
            {tiers.map((tier) => (
              <Grid item key={tier.title} xs={12} md={4} >
                <Card
                  sx={{
                    boxShadow: 3,
                    borderRadius: 4,
                    // backgroundColor: (theme) =>
                    //   theme.palette.mode === 'light'
                    //     ? theme.palette.primary.main
                    //     : theme.palette.secondary.main,
                    backgroundColor: '#6CB4EE'
                  }}
                >
                  <CardHeader
                    title={tier.title}
                    titleTypographyProps={{ align: 'center', fontWeight: 'bold' }}
                    subheaderTypographyProps={{ align: 'center' }}
                  />
                  <CardContent>
                    <Typography variant="body1" align="center">
                      {tier.price}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

<Box sx={{bgcolor: 'background.paper',
mt:4,p: 4,}}>
  <Typography variant="h4" align="center" color="textPrimary" gutterBottom>Read What Others
Have To Say</Typography>
<Container maxWidth="sm">
      <Carousel showArrows={true} emulateTouch={true} autoPlay={true} infiniteLoop={true}>
      {testimonials.map((testimonial) => (
        <TestimonialCard key={testimonial.id} {...testimonial} />
      ))}
    </Carousel>
</Container>
</Box>

<Box>
      <Container >
   <Grid container spacing={4}>
   <Grid item xs={12} >
    <Card sx={{backgroundColor:"#6CB4EE",height: 230,borderRadius: "10px"}}>
    <CardContent sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
    
      <Typography variant="h4" color="textPrimary" gutterBottom>Teachers</Typography>
      <Typography variant="h5" color="textSecondary" >We empower teachers to support their entire classroom.</Typography><Typography variant="h5" color="textSecondary" gutterBottom> 90% of teachers who have used Edu Connect have found us effective.</Typography>
      <Button variant="contained" color="primary" sx={{ mt: 2 }} onClick={()=>{navigate("/login")}}>Teachers</Button>
   
  </CardContent>

    </Card>

   </Grid>
   <Grid item xs={12} >
    <Card sx={{backgroundColor:"#6CB4EE",height: 230,borderRadius: "10px"}}>
    <CardContent sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
    
    <Typography variant="h4" color="textPrimary" gutterBottom>Learners</Typography>
    <Typography variant="h5" color="textSecondary" >You can learn anything.</Typography>
    <Typography variant="h5" color="textSecondary" gutterBottom>Build a deep, solid understanding in math, science, grammar, history, SAT®, and more.</Typography>
    <Button variant="contained" color="primary" sx={{ mt: 2 }} onClick={()=>{navigate("/login")}}>Learners</Button>
 
</CardContent>

    </Card>

   </Grid>
   </Grid>

   </Container>
      </Box>

    
      

      <Footer/>
    </div>
  )
}

export default Home
