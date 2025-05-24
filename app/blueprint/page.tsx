import { Box, Stack, Typography } from "@mui/material";
import Footer from "@/components/Footer";
import ResponsiveFormEmbed from "@/components/ResponsiveFormEmbed";

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
        <ResponsiveFormEmbed
          title="Submit Your Blueprint Request"
          formUrl="https://docs.google.com/forms/d/e/1FAIpQLSeZW7-rxC12QP1ksxE6IvnW3zUVM4uoPT-hWWRHcgm0jbvr0Q/viewform?embedded=true"
        />
      </Stack>    
      <Footer />
    </Box>
  );
}
