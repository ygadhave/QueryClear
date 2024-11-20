import React, { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import { Card, CardContent, CardMedia, Container, Typography, Button,Divider} from '@mui/material';
import { styled } from '@mui/material/styles';
import Navbar from '../Components/Navbar';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import axios from 'axios';


const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.primary,
}));


export default function Coursecontent() {
  
  return (
  <>
  <Navbar/>
  <Box sx={{mt: 12}}/>
      <Container  maxWidth="lg">
      <Card sx={{ position: 'relative',height: '200px' }}>
  <CardMedia
    component="img"
    height="194"
    src="https://images.unsplash.com/photo-1615469038804-6b91aef7026f?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max"
    alt="Paella dish"
    sx={{
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      objectFit: 'cover', // Adjust image fitting as needed
      opacity: 0.7, // Adjust opacity for text visibility
    }}
  />
  <CardContent sx={{ position: 'relative', zIndex: 1 }}> {/* Ensure text is above image */}
    <Typography variant="h2" color="textPrimary" gutterBottom>CourseName</Typography>
    <Typography variant="h4" color="textSecondary" gutterBottom>About the course</Typography>
  </CardContent>
</Card>
<Box sx={{mt: 4}}/>

<Grid container spacing={2}>
        <Grid item xs={4}>
          <Item>
          <Typography variant="h5" gutterBottom>Summary</Typography>
          <Divider/>
        <Typography variant="body1" >Immerse yourself in the tragic tale of Emma Bovary, a woman trapped in a mundane marriage who seeks passion and fulfillment through reckless affairs.</Typography><Typography variant="body1"> This masterpiece of Realism explores themes of social status, societal expectations, and the destructive power of romanticism.</Typography>
          </Item>
        </Grid>
        <Grid item xs={8}>
          <Item>
          <Typography variant="h5" gutterBottom>Madame Bovary by Gustave Flaubert</Typography>
          <Divider/>
    <Typography variant="body1" gutterBottom>
      In the quaint town of Yonville, Emma Bovary yearns for a life far beyond the mundane reality of her marriage to the kind but uninspiring Charles. Fuelled by romantic novels and fantasies of passionate love, she embarks on a series of adulterous affairs, seeking fulfillment and excitement at any cost.</Typography>
<Typography variant="body1" gutterBottom >
      Gustave Flaubert's masterpiece, "Madame Bovary," is a captivating exploration of desire, disillusionment, and the consequences of societal expectations. Immerse yourself in Emma's tragic journey as she navigates societal constraints, financial ruin, and ultimately, the devastating impact of her choices.</Typography>
      <Typography variant="body1" gutterBottom>
      This novel, a cornerstone of literary realism, delves into themes of social status, gender roles, and the destructive power of romantic ideals. Prepare to be captivated by Flaubert's masterful prose, nuanced characters, and enduring exploration of the human condition.
    </Typography>

          </Item>
        </Grid>
      </Grid>

      </Container>
      <Box sx={{mt:4}}/>

      <Divider/>
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
    
    
  );
}

