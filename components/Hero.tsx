import type React from "react";
import { Box, Container, SxProps, Theme } from "@mui/material";
import Image from "next/image";

interface HeroBannerProps {
  imageSrc: string;
  altText?: string;
  overlayColor?: string;
  height?: number | string;
  fontSize?: number | string;
  textColor?: string; // New optional prop for text color
  children?: React.ReactNode;
  sx?: SxProps<Theme>;
}

const Hero: React.FC<HeroBannerProps> = ({
  imageSrc,
  altText = "",
  overlayColor = "rgba(0, 0, 0, 0.7)",
  height = 520,
  fontSize = "3rem",
  textColor = "#fff", // Default to white text - improving contrast
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
          background: `linear-gradient(${overlayColor}, ${overlayColor})`,
        }}
      >
        <Container
          sx={{
            color: textColor,
            textAlign: "center",
            fontSize,
            textShadow: "0 2px 6px rgba(0,0,0,0.5)", // Adds shadow behind the text 0.5 opacity
            zIndex: 3,
          }}
        >
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
          zIndex: 1,
        }}
      />
    </Box>
  );
};

export default Hero;
