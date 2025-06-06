import { Box, Stack, Typography } from "@mui/material";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Image from "next/image";
import { Oswald } from "next/font/google";
import ResponsiveFormEmbed from "@/components/ResponsiveFormEmbed";

const oswald = Oswald({ subsets: ["latin"] });

export default function About() {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        minHeight: "100vh",
        maximumWidth: "100vw",
        backgroundColor: "white",
        color: "black",
      }}
    >
      <Stack>
        {/* Use reusable Hero component */}
        <Hero
          imageSrc="/images/index/ranch_home_update.jpg"
          altText="Ranch Home Interior Design"
          overlayColor="rgba(0, 0, 0, 0.7)"
        >
          <Box>
            <Typography
              component="h1"
              sx={{
                py: 2,
                textAlign: "center",
                color: "white",
                fontSize: "2.6rem",
              }}
              className={oswald.className}
            >
              ABOUT US
            </Typography>
            <Typography
              sx={{
                textAlign: "center",
                color: "white",
                fontSize: "1.2rem",
              }}
            >
              DEDICATED TO OUR CLIENTS
            </Typography>
          </Box>
        </Hero>

        <Box
          margin="auto"
          textAlign="center"
          justifyContent="center"
          sx={{ width: "100%", paddingTop: "40px", backgroundColor: "white" }}
        >
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
                and serving its customers. We provide a wide range of high
                quality services in a professional and timely manner...
              </Typography>
            </Box>
          </Box>

          <ResponsiveFormEmbed title="Get in Touch" />
        </Box>
      </Stack>
      <Footer />
    </Box>
  );
}
