import { Box, Button, Stack, Typography } from "@mui/material";
import Footer from "@/components/Footer";
import Image from "next/image";

export default async function Project({params,}: {params: Promise<{projectname: string}>}) {
  const name = (await params).projectname
  const projectList = require('@/app/projects-page/projects.json')
  var project: {title: string, link: string} = {title: "", link: ""}
  projectList.map((item: {title: string, link: string}) => {
    if(item.link === name) {
      project = item
    }else {
    }
  })

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: "100vh", maximumWidth: "100vw", backgroundColor: "white", color: "black" }}>
      <Stack>
        <Box margin="auto" textAlign={"center"} justifyContent={"center"} sx={{ width: "100%", paddingTop: "120px", backgroundColor:"white" }}>
          <Typography component="h1" variant="h4" sx={{ pb: 4 }}>
              {project.title}
          </Typography>
        </Box>
      </Stack>    
      <Footer />
    </Box>
  );
}

