import { Box, Button, Stack, Typography, Grid } from "@mui/material";
import Footer from '../components/Footer';
import Link from "next/link";

export default function Home() {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        minHeight: "100vh",
        backgroundColor: "white",
        color: "black",
      }}
    >
      <Stack>
        <Box
          sx={{
            textAlign: "center",
            justifyContent: "center",
            backgroundImage: "url('/images/index/img_5978-heic.jpg')", 
            backgroundSize: "cover",
            backgroundPosition: "center",
            padding: "100px 20px",
            color: "white",
          }}
        >
          <Typography component="h1" variant="h3" sx={{ fontWeight: "bold", mb: 2 }}>
            Seattle&apos;s Home Renovation & DADU Specialists
          </Typography>
          <Typography component="div" variant="h6" sx={{ mb: 2 }}>
            (907) 841-7274
          </Typography>
          <Typography component="div" variant="h6" sx={{ mb: 4 }}>
            <Link href="mailto:ryan@pelletier.construction" passHref>
              <Box
                sx={{
                  color: "inherit",
                  textDecoration: "none",
                  "&:hover": { textDecoration: "underline" },
                }}
              >
                ryan@pelletier.construction
              </Box>
            </Link>
          </Typography>
          <Button
            variant="contained"
            color="primary"
            href="/contact"
            sx={{ fontSize: "1.2rem", width: "200px", height: "50px" }}
          >
            Contact Us
          </Button>
        </Box>

        <Box sx={{ backgroundColor: "rgba(255,255,255,1)", padding: "50px 20px" }}>
          <Typography
            component="h2"
            variant="h4"
            sx={{ textAlign: "center", fontWeight: "bold", mb: 4 }}
          >
            Exquisite Craftsmanship & Carpentry
          </Typography>
          <Grid container spacing={3}>
            <Grid item xs={12} md={4}>
              <Box>
                <img
                  src="/images/index/img_5978-heic.jpg"
                  alt="Open Concept Kitchen"
                  style={{ objectFit: "cover", width: "100%", height: "auto" }}
                />
                <Typography variant="body1" sx={{ textAlign: "left", mt: 1 }}>
                  Open Concept Kitchen
                </Typography>
              </Box>
            </Grid>

            <Grid item xs={12} md={4}>
              <Box>
                <img
                  src="/images/index/img_0621-jpeg.jpg"
                  alt="Mukilteo House"
                  style={{ objectFit: "cover", width: "100%", height: "auto" }}
                />
                <Typography variant="body1" sx={{ textAlign: "left", mt: 1 }}>
                  Mukilteo House
                </Typography>
              </Box>
            </Grid>

            <Grid item xs={12} md={4}>
              <Box>
                <img
                  src="/images/index/wrap-around-deck-with-patio-cover.jpg"
                  alt="Wrap Around Deck"
                  style={{ objectFit: "cover", width: "100%", height: "auto" }}
                />
                <Typography variant="body1" sx={{ textAlign: "left", mt: 1 }}>
                  Wrap Around Deck with Patio Cover
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </Box>

        <Box
          sx={{
            backgroundImage: "url('/images/index/img_1382-jpeg.jpg')", 
            backgroundSize: "cover",
            backgroundPosition: "center",
            padding: "80px 20px",
            color: "white",
            textAlign: "center",
            position: "relative",
          }}
        >

          <Box
            sx={{
              backgroundColor: "rgba(0, 0, 0, 0.5)", 
              padding: "20px",
              borderRadius: "8px",
              display: "flex", 
              flexDirection: "column", 
              alignItems: "center", 
              maxWidth: "800px", 
              margin: "0 auto", 
            }}
          >
            <Typography component="h2" variant="h4" sx={{ fontWeight: "bold", mb: 2 }}>
              EXPERIENCE MATTERS
            </Typography>
            <Typography component="p" variant="body1" sx={{ textAlign: "center", mb: 4 }}>
              We specialize in all aspects of home remodeling improvements and construction, including DADUs, bathrooms, kitchens, decks, fences, sheds, basements, and many other home improvements and repairs. Our goal is to provide the absolute best customer experience and satisfaction in the industry. Please give us a call for a free estimate!
            </Typography>
            <Button
              variant="contained"
              color="primary"
              href="/contact"
              sx={{
                fontSize: "1.2rem",
                padding: "10px 30px", 
                width: "250px",
              }}
            >
              Get a Free Estimate!
            </Button>
          </Box>
        </Box>
      </Stack>

      <Footer />
    </Box>
  );
}




