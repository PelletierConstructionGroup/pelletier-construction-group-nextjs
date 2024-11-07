import { Box, Stack, Typography } from "@mui/material";
import Footer from "@/components/Footer";

export default function Blueprint() {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: "100vh", maximumWidth: "100vw", backgroundColor: "white", color: "black" }}>
      <Stack>
        <Box margin="auto" textAlign={"center"} justifyContent={"center"} sx={{ width: "100%", paddingTop: "120px", backgroundColor:"white" }}>
          <Typography component="h1" variant="h4" sx={{ pb: 4 }}>
            Blueprint Builder
          </Typography>
        </Box>

        {/* Google Form Embed */}
        <Box margin="auto" sx={{ display: "flex", flexDirection: "column", alignItems: "center", width: "100%", backgroundColor: "rgba(54,54,54,1)" }}>
          <Typography component="h1" variant="h4" sx={{ pb: 4, pt: 4, color: "white" }}>
            Submit Your Blueprint Request
          </Typography>
          <iframe
            title="Blueprint Builder Form"
            src="https://docs.google.com/forms/d/e/1FAIpQLSeZW7-rxC12QP1ksxE6IvnW3zUVM4uoPT-hWWRHcgm0jbvr0Q/viewform?embedded=true"
            width={640}
            height={1000}
            frameBorder={0}
            marginHeight={0}
            marginWidth={0}>
            Loading…
          </iframe>
        </Box>
      </Stack>    
      <Footer />
    </Box>
  );
}
