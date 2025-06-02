import { Box, Button, Stack, Typography } from "@mui/material";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Link from "next/link";
import ResponsiveFormEmbed from "@/components/ResponsiveFormEmbed";

export default function Home() {
  const heroText = "Request an Estimate!";
  const heroImage = "/images/familys-historic-home.jpg";

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
        <Hero
          imageSrc={heroImage}
          altText={heroText}
          overlayColor="rgba(0, 0, 0, 0.7)"
        >
          <Typography variant="h2" sx={{ fontSize: "3rem" }}>
            {heroText}
          </Typography>
        </Hero>

        <Box
          margin="auto"
          textAlign={"center"}
          justifyContent={"center"}
          sx={{ paddingTop: "120px", width: "100%", backgroundColor: "white" }}
        >
          <Typography component="h1" variant="h4" sx={{ pb: 4 }}>
            Estimates
          </Typography>
          <ResponsiveFormEmbed title="Get in Touch" />
        </Box>
      </Stack>
      <Footer />
    </Box>
  );
}
