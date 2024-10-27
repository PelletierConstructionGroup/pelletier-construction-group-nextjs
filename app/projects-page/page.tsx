import {Box, Stack, Typography} from "@mui/material";
import Footer from "@/components/Footer";
import Link from "next/link";
import Image from "next/image";
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';

export default function Home() {

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
            }}
            priority={true}
          />
          <ImageListItemBar
            title={item.title}
            position="below"
            sx={{ textAlign:"left"}}
          />
        </ImageListItem>
      ))}
      </ImageList>
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

const itemData = [
  {
    img: '/images/index/open-concept-kitchen.jpg',
    title: 'Open Concept Kitchen',
  },
  {
    img: '/images/index/mukilteo_house.jpg',
    title: 'Mukilteo House',
  },
  {
    img: '/images/index/wrap-around-deck-with-patio-cover.jpg',
    title: 'Wrap around deck with patio cover',
  },
  {
    img: '/images/index/ranch_home_update.jpg',
    title: 'Ranch Home Update',
  },
  {
    img: '/images/index/timber_frame_barn.jpg',
    title: 'Timber Frame Barn',
  },
  {
    img: '/images/index/composite-deck.jpg',
    title: 'Composite Deck',
  },
  {
    img: '/images/index/great_wall_of_lake_city.jpg',
    title: 'Great Wall of Lake City',
  },
  {
    img: '/images/index/bathroom_expansion.jpg',
    title: 'Bathroom Expansion',
  },
  {
    img: '/images/index/railing.jpg',
    title: 'Railing',
  },
  {
    img: '/images/index/bathroom.jpg',
    title: 'Bathroom',
  },
  {
    img: '/images/index/modern-porch.jpg',
    title: 'Modern Porch',
  },
  {
    img: '/images/index/new-shop.jpg',
    title: 'New Shop',
  },
];    
