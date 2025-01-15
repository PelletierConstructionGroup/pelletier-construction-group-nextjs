import { Box, Button, Stack, Typography } from "@mui/material";
import Footer from "@/components/Footer";
import Image from "next/image";
// i think the banner photo is a little bit bigger and it should be replaced once we get the actual photo
import image from "@/public/images/projects/great-wall-of-lake-city/2.jpeg";

export default async function Project({params}: {params: {projectname: string}}) {

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: "100vh", maximumWidth: "100vw", backgroundColor: "white", color: "black" }}>
        <Typography sx={{paddingTop: 50}}>
            {params.projectname}
        </Typography>
        
    </Box>
  );
}
