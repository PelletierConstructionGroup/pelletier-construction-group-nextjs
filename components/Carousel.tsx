import React, { useState, useEffect, useCallback } from "react";
import { Box, Typography, Fade, Button } from "@mui/material";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import StarIcon from "@mui/icons-material/Star";

interface CarouselProps {
  slides: React.ReactNode[];
  visibility: "visible" | "hidden";
  timer: number;
}

const Carousel: React.FC<CarouselProps> = ({ slides, visibility, timer }) => {
  const [slideIndex, setSlideIndex] = useState<number>(0);
  const [fade, setFade] = useState<boolean>(true);

  const showSlide = useCallback(
    (n: number) => {
      setFade(false);
      setTimeout(() => {
        setSlideIndex(
          (prevIndex) => (prevIndex + n + slides.length) % slides.length
        );
        setFade(true);
      }, 0);
    },
    [slides.length]
  );

  useEffect(() => {
    const interval = setInterval(() => {
      showSlide(1);
    }, timer * 1000);

    return () => clearInterval(interval);
  }, [showSlide, timer]);

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        marginInline: { xs: 2, md: "10em" },
        minHeight: "520px",
        height: "auto",
        paddingY: 4,
      }}
    >
      <Box
        sx={{
          visibility: visibility, // Use the visibility prop here
          color: "#ffbe28",
          paddingBottom: 2,
        }}
      >
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
