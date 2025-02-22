import React, { useState } from "react";
import { Box, Typography, Fade, Button} from "@mui/material";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import Image from "next/image";
import LinearProgress from "@mui/material/LinearProgress";

interface SliderProps {
  directory: string
  count: number
}

const ImageSlider: React.FC<SliderProps> = ({ directory, count }) => {
  const [slideIndex, setSlideIndex] = useState<number>(1);
  const [fade, setFade] = useState<boolean>(true);

  const showSlide = (n: number) => {
    setFade(false);
    setTimeout(() => {
      setSlideIndex(
        (prevIndex) => ((prevIndex + n) % count) 
      );
      setFade(true);
    }, 0);
  };

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
              width: 600,
              height: 450,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "#666",
            }}
          >
            <Image 
              src={`${directory}`+"/"+`${slideIndex}`+".jpeg"}
              alt={`${slideIndex}`}
              width={400}
              height={450}
              style={{
                width:"auto",
                height:"100%",
                minWidth: 248,
                minHeight:248,
                maxHeight: 450,
                objectFit: "cover",
                cursor: "pointer",
                }}
              priority={true}
              >
            </Image>
          </Box>
        </Fade>
        <Button aria-label="Next" onClick={() => showSlide(1)}>
          <ArrowForwardIosIcon />
        </Button>
      </Box>
      <Box sx={{ flex: 1, pt: 2, width:"60%"}}>
          <LinearProgress variant="determinate" value={Math.round((slideIndex+1)/count*100)}/>
      </Box>
    </Box>
  );
};

export default ImageSlider;
