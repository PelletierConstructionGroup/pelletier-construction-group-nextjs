import {Box, Button, Stack, Typography} from "@mui/material";
import Footer from "@/components/Footer";
import CheckIcon from '@mui/icons-material/Check';
import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';

interface Design {
  name: string;
  img: string;
  description: string;
  sqft: string;
  bed: string;
  bath: string;
}

export default function DADU() {

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: "100vh", maximumWidth: "100vw", backgroundColor: "white", color: "black" }}>
    <Stack>
      <Box margin="auto" textAlign={"center"} justifyContent={"center"} sx={{ width: "100%", paddingTop: "120px", backgroundColor:"white" }}>
        <Typography variant="h4" sx={{ pb: 4 }} textAlign={"center"}>
          Pre-approved DADU Designs (sample)
        </Typography>
      </Box>
      <Box 
        margin="auto" 
        sx={{
            maxWidth: "80%", 
            mb:0,
            textAlign: "left"
            }}> 
        <Typography component="p" variant="h6" sx={{ color: "black", display:"inline" }}>
            To simplify and streamline permitting, the City of Seattle developed pre-approved DADU construction plans that offer a 
        </Typography>
        <Typography component="p" variant="h6" color="primary" sx={{ display:"inline"}}>
            &nbsp;faster, easier, and more predictable 
        </Typography>
        <Typography component="p" variant="h6" sx={{ color: "black", display:"inline" }}>
            &nbsp;design and permitting process.
        </Typography>
        <br></br>
        <CheckIcon sx={{font:'large', textAlign:'left' }}/>
        <Typography component="h6" variant="h6" sx={{ color: "black", display:"inline", textAlign:'left'}}>
            &nbsp;Browse the gallery
        </Typography>
        <Typography component="p" variant="body1" sx={{ color: "black", textAlign:'left', mb:"0" }}>
            Explore the catalog of pre-approved DADU plans that vary in size, type, and style. Review the images and details for each design to find one suitable for your needs and site.
        </Typography>
        <CheckIcon sx={{font:'large', textAlign:'left' }}/>
        <Typography component="h6" variant="h6" sx={{ color: "black", display:"inline", textAlign:'left' }}>
            &nbsp;Select a design
        </Typography>
        <Typography component="p" variant="body1" sx={{ color: "black", textAlign:'left', mb:"0" }}>
        Once you choose a plan, connect with its designer through the contact information below. The designer can guide you through the permitting process, describe other services they offer, and share the fee to use their design.
        </Typography>
        <CheckIcon sx={{font:'large', textAlign:'left' }}/>
        <Typography component="h6" variant="h6" sx={{ color: "black", display:"inline", textAlign:'left' }}>
            &nbsp;Let us help you from here
        </Typography>
      </Box>
      <Box textAlign="center" sx={{mb:2}}>
        <Button variant="contained" color="primary" href="/contact" sx={{ mt:0, fontSize: "1.2rem", width: "200px", height: "50px"}}>
            Contact Us
        </Button>
      </Box>
    </Stack>
    <Stack margin="auto" spacing={{ xs: 1, sm: 2, md:3 }} direction="row" useFlexGap sx={{ flexWrap: 'wrap', maxWidth:"80%" }}>
      {gallery.map((design)=> (
        <Card sx={{ maxWidth: 345 }}>
        <CardMedia
          component="img"
          alt={design.name}
          height="140"
          image={design.img}
          sx={{minWidth:'40px'}}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {design.name}
          </Typography>
          <Typography variant="body2" sx={{ color: 'text.secondary' }}>
            {design.description}
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">More details</Button>
        </CardActions>
      </Card>
      ))}
    </Stack>
    <Footer />
    </Box>
  )
}

const gallery: Design[] = [
  {
    name: 'CAST Architecture',
    img: '/images/index/timber_frame_barn.jpg',
    description: 'At only 467 square feet of interior floor area, the Cedar Cottage is an extremely efficient footprint that provides well daylit space for living, necessary storage, flexibility on many sites, including sloped ones, covered outdoor porch space plus easy expandability for families or roommates as a two-bedroom model.',
    sqft: '467',
    bed: '1-2',
    bath: '1',
  },
  {
    name: 'CAST Architecture',
    img: '/images/index/timber_frame_barn.jpg',
    description: 'At only 467 square feet of interior floor area, the Cedar Cottage is an extremely efficient footprint that provides well daylit space for living, necessary storage, flexibility on many sites, including sloped ones, covered outdoor porch space plus easy expandability for families or roommates as a two-bedroom model.',
    sqft: '467',
    bed: '1-2',
    bath: '1',
  },
  {
    name: 'CAST Architecture',
    img: '/images/index/timber_frame_barn.jpg',
    description: 'At only 467 square feet of interior floor area, the Cedar Cottage is an extremely efficient footprint that provides well daylit space for living, necessary storage, flexibility on many sites, including sloped ones, covered outdoor porch space plus easy expandability for families or roommates as a two-bedroom model.',
    sqft: '467',
    bed: '1-2',
    bath: '1',
  },
];