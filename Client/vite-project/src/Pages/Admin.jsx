import React from 'react'
import SideNavbar from '../Components/SideNavbar'
import ProfileNavbar from '../Components/ProfileNavbar'
import { Box, Card, Typography ,AppBar,Toolbar,Button,Stack, Container} from "@mui/material";
import "./Profilementors.css"
import List from '../Components/List';


function Admin() {
  return (
    <div>
        
        <AppBar>
            <Toolbar sx={{ justifyContent: 'space-between' }}>
            
            <Button color="inherit" sx={{ fontSize: 18, ml: 1,}} onClick={()=>{navigate("/admin")}}>Admin</Button>
            </Toolbar>
        </AppBar>

        <Box component="main" sx={{ flexGrow: 1, p: 3,mt:6 }}>
    <List/>
</Box>

    
    
      
    </div>
  )
}

export default Admin
