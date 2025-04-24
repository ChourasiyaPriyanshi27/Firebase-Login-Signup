import React, { useState } from 'react';
import { TextField, Button, Typography, Box, Grid } from '@mui/material';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth,db } from './firebase';
import { setDoc,doc } from 'firebase/firestore';
import { toast } from 'react-toastify';
function Register() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
  const handleLoginNavigation = () => {
    window.location.href = "/Login"
  }
  const handleSubmit = async (e) => {
    e.preventDefault();
    const { email, password } = formData;  
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      const user = auth.currentUser;
      if(user){
        await setDoc(doc(db, "Users", user.uid), {
            email: user.email,
            firstName: formData.firstName,
            lastName: formData.lastName,
          });
      }
      console.log("User Registered Successfully");
      toast.success("User Registered Successfully",{
        position:'top-center'
      })
    } catch (error) {
      console.log(error.message);
      toast.error(error.message,{
        position:'top-center'
      })
    }
  };

  return (
    <Box
      sx={{
        width: 400,
        mx: 'auto',
        mt: 8,
        p: 4,
        border: '1px solid #ccc',
        borderRadius: 2,
        boxShadow: 3,
      }}
    >
      <Typography variant="h5" gutterBottom textAlign="center">
        Sign Up
      </Typography>
      <form onSubmit={handleSubmit}>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
          <label style={{display:"flex"}}>First Name</label>
            <TextField
              placeholder='FirstName'
              name="firstName"
              fullWidth
              value={formData.firstName}
              onChange={handleChange}
              required
            />
          </Grid>
          <Grid item xs={12} sm={6}>
          <label style={{display:"flex"}}>Last Name</label>
            <TextField
              placeholder='Lastname'
              name="lastName"
              fullWidth
              value={formData.lastName}
              onChange={handleChange}
              required
            />
          </Grid>
          <Grid item xs={12}>
          <label style={{display:"flex"}}>Email</label>
            <TextField
              placeholder='Email'
              type="email"
              name="email"
              fullWidth
              value={formData.email}
              onChange={handleChange}
              required
            />
          </Grid>
          <Grid item xs={12}>
            <label style={{display:"flex"}}>Password</label>
            <TextField
              placeholder='Password'
              type="password"
              name="password"
              fullWidth
              value={formData.password}
              onChange={handleChange}
              required
            />
          </Grid>
        </Grid>
        <Button
          type="submit"
          variant="contained"
          color="primary"
          fullWidth
          sx={{ mt: 3 }}
        >
          Sign Up
        </Button>
        <Button
          type="submit"
          variant="contained"
          color="primary"
          sx={{ mt: 3 }}
          onClick={handleLoginNavigation}
        >
        Login
        </Button>
      </form>
    </Box>
  );
}

export default Register;
