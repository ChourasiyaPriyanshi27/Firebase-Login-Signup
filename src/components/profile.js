import React from "react";
import { Modal,Box,Typography } from "@mui/material";
const profile = () => {
  return (
    <Modal
    open={true}
    aria-labelledby="modal-modal-title"
    aria-describedby="modal-modal-description"
    BackdropProps={{
      style: { backgroundColor: 'transparent',  width:"50%" , 
        textAlign:"center",
        backgroundColor:"white",
        height:"18%" },
    }}
  >
        <Box    sx={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: '25%',
          bgcolor: 'white',
          border: '1px solid black',
          boxShadow: 24,
          textAlign: 'center',
          p: 3,
        }}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Welcome to the Profile
          </Typography>
        </Box>
      </Modal>
  );
};

export default profile;
