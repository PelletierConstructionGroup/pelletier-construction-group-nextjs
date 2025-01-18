import type React from "react";
import { Box, Typography } from "@mui/material";
import Image from "next/image";

interface HeroBannerProps {
  imageSrc: string;
  altText?: string;
  overlayColor?: string;
  height?: number | string;
  children?: React.ReactNode;
}

const Hero: React.FC<HeroBannerProps> = ({
  imageSrc,
  altText = "",
  overlayColor = "rgba(0, 0, 0, 0.4)",
  height = 520,
  children
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
      {/* Overlay */}
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
        {children}
      </Box>

      {/* Background Image */}
      <Image
        src={imageSrc}
        alt={altText}
        style={{
          width: "100%",
          height: "auto",
          maxHeight: "100%",
          objectFit: "cover",
          objectPosition: "center",
        }}
        priority
      />
    </Box>
  );
};

export default Hero;