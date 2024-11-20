import React, { useState, useEffect } from 'react'
import axios from 'axios';
import SideNavbar from '../Components/SideNavbar'
import ProfileNavbar from '../Components/ProfileNavbar'
import { Box, Container, Grid, Typography,Stack,Divider,Button, Snackbar, Alert } from "@mui/material";
import "./Profilementors.css"
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import TextField from '@mui/material/TextField';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';

const domain =import.meta.env.VITE_REACT_APP_DOMAIN

function Profilecourse() {
    const [courses, setCourses] = useState([]);

  const [userInput, setUserInput] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState('');
  const [snackbarVariant, setSnackbarVariant] = useState('');

  const handleDelete = () => {
    // Send a DELETE request to remove the course
    setIsDeleting(true);

    // Send a DELETE request to remove the course
    axios.delete(`${domain}/courses/${userInput}`)
      .then(() => {
        console.log('Course deleted successfully.');
        setSnackbarMessage('Course deleted successfully!');
        setSnackbarVariant('success');
        setOpenSnackbar(true);
        // navigate('/courses'); // Redirect to the course list page
      })
      .catch((error) => {
        console.error('Error deleting course:', error);
        setSnackbarMessage('Error deleting course:');
        setSnackbarVariant('error');
        setOpenSnackbar(true);
        setIsDeleting(false);
      });
  };

  const handleSubmit = (event) => {
    event.preventDefault(); // Prevent default form submission behavior
    setUserInput(''); // Clear the input field after submission
  };

  const handleCloseSnackbar = () => {
    setOpenSnackbar(false);
  };
    useEffect(() => {
      // Fetch the list of courses from the backend
      axios.get(`${domain}/courses`)
        .then((response) => {
          setCourses(response.data);
        })
        .catch((error) => {
          console.error('Error fetching courses:', error);
        });
    }, []);
    
  return (
    <div>
      <div className='bgcolor'>
      <ProfileNavbar />
      <Box height={70} />
<Box sx={{ display: "flex" }}>
<SideNavbar />
<Box component="main" sx={{ flexGrow: 1, p: 3 }}>

<Grid container spacing={2}>
<Grid item xs={8}>
             
                <Card sx={{ width:"100%",height:150 }} className="gradient">
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div" sx={{color:"#ffffff"}}>
                      Courses
                    </Typography>
                    <Typography variant="body2" color="text.secondary" sx={{color:  "#cbcbcb"}}>
                      This is course Section 
                    </Typography>
                  </CardContent>
                </Card>
              
            </Grid>
</Grid>

<Box height={20} />

          <Grid container spacing={2}>
            <Grid item xs={8}>
            <Stack spacing={2} direction="row">
            <Card sx={{ height:60 + "vh",width:60 + "vh" }}>
                  <CardContent>
                    <Typography variant='h6'>Show Course</Typography>
                    
                    <List >
                    {courses.map((course) => (
          
            <ListItem disablePadding key={course.courseId}>
           
              <ListItemText>

              </ListItemText>{course.course}
           
          </ListItem>
            ))}
          </List>
                    
        
                    

                  </CardContent>
                </Card>

                <Card sx={{ height:60 + "vh",width:60 + "vh" }}>
                  <CardContent>
                    <Typography variant='h6'>Delete Course</Typography>
                    
                    <form onSubmit={handleSubmit}>
      <TextField
        label="Enter course name"
        value={userInput}
        onChange={(event) => setUserInput(event.target.value)}
      />
      <Button type="submit" variant="contained" onClick={handleDelete} disabled={isDeleting}>
      {isDeleting ? 'Deleting...' : 'Delete Course'}
      </Button>
      </form>  
      <Snackbar
        open={openSnackbar}
        autoHideDuration={6000}
        onClose={handleCloseSnackbar}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
      >
        <Alert onClose={handleCloseSnackbar} severity={snackbarVariant}>
          {snackbarMessage}
        </Alert>
      </Snackbar>
                  </CardContent>
                </Card>
                
                </Stack>
            </Grid>
          </Grid>
    
</Box>

</Box>
    
    </div>
    </div>
  )
}

export default Profilecourse
