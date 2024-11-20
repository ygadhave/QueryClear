import React from 'react'
import { Container,Grid,Card,CardMedia,CardActions,CardContent,Button,Typography, Box,Divider} from '@mui/material'
import Accordion from '@mui/material/Accordion';
import AccordionActions from '@mui/material/AccordionActions';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Navbar from '../Components/Navbar'
import { useNavigate } from 'react-router-dom';
import {Carousel} from 'react-responsive-carousel';



const cards=[1,2,3,4,5,6,]

const subjects = ['Math', 'English', 'Science', 'Economics','Computer Programming','Psychology','Business Administration','Pre-Med',];


function Course() {
  const navigate=useNavigate();
  
  return (
    <div>
      
        {/* Navbar */}

        <Navbar/>

         {/* Heading */}
         <main>
        <Box sx={{
    bgcolor: 'background.paper',
    pt: 8,
    pb: 6,
    display: 'flex', flexDirection: 'column', alignItems: 'center'
  }} >
    
    <Container maxWidth="lg" sx={{backgroundColor:'#034694',borderRadius:"10px",height:80}} >
  <Typography variant="h2" align="center" color="#F5F5F5" gutterBottom>
    Courses
  </Typography>
 
</Container>
    



{/* Accordion */}
<Box sx={{mt: 4}}>
<Container maxWidth="lg" sx={{backgroundColor:'#0066b2',borderRadius:"10px",height:37}}>
<Typography variant="h5" align="center" color="#FFFFFF" paragraph>
    Course Catalog  
  </Typography>
  </Container>


    {subjects.map((subject)=>(
      <Accordion key={subject}>
       <AccordionSummary
        expandIcon={<ExpandMoreIcon />
      }
      sx={{
        fontFamily: 'Arial',
        
      }} 
      >
        {subject}
      </AccordionSummary>
      <AccordionDetails  sx={{
        fontFamily: 'Arial',
        
      }} >
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
        malesuada lacus ex, sit amet blandit leo lobortis eget.
      </AccordionDetails>
      <AccordionActions sx={{ justifyContent: 'flex-start' }}>
        <Button variant='contained' onClick={()=>{navigate("/courses/coursecontent")}}>Visit Course</Button>
       
      </AccordionActions>
    </Accordion>

    ))}
      
      
      </Box>
      </Box>

      <Divider sx={{ mt: 2 }}/>

        {/* Cards */}
        <Container sx={{py: 10}} maxWidth="md" >
        <Container maxWidth="lg" sx={{backgroundColor:'#0066b2',borderRadius:"10px",height:53}}>
        <Typography variant="h4" align="center" color="#FFFFFF" paragraph>
    Trending Courses  
  </Typography>
        </Container>
        

  <Container maxWidth="lg">
      <Carousel showArrows={true} emulateTouch={true} autoPlay={true} infiniteLoop={true} slidesToShow={2}>
      <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
                 <CardMedia 
                 component="div"
                 sx={{
                   // 16:9
                   pt: '56.25%',
                 }}
                 image="http://source.unsplash.com/random"
                 title="Image title"
                 />
                 <CardContent sx={{ flexGrow: 1 }}>
                   <Typography gutterBottom variant="h5">Course Name</Typography>
                   <Typography>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis ipsam, laudantium sint distinctio assumenda doloremque ipsa ullam molestiae quo adipisci iusto officiis porro architecto vitae esse tenetur impedit cum nemo.</Typography>
                 </CardContent>
                 <CardActions sx={{ display: 'flex', justifyContent: 'center',mb: 3 }}>
                   
                   <Button size="small" color="primary" variant="contained" onClick={()=>{navigate("/courses/coursecontent")}}>Visit</Button>
                 </CardActions>
 
               </Card>
               <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
                 <CardMedia 
                 component="div"
                 sx={{
                   // 16:9
                   pt: '56.25%',
                 }}
                 image="http://source.unsplash.com/random"
                 title="Image title"
                 />
                 <CardContent sx={{ flexGrow: 1 }}>
                   <Typography gutterBottom variant="h5">Course Name</Typography>
                   <Typography>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Saepe, perspiciatis quis eveniet placeat temporibus rerum. Similique quidem error dolorem mollitia, facere totam eveniet suscipit, molestiae sequi doloremque ipsam, cumque voluptates?</Typography>
                 </CardContent>
                 <CardActions sx={{ display: 'flex', justifyContent: 'center',mb: 3 }}>
                   
                   <Button size="small" color="primary" variant="contained" onClick={()=>{navigate("/courses/coursecontent")}}>Visit</Button>
                 </CardActions>
 
               </Card>
               <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
                 <CardMedia 
                 component="div"
                 sx={{
                   // 16:9
                   pt: '56.25%',
                 }}
                 image="http://source.unsplash.com/random"
                 title="Image title"
                 />
                 <CardContent sx={{ flexGrow: 1 }}>
                   <Typography gutterBottom variant="h5">Course Name</Typography>
                   <Typography>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sit facere deleniti saepe architecto voluptas illo, dicta animi deserunt quos dolor aut minima similique iusto natus neque ea aliquam veniam quia?</Typography>
                 </CardContent>
                 <CardActions sx={{ display: 'flex', justifyContent: 'center',mb: 3 }}>
                   
                   <Button size="small" color="primary" variant="contained" onClick={()=>{navigate("/courses/coursecontent")}}>Visit</Button>
                 </CardActions>
 
               </Card>
    </Carousel>
</Container>
        </Container>
        </main>

        <Divider sx={{ mt: 2 }}/>
        <Box sx={{ mt: 2 }} />
       
       {/* Footer */}

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
      
    </div>
  )
}

export default Course
