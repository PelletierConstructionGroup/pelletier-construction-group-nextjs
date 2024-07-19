import {Box, Button, Stack, Typography} from "@mui/material";
import Footer from "@/components/Footer";
import Link from "next/link";

export default function Home() {

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: "100vh", backgroundColor: "white", color: "black" }}>
    <Stack>
      <Box margin="auto" textAlign={"center"} justifyContent={"center"} sx={{ paddingTop: "120px", backgroundColor:"white" }}>
      <Typography component="h1" variant="h4" sx={{ pb: 4 }}>
          Estimates
        </Typography>
      </Box>
    </Stack>    
    <Footer />
    </Box>
  )
}