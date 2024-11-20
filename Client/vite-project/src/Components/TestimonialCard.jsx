import React from 'react';
import {
  Card,
  CardContent,
  Typography,
  Grid,
  Avatar,
  createTheme,
  ThemeProvider,
} from '@mui/material';

const theme = createTheme({
  palette: {
    primary: {
      main: '#1976d2', // Adjust as needed
    },
    secondary: {
      main: '#6CB4EE', // Light gray for card background
    },
  },
});

const TestimonialCard = ({ name, company, avatar, quote }) => {
  return (
    <ThemeProvider theme={theme}>
      <Card
        sx={{
          bgcolor: 'secondary.main',
          borderRadius: 4,
          boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.1)', // Add subtle shadow
          p: 3, // Add padding for content
        }}
      >
        <CardContent sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <Avatar src={avatar} alt={name} sx={{ mb: 2, width: 64, height: 64 }} />
          <Typography variant="h6" sx={{ mt: 2 }}>
            {name}
          </Typography>
          <Typography variant="body2" color="textSecondary" sx={{ mb: 1 }}>
            {company}
          </Typography>
          <Typography variant="body1" sx={{ mt: 2 }}>
            {quote}
          </Typography>
        </CardContent>
      </Card>
    </ThemeProvider>
  );
};

export default TestimonialCard;
