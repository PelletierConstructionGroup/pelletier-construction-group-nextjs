'use client'
import React from "react";
import { Box, Typography, Button, Stack, Container, ListItem} from "@mui/material";
import Grid from '@mui/material/Grid';
import Image from "next/image";
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import Modal from '@mui/material/Modal';
import type { BulletPoints, Design } from "@/styles/Design";

const Popup: React.FC<Design> = (design : Design) => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const gallery:BulletPoints[] = design.detail.imamges;
  const budget:BulletPoints[] = design.detail.budget;
  const cost:BulletPoints[] = design.detail.add_cost;

  return (
    <div>
      <Button id={design.name} onClick={handleOpen}>More Details</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        disableScrollLock={false}
        style={{ overflow: "auto" }}
      >
        <Stack sx={style}>  
          <Box>
              <Button onClick={handleClose} sx={{position:'absolute', float:'right', paddingLeft:'90%', fontSize: 20, fontWeight:"bold", paddingTop:0, height:25 }}>X</Button>
              <Typography id="modal-modal-title" variant="h6" component="h2">
                {design.name}
              </Typography>
              <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                {design.description}
              </Typography>
              <ImageList sx={{ width:'auto', height:'auto', marginLeft: 5, marginRight: 5, pt:3 }} cols={2} rowHeight={200}>
                {gallery.map((item:BulletPoints) => (
                  <ImageListItem key={item.detail} sx={{minWidth:100, marginLeft:1, marginRight:1}}>
                    <Image
                      src={`${item.detail}`}
                      alt={item.title}
                      width={200}
                      height={150}
                      style={{
                        width:"100%",
                        height:"100%",
                        minWidth: 200,
                        minHeight:150,
                        objectFit: "cover",
                        cursor: "pointer",
                      }}
                      priority={true}
                    />
                    <ImageListItemBar
                      title={item.title}
                      position="bottom"
                      sx={{ textAlign:"left", cursor:"pointer"}}
                      />
                  </ImageListItem>
                  ))}
              </ImageList>
          </Box>
          <Box sx={{pt:3}}>
            <Typography>Budgeting for upfront costs</Typography>
          </Box>
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
  width: 800,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  // boxShadow: 24,
  p: 2,
};

export default Popup;
