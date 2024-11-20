import React, { useState } from 'react';
import axios from 'axios';
import { Box, Card, CardContent, Typography, TextField, Button, Snackbar, Alert } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const domain =import.meta.env.VITE_REACT_APP_DOMAIN

function Delete() {
  const [userInput, setUserInput] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState('');
  const [snackbarVariant, setSnackbarVariant] = useState('');
  const navigate =useNavigate();

 const handleDelete = () => {
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
    setSubmittedText(userInput); // Save user input to submittedText state
    setUserInput(''); // Clear the input field after submission
  };

  const handleCloseSnackbar = () => {
    setOpenSnackbar(false);
  };

  return (
    <Box>
      <Card sx={{ height: 60 + 'vh', width: 60 + 'vh' }}>
        <CardContent>
          <Typography variant="h6">Delete Course</Typography>
          <form onSubmit={handleSubmit}>
            <TextField
              label="Enter course name"
              value={userInput}
              onChange={(event) => setUserInput(event.target.value)}
            />
            <Button
              type="submit"
              variant="contained"
              onClick={handleDelete}
              disabled={isDeleting}
            >
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
    </Box>
  );
}

export default Delete;

