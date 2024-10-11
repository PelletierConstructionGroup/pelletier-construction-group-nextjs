import React, { useState, useEffect, useRef } from "react";
import { Box, Button, Typography, Fade } from "@mui/material";

const Carousel: React.FC = () => {
  const [slideIndex, setSlideIndex] = useState<number>(0);
  const [fade, setFade] = useState<boolean>(true);
  const slides: string[] = ["Slide 1", "Slide 2", "Slide 3"];

  const showSlide = (n: number) => {
    setFade(false);
    setTimeout(() => {
      setSlideIndex(
        (prevIndex) => (prevIndex + n + slides.length) % slides.length
      );
      setFade(true);
    }, 500); // Time to wait before switching slides (matches the fade transition)
  };

  useEffect(() => {
    const interval = setInterval(() => {
      showSlide(1);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      minHeight="100vh"
    >
      <Fade in={fade} timeout={500}>
        <Box
          sx={{
            width: 300,
            height: 200,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: "grey.300",
            borderRadius: 2,
            mb: 2,
          }}
        >
          <Typography variant="h5">{slides[slideIndex]}</Typography>
        </Box>
      </Fade>
      <Box display="flex" justifyContent="space-between" width={200}>
        <Button variant="contained" onClick={() => showSlide(-1)}>
          ❮ Previous
        </Button>
        <Button variant="contained" onClick={() => showSlide(1)}>
          Next ❯
        </Button>
      </Box>
    </Box>
  );
};

export default Carousel;
