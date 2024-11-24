import {Box, Button, Stack, Typography} from "@mui/material";
import Footer from "@/components/Footer";
import CheckIcon from '@mui/icons-material/Check';

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
        
    <Footer />
    </Box>
  )
}