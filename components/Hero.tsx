import type React from "react";
import { Box, Typography, Container, SxProps, Theme } from "@mui/material";
import Image from "next/image";

interface HeroBannerProps {
  imageSrc: string;
  altText?: string;
  overlayColor?: string;
  height?: number | string;   // Optional: Custom height for the hero banner
  fontSize?: number | string; // Optional: Custom font size for the text
  children?: React.ReactNode;
  sx?: SxProps<Theme>;
}

const Hero: React.FC<HeroBannerProps> = ({
  imageSrc,
  altText = "",
  overlayColor = "rgba(0, 0, 0, 0.4)",
  height = 520,
  fontSize = "3rem",
  children,
}) => {
  return (
    <Box
      sx={{
        position: "relative",
        width: "100%",
        height,
        overflow: "hidden",
      }}
    >
      {/* Overlay with Typography */}
      <Box
        sx={{
          position: "absolute",
          inset: 0,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          zIndex: 2,
          backgroundColor: overlayColor,
        }}
      >
        <Container
          sx={{
            color: "white",
            textAlign: "center",
            fontSize,
          }}>
          {children}
          </Container>
      </Box>

      {/* Background Image */}
      <Image
        src={imageSrc}
        alt={altText}
        fill
        priority
        style={{
          objectFit: "cover",
          objectPosition: "center",
        }}
      />
    </Box>
  );
};

export default Hero;
