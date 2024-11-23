import {Box, Button, Stack, Typography} from "@mui/material";
import Footer from "@/components/Footer";
import Image from "next/image";
import image from "@/public/images/familys-historic-home.jpg";
import Link from "next/link";

export default function Home() {

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: "100vh", maximumWidth: "100vw", backgroundColor: "white", color: "black" }}>
    <Stack>
      {/* header Section with similar image in testimonial page */}
      <Box
        sx={{
          position: "relative",
          height: "520px",
          width: "100%",
          overflow: "hidden",
        }}
      >
        <Box
          sx={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            zIndex: 2, // Ensures that the text is above the image
            backgroundColor: "rgba(0, 0, 0, 0.4)", // 40% opacity overlay
          }}
        >
          <Typography
            sx={{
              color: "white",
              textAlign: "center",
              fontSize: "2rem", // Adjust the size as needed
            }}
          >
           
            {/* placeholder for text over image here */}
            
          </Typography>
        </Box>

        <Image
          src={image}
          alt="The house from the offer."
          style={{
            width: "100%",
            height: "auto",
            maxHeight: "100%",
            objectFit: "cover",
            objectPosition: "center",
          }}
          priority={true}
        />
      </Box>

      <Box margin="auto" textAlign={"center"} justifyContent={"center"} sx={{ width: "100%", paddingTop: "120px", backgroundColor:"white" }}>
      <Typography component="h1" variant="h4" sx={{ pb: 4 }}>
          Contact Us
        </Typography>
        <Typography>
        {/* old */}
          {/* <Link href="tel:+19078417274" passHref>
            <Box component="a" sx={{ color: "inherit", textDecoration: "none", "&:hover": { textDecoration: "underline" } }}>
              (907) 841-7274
            </Box>
          </Link> */}

        {/* updated to */}
        <Box component="a" href="tel:+19078417274" sx={{ color: "inherit", textDecoration: "none", "&:hover": { textDecoration: "underline" } }}> (907)8417274
        </Box>

        </Typography>
        <Typography>
          
          {/* old */}
          {/* <Link href="mailto:ryan@pelletier.construction" passHref>
            <Box component="a" sx={{ color: "inherit", textDecoration: "none", "&:hover": { textDecoration: "underline" } }}>
              ryan@pelletier.construction
            </Box>
          </Link> */}

          {/* updated to */}  
          <Box component="a" href="mailto: ryan@pelletier.construction" sx={{ color: "inherit", textDecoration: "none", "&:hover": { textDecoration: "underline" } }} > ryan@pelletier.construction
          </Box>

        </Typography>
        <Button variant="contained" color="primary" href="/contact" sx={{ mt: 3, mb: 4, fontSize: "1.2rem", width: "200px", height: "50px" }}>
          Call Now
        </Button>
        <Box margin="auto" sx={{ display: "flex", flexDirection: "column", alignItems: "center", width: "100%", backgroundColor: "rgba(54,54,54,1)" }}>
          <Typography component="h1" variant="h4" sx={{ pb: 4, pt: 4, color: "white" }}>
            Get in Touch
          </Typography>
          <iframe
            src="https://docs.google.com/forms/d/e/1FAIpQLSelwJL2BR_yNzPqrdGUy_s5CZFI6mNpHTv4LQ0IxRYpjwvUVQ/viewform?embedded=true"
            width="700" height="1300">Loading…</iframe>
        </Box>
      </Box>
    </Stack>    
    <Footer />
    </Box>
  )
}
