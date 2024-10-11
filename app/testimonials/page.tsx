import { Box, Stack, Typography } from "@mui/material";
import Footer from "@/components/Footer";
import Image from "next/image";
import image from "@/public/images/familys-historic-home.jpg";
import Link from "next/link";

export default function Home() {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        minHeight: "100vh",
        maxWidth: "100vw",
        backgroundColor: "white",
        color: "red",
      }}
    >
      <Stack>
        <Box
          sx={{
            position: "relative",
            height: "520px",
            width: "100%",
            overflow: "hidden", // Ensures any content outside the Box is hidden
          }}
        >
          <Image
            src={image}
            alt="The house from the offer."
            style={{
              width: "100%",
              height: "auto", // Maintains the image's aspect ratio
              maxHeight: "100%", // Ensures the height does not exceed the Box height
              objectFit: "cover", // Ensures the image covers the box dimensions without stretching
              objectPosition: "center", // Centers the image vertically within the box
            }}
            priority={true}
          />
          <Box
            sx={{
              position: "absolute",
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              backgroundColor: "rgba(0, 0, 0, 0.4)", // 40% opacity overlay
            }}
          />
        </Box>

        <Box
          margin="auto"
          textAlign="center"
          justifyContent="center"
          sx={{ width: "100%", paddingTop: "120px", backgroundColor: "white" }}
        >
          <Box>
            <Typography component="h1" variant="h2">
              Maneesh
            </Typography>
            <Typography component="h4" variant="h4" sx={{ pb: 4 }}>
              Kirkland, WA
            </Typography>
            <Typography>
              We hired Ryan with Pelletier Construction to do some home
              improvement to our house. We added a small deck to our backyard
              and also remodeled our two bathrooms, one of which is our master
              bath. We did it all, from tile work, replacing a shower with a
              tub, cabinets, flooring... His bid was very fair, his work ethic
              was superb, and the quality of work was excellent. He cares for
              customer service, and with each change or concern, he was very
              attentive and responsive, which was great and easy to work with. I
              definitely recommend working with him and his company, and will
              probably use them again for our future kitchen remodel.
            </Typography>
          </Box>
          <Box
            margin="auto"
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              width: "100%",
              backgroundColor: "rgba(54,54,54,1)",
            }}
          >
            <Typography
              component="h1"
              variant="h4"
              sx={{ pb: 4, pt: 4, color: "white" }}
            >
              Get in Touch
            </Typography>
            <iframe
              src="https://docs.google.com/forms/d/e/1FAIpQLSelwJL2BR_yNzPqrdGUy_s5CZFI6mNpHTv4LQ0IxRYpjwvUVQ/viewform?embedded=true"
              width="700"
              height="1300"
            >
              Loading…
            </iframe>
          </Box>
        </Box>
      </Stack>
      <Footer />
    </Box>
  );
}
