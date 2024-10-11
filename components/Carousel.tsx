import React, { useState, useEffect, useRef } from "react";
import { Box, Button, Typography, Fade } from "@mui/material";

const Carousel: React.FC = () => {
  const [slideIndex, setSlideIndex] = useState<number>(0);
  const [fade, setFade] = useState<boolean>(true);
  const slides: string[] = ["Slide 1", "Slide 2"];

  slides[0] =
    "Pelletier Construction Group did an incredible job helping with our kitchen remodel and I'm already looking forward to working with them again in the future. Ryan was incredibly responsive every time we had a question, all the way from the early stages of us buying materials to the end of the project. Along with Ryan, his crew was incredibly thorough, kind, and FAST. We couldn't believe how quickly this project got done. In addition to quick and high quality work, we found him to be affordable and significantly less than other quotes we received. At first that worried me, thinking maybe they were too good to be true, but Ryan is just a good-hearted person with a high bar for quality work...";

  slides[1] =
    "I am so grateful to have found Ryan! He has been helping me build out my business and has worked with me while I searched for the right location. Ryan is incredibly responsive and is a clear and kind communicator. He gave me quotes in a very reasonable amount of time, did thorough surveying of each space we looked at, and gave me lots of options for the work I needed done! He took time to answer complicated questions thoughtfully and never acted like my potentially silly questions were weird. His prices are super fair, and he does a great job helping you get your needs met at a price that works for you. As a small business this is essential. The timeliness has been so impressive...";

  const showSlide = (n: number) => {
    setFade(false);
    setTimeout(() => {
      setSlideIndex(
        (prevIndex) => (prevIndex + n + slides.length) % slides.length
      );
      setFade(true);
    }, 0); // Time to wait before switching slides (matches the fade transition)
  };

  useEffect(() => {
    const interval = setInterval(() => {
      showSlide(1);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      //minHeight="100vh"
    >
      <Fade in={fade} timeout={500}>
        <Box
          sx={{
            width: "auto",
            height: "520px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",

            color: "black",
          }}
        >
          <Typography variant="h5">{slides[slideIndex]}</Typography>
        </Box>
      </Fade>
      <Box display="flex" justifyContent="space-between" width={200}>
        <Button onClick={() => showSlide(-1)}>❮</Button>
        <Button onClick={() => showSlide(1)}>❯</Button>
      </Box>
    </Box>
  );
};

export default Carousel;
