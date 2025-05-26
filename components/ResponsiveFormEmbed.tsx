'use client';
import { Box, Typography } from "@mui/material";

type ResponsiveFormEmbedProps = {
  title: string;
  formUrl?: string;
};

export default function ResponsiveFormEmbed({
  title,
  formUrl = "https://docs.google.com/forms/d/e/1FAIpQLSelwJL2BR_yNzPqrdGUy_s5CZFI6mNpHTv4LQ0IxRYpjwvUVQ/viewform?embedded=true",
}: ResponsiveFormEmbedProps) {
  return (
    <Box
      margin="auto"
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        width: "100%",
        backgroundColor: "rgba(54,54,54,1)",
        px: 2,
      }}
    >
      <Typography component="h1" variant="h4" sx={{ pb: 4, pt: 4, color: "white" }}>
        {title}
      </Typography>
      <Box
        sx={{
          position: "relative",
          width: "100%",
          maxWidth: 700,
          paddingTop: "130%", // maintains aspect ratio for responsiveness
        }}
      >
        <iframe
          src={formUrl}
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            border: "none",
          }}
          allowFullScreen
        />
      </Box>
    </Box>
  );
}
