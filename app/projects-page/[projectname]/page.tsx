"use client";
import { Box, Stack, Typography } from "@mui/material";
import Footer from "@/components/Footer";
import { usePathname } from "next/navigation";
import ImageSlider from "@/components/ImageSlider";

export default function Project() {
  const name = usePathname().toString();
  const projectList = require('@/app/projects-page/projects.json')
  var project: {title: string, link: string, description: string, photodir: string, photocount: number} = {title: "", link: "", description:"", photodir:"", photocount:0}
  projectList.map((item: {title: string, link: string, description: string, photodir: string, photocount: number}) => {
    if(item.link === name) {
      project = item
    }else {
    }
  })

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: "100vh", maximumWidth: "100vw", backgroundColor: "white", color: "black" }}>
      <Stack>
        <Box margin="auto" textAlign={"center"} justifyContent={"center"} sx={{ width: "100%", paddingTop: "120px", backgroundColor:"white" }}>
          <Typography component="h4" variant="h4" fontWeight="650" sx={{ pb: 2 }}>
              {project.title}
          </Typography>
          <Typography component="p" variant="body1" sx={{ pb: 2 }}>
             {project.description}
          </Typography>
        </Box>
        <ImageSlider directory={project.photodir} count={project.photocount}/>
      </Stack>    
      <Footer />
    </Box>
  );
}

