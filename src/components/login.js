import React, { useState } from 'react';
import { TextField, Button, Typography, Box } from '@mui/material';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from './firebase';
import { toast } from 'react-toastify';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try{
        await signInWithEmailAndPassword(auth,email,password);
        console.log("User logged in Successfully");
        window.location.href = "/Profile";
        toast.success("User logged in Successfully",{
            position:"top-center",
        })
    } catch(error){
        console.log(error.message);
        toast.error(error.message,{
            position:"top-center"
        })
    }
    
  }; 

  const handleNavigationToSignUp = () => {
    window.location.href = '/Register'
  }

  return (
    <Box
      sx={{
        width: 300,
        mx: 'auto',
        mt: 10,
        p: 3,
        border: '1px solid #ccc',
        borderRadius: 2,
        boxShadow: 3,
      }}
    >
      <Typography variant="h5" gutterBottom textAlign="center">
        Login
      </Typography>
      <form onSubmit={handleSubmit}>
        <label style={{display:"flex",marginBottom:"-10px"}}>Email</label>
        <TextField
          type="email"
          fullWidth
          margin="normal"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <label style={{display:"flex",marginBottom:"-10px"}}>Password</label>
        <TextField
          type="password"
          fullWidth
          margin="normal"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <Button
          type="submit"
          variant="contained"
          color="primary"
          fullWidth
          sx={{ mt: 2 }}
        >
          Login
        </Button>
        <Button
          type="submit"
          variant="contained"
          color="primary"
          sx={{ mt: 2 }}
          onClick={handleNavigationToSignUp}
        >
          Sign up
        </Button>
      </form>
    </Box>
  );
}

export default Login;
