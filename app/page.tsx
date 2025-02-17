"Use Client";
import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  Typography,
  Container,
  Link,
} from "@mui/material";
import { Oswald } from "next/font/google";
import Footer from "../components/Footer";
import Image from "next/image";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import ImageListItemBar from "@mui/material/ImageListItemBar";
import mainConst from "./mainConst.json";
import Hero from "../components/Hero";
const oswald = Oswald({ subsets: ["latin"] });

export default function Home() {
  const { textContent, photoData } = mainConst;
  const heroImage = "/images/index/open-concept-kitchen.jpg";

  return (
    <>
      <Hero imageSrc={heroImage} altText={textContent.title} height="44vh">
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
          {textContent.title}
        </Typography>

        <Typography
          sx={{
            color: "white",
            fontSize: "1.2rem",
            pb: 1,
            "& a:hover": { textDecoration: "underline" },
          }}
        >
          <a href={`tel:${textContent.phoneNumberFormatted}`}>
            {textContent.phoneNumberFormatted}
          </a>
        </Typography>
        <Typography
          sx={{
            color: "white",
            fontSize: "1.2rem",
            pb: 1,
            "& a:hover": { textDecoration: "underline" },
          }}
        >
          <a href={`mailto:${textContent.email}`}>{textContent.email}</a>
        </Typography>

        <Link href="/contact">
          <Button
            variant="contained"
            color="primary"
            sx={{ mt: 3, fontSize: "1.2rem", width: "200px", height: "50px", fontWeight: "bold" }}
          >
            {textContent.contactButton}
          </Button>
        </Link>
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
          backgroundImage:
            "linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url('/images/index/background_inner.jpg')",
          backgroundPosition: "center",
          backgroundSize: "cover",
          padding: 5,
          borderRadius: 0,
        }}
      >
        <CardContent sx={{ alignContent: "center" }}>
          <Typography
            color="white"
            component="h2"
            fontSize="2em"
            className={oswald.className}
            sx={{ py: 2, textAlign: "center" }}
          >
            {textContent.experienceTitle}
          </Typography>
          <Typography
            color="white"
            variant="body1"
            fontSize="1.1em"
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
