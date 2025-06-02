import { Box, Button, Stack, Typography } from "@mui/material";
import Footer from "@/components/Footer";
import Image from "next/image";
// i think the banner photo is a little bit bigger and it should be replaced once we get the actual photo
import image from "@/public/images/projects/great-wall-of-lake-city/2.jpeg";
import ResponsiveFormEmbed from "@/components/ResponsiveFormEmbed";
import Hero from "@/components/Hero";
export default function Home() {
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
        {/* Header Section with similar image in testimonial page */}
        <Box
          sx={{
            position: "relative",
            height: "520px",
            width: "100%",
            overflow: "hidden",
          }}
        >
          <Hero
            imageSrc="/images/projects/great-wall-of-lake-city/2.jpeg"
            altText="The house from the offer."
          >
            <Typography
              component="h1"
              variant="h4"
              sx={{ pb: 4, color: "white", textAlign: "center" }}
            >
              CONTACT US
            </Typography>

            <Typography sx={{ color: "white", textAlign: "center" }}>
              <Box
                component="a"
                href="tel:+19078417274"
                sx={{
                  color: "inherit",
                  textDecoration: "none",
                  "&:hover": { textDecoration: "underline" },
                }}
              >
                (907)841-7274
              </Box>
            </Typography>

            <Typography sx={{ color: "white", textAlign: "center" }}>
              <Box
                component="a"
                href="mailto:ryan@pelletier.construction"
                sx={{
                  color: "inherit",
                  textDecoration: "none",
                  "&:hover": { textDecoration: "underline" },
                }}
              >
                ryan@pelletier.construction
              </Box>
            </Typography>

            <Button
              variant="contained"
              color="primary"
              href="/contact"
              sx={{
                mt: 3,
                fontSize: "1.2rem",
                width: "200px",
                height: "50px",
                fontWeight: "bold",
              }}
            >
              CALL NOW
            </Button>
          </Hero>

          <Image
            src={image}
            alt="The house from the offer."
            style={{
              width: "100%",
              height: "auto",
              maxHeight: "100%",
              objectFit: "cover",
              objectPosition: "center",
            }}
            priority={true}
          />
        </Box>

        <Box
          margin="auto"
          textAlign={"center"}
          justifyContent={"center"}
          sx={{ width: "100%", paddingTop: "120px", backgroundColor: "white" }}
        >
          <ResponsiveFormEmbed title="Get in Touch" />
        </Box>
      </Stack>
      <Footer />
    </Box>
  );
}
