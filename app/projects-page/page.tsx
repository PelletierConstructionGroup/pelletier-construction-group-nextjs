'use client'
import {Box, Stack, Typography} from "@mui/material";
import Footer from "@/components/Footer";
import Image from "next/image";
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import { useRouter } from "next/navigation";
//newly added
import ResponsiveFormEmbed from "@/components/ResponsiveFormEmbed";
export default function Home() {
  const router = useRouter()

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: "100vh", maximumWidth: "100vw", backgroundColor: "white", color: "black" }}>
    <Stack>
      <Box margin="auto" textAlign={"center"} justifyContent={"center"} sx={{ width: "100%", paddingTop: "120px", backgroundColor:"white" }}>
      <Typography component="h1" variant="h4" sx={{ pb: 4 }}>
          OUR BUILDS
      </Typography>
      <ImageList sx={{ width:'auto', height:'auto', marginLeft: 5, marginRight: 5 }} cols={3} rowHeight={330}>
      {itemData.map((item) => (
        <ImageListItem key={item.img} sx={{minWidth:248, marginLeft:1, marginRight:1}}>
          <Image
            src={`${item.img}`}
            alt={item.title}
            width={330}
            height={330}
            style={{
              width:"100%",
              height:"100%",
              minWidth: 248,
              minHeight:248,
              objectFit: "cover",
              cursor: "pointer",
            }}
            priority={true}
            onClick={()=> router.push(`/projects-page/${item.link}`)}
          />
          <ImageListItemBar
            title={item.title}
            position="below"
            sx={{ textAlign:"left", cursor:"pointer"}}
            onClick={()=> router.push(`/projects-page/${item.link}`)}
            />
        </ImageListItem>
      ))}
      </ImageList>
        <ResponsiveFormEmbed title="Get in Touch" />
      </Box>
    </Stack>    
    <Footer />
    </Box>
  )
}

const itemData = [
  {
    img: '/images/index/open-concept-kitchen.jpg',
    title: 'Open Concept Kitchen',
    link: 'open_concept_kitchen',
  },
  {
    img: '/images/index/mukilteo_house.jpg',
    title: '4300 SF Home Remodel',
    link: 'mukilteo_house',
  },
  {
    img: '/images/index/wrap-around-deck-with-patio-cover.jpg',
    title: 'Wrap around deck with patio cover',
    link: 'wrap_around_deck',
  },
  {
    img: '/images/index/ranch_home_update.jpg',
    title: 'Ranch Home Update',
    link: 'ranch_home_update',
  },
  {
    img: '/images/index/timber_frame_barn.jpg',
    title: 'Timber Frame Barn',
    link: 'timber_frame_barn',
  },
  {
    img: '/images/index/bathroom_expansion.jpg',
    title: 'Bathroom Expansion',
    link: 'bathroom_expansion',
  },
  {
    img: '/images/index/great_wall_of_lake_city.jpg',
    title: 'Great Wall of Lake City',
    link: 'great_wall_of_lake_city',
  },
  {
    img: '/images/index/composite-deck.jpg',
    title: 'Composite Deck',
    link: 'composite_deck',
  },
  {
    img: '/images/index/bathroom.jpg',
    title: 'Bathroom',
    link: 'bathroom',
  },
];    
