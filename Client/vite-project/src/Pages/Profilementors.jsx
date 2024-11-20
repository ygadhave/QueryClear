import React, { useState, useEffect } from 'react'
import axios from 'axios';
import SideNavbar from '../Components/SideNavbar'
import ProfileNavbar from '../Components/ProfileNavbar'
import { Box, Typography } from "@mui/material";
import "./Profilementors.css"

const domain =import.meta.env.VITE_REACT_APP_DOMAIN



function Profilementors() {

  const [mentors,setMentor]=useState([]);
  const [selectedMentor,setSelectedMentor]=useState(null);

  useEffect(()=>{
    axios.get(`${domain}/mentors`)
    .then((response) => {
      setMentor(response.data);
    })
    .catch((error)=>{
      console.log("Error fetching mentors",error)
    })
  },[]);

  const handleMentorClick=(mentorName)=>{

    axios.get(`${domain}/mentors/${mentorName}`)
    .then(response=>{
      setSelectedMentor(response.data);
    })
    .catch(error=>{
      console.log("Error fetching mentors",error)
    })

  }

  return (
    <div className='bgcolor'>
      <ProfileNavbar />
      <Box height={70} />
<Box sx={{ display: "flex" }}>
<SideNavbar />
<Box component="main" sx={{ flexGrow: 1, p: 3 }}>

<h1>Mentors</h1>
      <ul>
        {mentors.map((mentor)=>(
          <li key={mentor.id} onClick={() => handleMentorClick(mentor.name)}>
          {mentor.name}
        </li>
         ))}
        {selectedMentor && (
          <div>
            <h2>Details of {selectedMentor.name}</h2>
            <p>Course ID: {selectedMentor.id}</p>
            <p>Experince: {selectedMentor.experince}</p>
            <p>College: {selectedMentor.university}</p>
            <p>Ratings: {selectedMentor.ratings}</p>
          </div>
        ) }

       
      </ul>
</Box>

</Box>
    
    </div>
  )
}

export default Profilementors
