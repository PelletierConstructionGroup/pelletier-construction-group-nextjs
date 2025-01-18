import {Box, Button, Stack, Typography} from "@mui/material";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Link from "next/link";
import image from "@/public/images/familys-historic-home.jpg";

export default function Home() {

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: "100vh", maximumWidth: "100vw", backgroundColor: "white", color: "black" }}>
    <Stack>
      <Hero imageSrc="{image}" altText="The house from the offer." overlayColor="rgba(0, 0, 0, 0.4)" height={520}>
        <Typography sx={{ color: "white", textAlign: "center", fontSize: "2rem" }}>
          Estimates
        </Typography>
      </Hero>
      <Box margin="auto" textAlign={"center"} justifyContent={"center"} sx={{ paddingTop: "120px", width: "100%", backgroundColor:"white" }}>
      <Typography component="h1" variant="h4" sx={{ pb: 4 }}>
          Estimates
        </Typography>
        <Box margin="auto" sx={{ display: "flex", flexDirection: "column", alignItems: "center", width: "100%", backgroundColor: "rgba(54,54,54,1)" }}>
          <Typography component="h1" variant="h4" sx={{ pb: 4, pt: 4, color: "white" }}>
            Get in Touch
          </Typography>
          <iframe
            src="https://docs.google.com/forms/d/e/1FAIpQLSelwJL2BR_yNzPqrdGUy_s5CZFI6mNpHTv4LQ0IxRYpjwvUVQ/viewform?embedded=true"
            width="700" height="1300"
            title="Estimates Form"
            >Loading…</iframe>
        </Box>
      </Box>
    </Stack>    
    <Footer />
    </Box>
  )
}