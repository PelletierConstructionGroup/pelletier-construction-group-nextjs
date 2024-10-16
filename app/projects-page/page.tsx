import {Box, Stack, Typography} from "@mui/material";
import Footer from "@/components/Footer";
import Link from "next/link";

export default function Home() {

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: "100vh", maximumWidth: "100vw", backgroundColor: "white", color: "black" }}>
    <Stack>
      <Box margin="auto" textAlign={"center"} justifyContent={"center"} sx={{ width: "100%", paddingTop: "120px", backgroundColor:"white" }}>
      <Typography component="h1" variant="h4" sx={{ pb: 4 }}>
          Our Builds
        </Typography>
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