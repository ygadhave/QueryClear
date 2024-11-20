import React from 'react'
import SideNavbar from '../Components/SideNavbar'
import ProfileNavbar from '../Components/ProfileNavbar'
import { Box, Card, Typography } from "@mui/material";
import "./Profilementors.css"
import List from "../Components/List"

function Profileedit() {
  return (
    <div>
      <div className='bgcolor'>
      <ProfileNavbar />
      <Box height={70} />
<Box sx={{ display: "flex" }}>
<SideNavbar />
<Box component="main" sx={{ flexGrow: 1, p: 3 }}>
    <List/>
</Box>

</Box>
    
    </div>
    </div>
  )
}

export default Profileedit
