import React from "react";
import { Box, Typography } from "@mui/material";
import SideNavbar from '../Components/SideNavbar'
import ProfileNavbar from '../Components/ProfileNavbar'
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Stack from "@mui/material/Stack";
import "./Profile.css"
import Table from "../Components/Table"

function Home() {
  return (
    <div className="bgcolor">

      <ProfileNavbar />

      <Box height={70} />
      <Box sx={{ display: "flex" }}>
        <SideNavbar />

        <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
          <Grid container spacing={2}>
            <Grid item xs={8}>
              <Stack spacing={2} direction="row">
                <Card sx={{ width:"100%",height:150 }} className="gradient">
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div" sx={{color:"#ffffff"}}>
                      My Name
                    </Typography>
                    <Typography variant="body2" color="text.secondary" sx={{color:  "#cbcbcb"}}>
                      About 
                    </Typography>
                  </CardContent>
                </Card>
              </Stack>
            </Grid>
            <Grid item xs={4}>
            <Stack spacing={2}>
                <Card sx={{ maxWidth: 345 }}>
                  
                    <div className="paddingall">
                    <span>Abc</span>
                    </div>
                    
                  
                </Card>
                <Card sx={{ maxWidth: 345 }}>
                  
                  <div className="paddingall">
                    <span>Abc</span>
                    </div>
                    
                </Card>
              </Stack>
            </Grid>
          </Grid>
          <Box height={20} />

          <Grid container spacing={2}>
            <Grid item xs={8}>
            <Card sx={{ height:60 + "vh" }}>
                  <CardContent>
                    <Typography>Performance</Typography>
                    <Table/>

                  </CardContent>
                </Card>
            </Grid>
            <Grid item xs={4}>
            <Card sx={{  height:60 + "vh" }}>
                  <CardContent>
                    
                  </CardContent>
                </Card>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </div>
  );
}

export default Home;



