import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  Typography,
  Container,
} from "@mui/material";
import Footer from "../components/Footer";
import Image from "next/image";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import ImageListItemBar from "@mui/material/ImageListItemBar";
import mainConst from "./mainConst.json";
import Hero from "../components/Hero";

export default function Home() {
  const { textContent, photoData } = mainConst;
  const heroImage = "/images/familys-historic-home.jpg";

  return (
    <>
      <Hero imageSrc={heroImage} altText={textContent.title}>
        <Typography component="h1" variant="h4" sx={{ py: 2 }}>
          {textContent.title}
        </Typography>
        <br />
        <Typography>
          <Box
            component="a"
            href={textContent.phoneNumber}
            sx={{
              color: "inherit",
              textDecoration: "none",
              "&:hover": { textDecoration: "underline" },
            }}
          >
            {textContent.phoneNumberFormatted}
          </Box>
        </Typography>
        <Typography>
          <Box
            component="a"
            href={`mailto:${textContent.email}`}
            sx={{
              color: "inherit",
              textDecoration: "none",
              "&:hover": { textDecoration: "underline" },
            }}
          >
            {textContent.email}
          </Box>
        </Typography>
        <Button
          variant="contained"
          color="primary"
          href="/contact"
          sx={{ mt: 3, fontSize: "1.2rem", width: "200px", height: "50px" }}
        >
          {textContent.contactButton}
        </Button>
      </Hero>

      <Typography
        component="h1"
        variant="h4"
        sx={{ pb: 5, textAlign: "center", mt: 3 }}
      >
        {textContent.craftsmanshipTitle}
      </Typography>
      <ImageList
        sx={{ width: "auto", height: "auto", marginLeft: 5, marginRight: 5 }}
        cols={3}
        rowHeight={330}
      >
        {photoData.map((item) => (
          <ImageListItem
            key={item.img}
            sx={{ minWidth: 248, marginLeft: 1, marginRight: 1 }}
          >
            <Image
              src={item.img}
              alt={item.title}
              width={330}
              height={330}
              style={{
                width: "100%",
                height: "100%",
                minWidth: 248,
                minHeight: 248,
                objectFit: "cover",
              }}
              priority={true}
            />
            <ImageListItemBar title={item.title} position="below" />
          </ImageListItem>
        ))}
      </ImageList>
      <Card
        sx={{
          height: 362.359,
          backgroundImage: "url('/images/index/background_inner.jpg')",
          backgroundPosition: "center",
          backgroundColor: "rgba(0,0,0,0.4)",
          marginTop: 5,
        }}
      >
        <CardContent sx={{ alignContent: "center" }}>
          <Typography
            color="white"
            component="h1"
            fontSize="36px"
            sx={{ pb: 2, textAlign: "center", marginTop: 2 }}
          >
            {textContent.experienceTitle}
          </Typography>
          <Typography
            color="white"
            variant="body1"
            fontSize="22px"
            sx={{
              pb: 4,
              textAlign: "center",
              marginLeft: "10%",
              marginRight: "10%",
            }}
          >
            {textContent.experienceDescription}
          </Typography>
        </CardContent>
        <CardActions disableSpacing>
          <Button
            variant="contained"
            color="primary"
            href="/estimates"
            sx={{
              fontSize: "1.2rem",
              width: "300px",
              height: "50px",
              textAlign: "center",
              marginLeft: "auto",
              marginRight: "auto",
            }}
          >
            {textContent.estimateButton}
          </Button>
        </CardActions>
      </Card>
      <Footer />
    </>
  );
}
