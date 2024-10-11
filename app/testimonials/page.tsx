import { Box, Stack, Typography } from "@mui/material";
import Footer from "@/components/Footer";
import Image from "next/image";
import image from "@/public/images/familys-historic-home.jpg";
import Link from "next/link";

export default function Home() {
  return (
    <Box sx={{ mt: 5.7 }}>
      <Stack>
        <Box
          sx={{
            position: "relative",
            height: "520px",
            width: "100%",
            overflow: "hidden",
          }}
        >
          <Image
            src={image}
            alt="The house from the offer."
            style={{
              width: "100%",
              height: "auto",
              maxHeight: "100%",
              objectFit: "cover",
              objectPosition: "center",
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
          sx={{ width: "100%", backgroundColor: "white" }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              height: "520px",
              gap: 2,
            }}
          >
            <Box
              width="75%"
              margin="auto"
              paddingX="80px"
              textAlign="left"
              justifyContent="center"
            >
              <Box margin="auto" textAlign="left" justifyContent="center">
                <Typography
                  component="h3"
                  variant="h3"
                  sx={{ color: "rgba(168,63,16,1)" }}
                >
                  Maneesh
                </Typography>
              </Box>
              <Box margin="auto" textAlign="left" justifyContent="center">
                <Typography
                  component="h5"
                  variant="h5"
                  sx={{ color: "rgba(168,63,16,1)" }}
                >
                  Kirkland, WA
                </Typography>
              </Box>
            </Box>
            <Box margin="auto" textAlign="left" justifyContent="center">
              <Typography width="90%" sx={{ color: "rgba(51, 65, 85)" }}>
                We hired Ryan with Pelletier Construction to do some home
                improvement to our house. We added a small deck to our backyard
                and also remodeled our two bathrooms, one of which is our master
                bath. We did it all, from tile work, replacing a shower with a
                tub, cabinets, flooring... His bid was very fair, his work ethic
                was superb, and the quality of work was excellent. He cares for
                customer service, and with each change or concern, he was very
                attentive and responsive, which was great and easy to work with.
                I definitely recommend working with him and his company, and
                will probably use them again for our future kitchen remodel.
              </Typography>
            </Box>
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
