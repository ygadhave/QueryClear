import React, { useState,useEffect } from 'react';
import axios from 'axios';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { Card, CardContent } from '@mui/material';

const domain =import.meta.env.VITE_REACT_APP_DOMAIN

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));



function Adminaddcourse() {
  
  const [courses, setCourses] = useState([]);

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

  const [courseData, setCourseData] = useState({
    course: '',
    cohort: '',
    college: '',
    semester: '',
  });
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setCourseData({ ...courseData, [name]: value });
  };
  
  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Send a POST request to add a new course using Axios
    axios.post(`${domain}/courses`, courseData)
      .then((response) => {
        // Successful response handling
        console.log('Course added successfully.');
        // You can redirect to another page or update the UI as needed here
      })
      .catch((error) => {
        // Error handling
        console.error('Error adding course:', error);
      });
  };

  const [courseName, setCourseName] = useState("Data Structures and Algorithms")
  
  const [isDeleting, setIsDeleting] = useState(false);

  const handleDelete = () => {
    // Send a DELETE request to remove the course
    setIsDeleting(true);
    axios.delete(`${domain}/courses/${courseName}`)
      .then(() => {
        console.log('Course deleted successfully.');
      
      })
      .catch((error) => {
        console.error('Error deleting course:', error);
        setIsDeleting(false);
      });
  };

  const [courseNameE, setCourseNameE] = useState("frontend")
  const [courseDataE, setCourseDataE] = useState({});
  const [isFetching, setIsFetching] = useState(true);

  useEffect(() => {
    // Fetch the current course details to pre-fill the form
    axios.get(`${domain}/courses/${courseNameE}`)
      .then((response) => {
        setCourseDataE(response.data);
        setIsFetching(false);
      })
      .catch((error) => {
        console.error(`Error fetching details for ${courseNameE}:`, error);
      });
  }, [courseNameE]);

  const handleEditSubmit = (e) => {
    e.preventDefault();
    // Send a PUT request to update the course information
    axios.put(`${domain}/courses/${courseNameE}`, courseDataE)
      .then(() => {
        console.log('Course information updated successfully.');
        // Redirect or update the UI as needed
      })
      .catch((error) => {
        console.error('Error updating course information:', error);
      });
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setCourseDataE({ ...courseDataE, [name]: value });
  };

  if (isFetching) {
    return <div>Loading...</div>;
  }

  
  return (
    <>


<Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={1}>
        <Grid item xs={4}>
          
          
              
              <div>
      <h1>Course List</h1>
      <ul>
        {courses.map((course) => (
          <li key={course.courseId}>
            {course.course}
          </li>
        ))}
      </ul>
    </div>
              
            
          
        </Grid>
        <Grid item xs={3}>
        <div>
    <h1>Add Course</h1>
    <form onSubmit={handleSubmit}>
      <div>
        <label>Course Name:</label>
        <input
          type="text"
          name="course"
          value={courseData.course}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label>Cohort:</label>
        <input
          type="text"
          name="cohort"
          value={courseData.cohort}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label>College:</label>
        <input
          type="text"
          name="college"
          value={courseData.college}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label>Semester:</label>
        <input
          type="text"
          name="semester"
          value={courseData.semester}
          onChange={handleChange}
          required
        />
      </div>
      <button type="submit">Add Course</button>
    </form>
  </div>
        </Grid>
        <Grid item xs={5}>
        <div>
      <h1>Delete Course</h1>
      <p>Are you sure you want to delete {courseName} course?</p>
      <button onClick={handleDelete} disabled={isDeleting}>
        {isDeleting ? 'Deleting...' : 'Delete Course'}
      </button>
    </div>
        </Grid>
        <Grid item xs={5}>
        <div>
      <h1>Edit Course</h1>
      <form onSubmit={handleEditSubmit}>
        <div>
          <label>Course Name:</label>
          <input
            type="text"
            name="course"
            value={courseDataE.course}
            onChange={handleInputChange}
            required
          />
        </div>
        {/* Add input fields for other course details */}
        <button type="submit">Save Changes</button>
      </form>
    </div>
        </Grid>
        
      </Grid>
    </Box>

  



 
    </>
    
  )
}

export default Adminaddcourse
