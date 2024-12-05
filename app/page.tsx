"use client";

import { Box, Button, Card, CardActions, CardContent, Stack, Typography } from "@mui/material";
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import Footer from '../components/Footer';
import Link from "next/link";
import Image from "next/image";
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';

export default function Home() {
  // Define responsive breakpoints for column count
  const theme = useTheme();
  const isXs = useMediaQuery(theme.breakpoints.down('sm'));
  const isSm = useMediaQuery(theme.breakpoints.between('sm', 'md'));
  const isMd = useMediaQuery(theme.breakpoints.up('md'));

  // Set dynamic column count based on screen size
  const cols = isXs ? 1 : isSm ? 2 : 3;

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: "100vh", backgroundColor: "white", color: "black" }}>
      <Stack>
        <Box margin="auto" textAlign={"center"} justifyContent={"center"} sx={{ paddingTop: "120px", backgroundColor: "white" }}>
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
      <Typography component="h1" variant="h4" sx={{ pb: 5, textAlign: 'center', mt: 3 }}>EXQUISITE CRAFTSMANSHIP & CARPENTRY</Typography>
      <ImageList
        sx={{
          width: 'auto',
          height: 'auto',
          marginLeft: 5,
          marginRight: 5,
          gap: 16, // Add consistent gaps between items
        }}
        cols={cols} // Responsive column count based on screen size
      >
        {itemData.map((item) => (
          <ImageListItem key={item.img} sx={{ borderRadius: '8px', overflow: 'hidden' }}>
            <Image
              src={`${item.img}`}
              alt={item.title}
              layout="responsive"
              width={300}
              height={200}
              style={{
                objectFit: 'cover', // Crop image to fit the box
                aspectRatio: '3 / 2', // Enforce uniform aspect ratio
                width: '100%',
                height: 'auto',
                borderRadius: '8px',
              }}
              priority={true}
            />
            <ImageListItemBar
              title={item.title}
              position="below"
              sx={{
                textAlign: 'center',
                marginTop: '8px',
              }}
            />
          </ImageListItem>
        ))}
      </ImageList>
      <Card sx={{
        height: 362.359,
        backgroundImage: "url('/images/index/background_inner.jpg')",
        backgroundPosition: 'center',
        backgroundColor: "rgba(0,0,0,0.4)",
        marginTop: 5
      }}>
        <CardContent sx={{ alignContent: "center" }}>
          <Typography color="white" component="h1" fontSize="36px" sx={{ pb: 2, textAlign: "center", marginTop: 2 }}>EXPERIENCE MATTERS.</Typography>
          <Typography color="white" variant="body1" fontSize="22px" sx={{ pb: 4, textAlign: "center", marginLeft: "10%", marginRight: "10%" }}>
            We specialize in all aspects of home remodeling and improvements. Bathrooms, kitchens, decks, fences, sheds, finishing basements, and most other home improvements or repairs. Our goal is to provide the best customer experience and satisfaction in the industry. Give us a call for a free estimate.
          </Typography>
        </CardContent>
        <CardActions disableSpacing>
          <Button variant="contained" color="primary" href="/estimates" sx={{ fontSize: "1.2rem", width: "300px", height: "50px", textAlign: "center", marginLeft: "auto", marginRight: "auto" }}>
            GET A FREE ESTIMATE
          </Button>
        </CardActions>
      </Card>
      <Footer />
    </Box>
  );
}

const itemData = [
  { img: '/images/index/open-concept-kitchen.jpg', title: 'Open Concept Kitchen' },
  { img: '/images/index/mukilteo_house.jpg', title: 'Mukilteo House' },
  { img: '/images/index/wrap-around-deck-with-patio-cover.jpg', title: 'Wrap around deck with patio cover' },
  { img: '/images/index/ranch_home_update.jpg', title: 'Ranch Home Update' },
  { img: '/images/index/timber_frame_barn.jpg', title: 'Timber Frame Barn' },
  { img: '/images/index/composite-deck.jpg', title: 'Composite Deck' },
  { img: '/images/index/great_wall_of_lake_city.jpg', title: 'Great Wall of Lake City' },
  { img: '/images/index/bathroom_expansion.jpg', title: 'Bathroom Expansion' },
  { img: '/images/index/railing.jpg', title: 'Railing' },
  { img: '/images/index/bathroom.jpg', title: 'Bathroom' },
  { img: '/images/index/modern-porch.jpg', title: 'Modern Porch' },
  { img: '/images/index/new-shop.jpg', title: 'New Shop' },
];
