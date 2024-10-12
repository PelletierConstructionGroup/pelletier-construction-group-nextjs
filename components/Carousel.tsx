import React, { useState, useEffect } from "react";
import { Box, Typography, Fade, Button } from "@mui/material";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import StarIcon from "@mui/icons-material/Star";

interface CarouselProps {
  slides: React.ReactNode[];
}

const Carousel: React.FC<CarouselProps> = ({ slides }) => {
  const [slideIndex, setSlideIndex] = useState<number>(0);
  // State to control the fade transition effect
  const [fade, setFade] = useState<boolean>(true);

  // Function to change the slide and trigger a fade transition
  const showSlide = (n: number) => {
    setFade(false);
    setTimeout(() => {
      setSlideIndex(
        (prevIndex) => (prevIndex + n + slides.length) % slides.length
      );
      setFade(true);
    }, 0); // Timeout is 0 to allow the fade out before the new slide shows
  };

  // Automatically change slides every x seconds
  useEffect(() => {
    const interval = setInterval(() => {
      showSlide(1);
    }, 5000); // Change slide every 5000 milliseconds (5 seconds)

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
      {/* Display a row of star icons as a rating indicator */}
      <Box color="#ffbe28" paddingBottom={2}>
        <StarIcon fontSize="large" />
        <StarIcon fontSize="large" />
        <StarIcon fontSize="large" />
        <StarIcon fontSize="large" />
        <StarIcon fontSize="large" />
      </Box>

      {/* Container for slide navigation and content */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          width: "auto",
        }}
      >
        {/* Button to navigate to the previous slide */}
        <Button aria-label="Previous" onClick={() => showSlide(-1)}>
          <ArrowBackIosNewIcon />
        </Button>

        {/* Fade transition for the slide content */}
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
            {/* Display the current slide content */}
            <Typography variant="h5" sx={{ fontStyle: "italic" }}>
              {slides[slideIndex]}
            </Typography>
          </Box>
        </Fade>

        {/* Button to navigate to the next slide */}
        <Button aria-label="Next" onClick={() => showSlide(1)}>
          <ArrowForwardIosIcon />
        </Button>
      </Box>
    </Box>
  );
};

export default Carousel;
