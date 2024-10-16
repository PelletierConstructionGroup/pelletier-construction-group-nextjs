import {Box, Button, Card, CardActions, CardContent, Stack, Typography} from "@mui/material";
import Footer from '../components/Footer';
import Link from "next/link";
import Image from "next/image";
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import { Brightness2 } from "@mui/icons-material";


export default function Home() {

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: "100vh", backgroundColor: "white", color: "black" }}>
    <Stack>
      <Box margin="auto" textAlign={"center"} justifyContent={"center"} sx={{ paddingTop: "120px", backgroundColor:"white" }}>
        <Typography component="h1" variant="h4" sx={{ pb: 4 }}>
          Seattle&apos;s Premier DADU Specialists
        </Typography>
        <Typography>
          <Link href="tel:+19078417274" passHref>
            <Box component="a" sx={{ color: "inherit", textDecoration: "none", "&:hover": { textDecoration: "underline" } }}>
              (907) 841-7274
            </Box>
          </Link>
        </Typography>
        <Typography>
          <Link href="mailto:ryan@pelletier.construction" passHref>
            <Box component="a" sx={{ color: "inherit", textDecoration: "none", "&:hover": { textDecoration: "underline" } }}>
              ryan@pelletier.construction
            </Box>
          </Link>
        </Typography>
        <Button variant="contained" color="primary" href="/contact" sx={{ mt: 3, fontSize: "1.2rem", width: "200px", height: "50px" }}>
          Contact Us
        </Button>
      </Box>
    </Stack>
    <Card sx={{ height: 362.359, filter:'brightness(80%)', backgroundImage: "url('/images/index/background_inner.jpg')", backgroundPosition:'center', marginTop: 5 }}>
      <CardContent sx={{alignContent: "center"}}>
        <Typography color="white" component="h1" fontSize="36px" sx={{ pb: 2, textAlign: "center", marginTop:2, }}>EXPERIENCE MATTERS.</Typography>
        <Typography color="white" variant="body1" fontSize="22px" sx={{ pb: 4, textAlign: "center", marginLeft:"10%", marginRight:"10%" }}>
        We specialize in all aspects of home remodeling and improvements. Bathrooms, kitchens, decks, fences, sheds, finishing basements, and most other home improvements or repairs. Our goal is the provide the best customer experience and satisfaction in the industry. Give us a call for a free estimate.
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <Button variant="contained" color="primary" href="/contact" sx={{ fontSize: "1.2rem", width: "300px", height: "50px", textAlign: "center", marginLeft:"auto", marginRight:"auto" }}>
        GET A FREE ESTIMATE
        </Button>
      </CardActions>
    </Card>   
    </Stack>
    <Typography component="h1" variant="h4" sx={{ pb: 5, textAlign:'center', mt:3 }}>EXQUISITE CRAFTSMANSHIP & CARPENTRY</Typography>
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
          />
        </ImageListItem>
      ))}
    </ImageList>
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
