import {Box, Card, CardActions, CardContent, Stack, Typography} from "@mui/material";
import Footer from "@/components/Footer";
import Link from "next/link";
import Image from 'next/image';
import { Oswald } from "next/font/google";
const oswald = Oswald({ subsets: ["latin"] });


export default function Home() {

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: "100vh", maximumWidth: "100vw", backgroundColor: "white", color: "black" }}>
    <Stack>
    <Card
        sx={{
          backgroundPosition: "center",
          backgroundColor: "gray",
          backgroundSize: "cover",
          padding: 0,
          borderRadius: 0,
          height: "44vh",
        }}
      >
        <CardContent sx={{ alignContent: "center", pt:12 }}>
          <Typography
            component="h1"
            sx={{
              py: 4,
              textAlign: "center",
              color: "white",
              fontSize: "2.6rem",
            }}
            className={oswald.className}
          >
            ABOUT US
          </Typography>
          <Typography
            component="h1"
            sx={{
              textAlign: "center",
              color: "white",
              fontSize: "1.2rem",
              pb: 1,
            }}
          >
            DEDICATED TO OUR CLIENTS
          </Typography>
        </CardContent>
      </Card>
      <Box margin="auto" textAlign={"center"} justifyContent={"center"} sx={{ width: "100%", paddingTop: "40px", backgroundColor:"white" }}>
          <Box
            margin="auto"
            sx={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "flex-start", 
              alignItems: "flex-start",
              maxWidth: "80%", 
              gap: 11, 
              mb: 4,
            }}
          >
            <Box sx={{ flexShrink: 0, pl: 2 }}> 
              <Image
                src="/images/Logo small.png"
                alt="Pelletier Construction Group Logo"
                width={100}
                height={100}
              />
            </Box>
            <Box sx={{ textAlign: "left" }}> 
              <Typography component="p" variant="body1" sx={{ color: "black" }}>
                Pelletier Construction Group is dedicated to fine craftsmanship
                and serving its customers. We provide a wide range of high quality
                services in a professional and timely manner. Our goal is to
                satisfy each customer and their specific construction needs for
                ADUs, remodels, new shops, garages, decks and patio covers. If
                your home no longer meets your needs, you don’t have to sell it
                and move. Instead, choose a full house interior remodel. In doing
                so, you can put your personal touch on every area of your home.
                With a full house interior remodel, you’ll be able to customize
                your home to ensure it aligns with your unique lifestyle and
                preferences. If you’d like the home of your dreams without the
                stress and expense of moving, this is an excellent option.
              </Typography>
            </Box>
          </Box>
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