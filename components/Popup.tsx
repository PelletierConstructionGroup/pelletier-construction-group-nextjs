'use client'
import React, { useState } from "react";
import { Box, Typography, Fade, Button, Stack} from "@mui/material";
import Image from "next/image";
import Modal from '@mui/material/Modal';
import type { Design } from "@/styles/Design";


const Popup: React.FC<Design> = (design : Design) => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Button id={design.name} onClick={handleOpen}>More Details</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Stack>
          
          <Stack sx={style}>  
            <Box>
              <Button onClick={handleClose} sx={{position:'absolute', float:'right', paddingLeft:'88%', fontSize: 20, fontWeight:"bold", paddingTop:0, height:25 }}>X</Button>
              <Typography id="modal-modal-title" variant="h6" component="h2">
                {design.name}
              </Typography>
              <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                {design.description}
              </Typography>
            </Box>
          </Stack>
        </Stack>
      </Modal>
    </div>
  );
};

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  // boxShadow: 24,
  p: 2,
};

export default Popup;
