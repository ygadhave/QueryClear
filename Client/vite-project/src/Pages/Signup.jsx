import React,{useState} from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useNavigate } from 'react-router-dom';
import {getAuth,createUserWithEmailAndPassword} from "firebase/auth"
import { app } from '../Components/Firebase'
import Alert from '@mui/material/Alert';


const auth =getAuth(app);


function Copyright(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}


const defaultTheme = createTheme();

export default function SignUp() {


    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("");
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [success, setSuccess] = useState(false);
  const navigate=useNavigate();

  const handleSubmit = async(event) => {
    event.preventDefault();
    setLoading(true);
    setError(null);
    setSuccess(false);

    try {
      const { user } = await createUserWithEmailAndPassword(auth, email, password);

      // Optionally set a display name for enhanced user experience
      

      setSuccess(true);
      setTimeout(() => navigate('/profile'), 2000); // Redirect after 2 seconds (optional delay)
    } catch (error) {
      setError(error.message);
      console.error(error); // Log the error for debugging and potential reporting
    } finally {
      setLoading(false);
    }
  };

  return (
    <ThemeProvider theme={defaultTheme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign up
          </Typography>
          <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
               onChange={(e) => setEmail(e.target.value)}
               value={email}
               required
               fullWidth
               id="email"
               label="Email Address"
               name="email"
               autoComplete="email"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                 onChange={(e) => setPassword(e.target.value)}
                 value={password}
                 required
                 fullWidth
                 name="password"
                 label="Password"
                 type="password"
                 id="password"
                 autoComplete="new-password"
                />
              </Grid>
              <Grid item xs={12}>
                <FormControlLabel
                  control={<Checkbox value="allowExtraEmails" color="primary" />}
                  label="I want to receive inspiration, marketing promotions and updates via email."
                />
              </Grid>
            </Grid>
            <Button
             type="submit"
             fullWidth
             variant="contained"
             sx={{ mt: 3, mb: 2 }}
             disabled={loading}
            >
{loading ? 'Creating...' : 'Sign Up'}            </Button>
{error && <Alert severity="error">{error}</Alert>}
            {success && <Alert severity="success">User created successfully!</Alert>}
</Box>
            <Grid container justifyContent="flex-end">
              <Grid item>
                <Link href="#" variant="body2"  onClick={()=>navigate("/login")}>
                  Already have an account? Sign in
                </Link>
              </Grid>
            </Grid>
          
        </Box>
        <Copyright sx={{ mt: 5 }} />
      </Container>
    </ThemeProvider>
  );
}