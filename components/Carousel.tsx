import React, { useState, useEffect } from "react";
import { Box, Typography, Fade, Button } from "@mui/material";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import StarIcon from "@mui/icons-material/Star";

// Define props interface for the Carousel component
interface CarouselProps {
  slides: React.ReactNode[]; // Accepts an array of React nodes as slides
}

const Carousel: React.FC<CarouselProps> = ({ slides }) => {
  const [slideIndex, setSlideIndex] = useState<number>(0);
  const [fade, setFade] = useState<boolean>(true);

  const showSlide = (n: number) => {
    setFade(false);
    setTimeout(() => {
      setSlideIndex(
        (prevIndex) => (prevIndex + n + slides.length) % slides.length
      );
      setFade(true);
    }, 0);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      showSlide(1);
    }, 5000);

    return () => clearInterval(interval);
  }, [slides.length]);

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        marginInline: "10em",
        height: "520px",
      }}
    >
      <Box color="#ffbe28" paddingBottom={2}>
        <StarIcon fontSize="large" />
        <StarIcon fontSize="large" />
        <StarIcon fontSize="large" />
        <StarIcon fontSize="large" />
        <StarIcon fontSize="large" />
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          width: "auto",
        }}
      >
        <Button aria-label="Previous" onClick={() => showSlide(-1)}>
          <ArrowBackIosNewIcon />
        </Button>
        <Fade in={fade} timeout={500}>
          <Box
            sx={{
              width: "100%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "#666",
            }}
          >
            <Typography variant="h5" sx={{ fontStyle: "italic" }}>
              {slides[slideIndex]}
            </Typography>
          </Box>
        </Fade>
        <Button aria-label="Next" onClick={() => showSlide(1)}>
          <ArrowForwardIosIcon />
        </Button>
      </Box>
    </Box>
  );
};

export default Carousel;
