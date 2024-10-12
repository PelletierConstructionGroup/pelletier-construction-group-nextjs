"use client";
import React from "react";
import { Box, Stack, Typography } from "@mui/material";
import Footer from "@/components/Footer";
import Image from "next/image";
import image from "@/public/images/familys-historic-home.jpg";
import Carousel from "@/components/Carousel";
import Link from "next/link";

//Carousel prop configuration
const starsVisibility = "visible";
const slides = [
  <Typography key="slide1">
    Pelletier Construction Group did an incredible job helping with our kitchen
    remodel and I&apos;m already looking forward to working with them again in
    the future. Ryan was incredibly responsive every time we had a question, all
    the way from the early stages of us buying materials to the end of the
    project. Along with Ryan, his crew was incredibly thorough, kind, and FAST.
    We couldn&apos;t believe how quickly this project got done. In addition to
    quick and high quality work, we found him to be affordable and significantly
    less than other quotes we received. At first that worried me, thinking maybe
    they were too good to be true, but Ryan is just a good-hearted person with a
    high bar for quality work...
  </Typography>,
  <Typography key="slide2">
    I am so grateful to have found Ryan! He has been helping me build out my
    business and has worked with me while I searched for the right location.
    Ryan is incredibly responsive and is a clear and kind communicator. He gave
    me quotes in a very reasonable amount of time, did thorough surveying of
    each space we looked at, and gave me lots of options for the work I needed
    done! He took time to answer complicated questions thoughtfully and never
    acted like my potentially silly questions were weird. His prices are super
    fair, and he does a great job helping you get your needs met at a price that
    works for you. As a small business this is essential. The timeliness has
    been so impressive...
  </Typography>,
];

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
          <Box
            sx={{
              position: "absolute",
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              zIndex: 2, // Ensures that the text is above the image
              backgroundColor: "rgba(0, 0, 0, 0.4)", // 40% opacity overlay
            }}
          >
            <Typography
              sx={{
                color: "white",
                textAlign: "center",
                fontSize: "2rem", // Adjust the size as needed
              }}
            >
              KIND WORDS FROM OUR COLLABORATORS
            </Typography>
          </Box>

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
                  component="h4"
                  variant="h4"
                  sx={{ color: "rgba(168,63,16,1)" }}
                >
                  Maneesh
                </Typography>
              </Box>
              <Box margin="auto" textAlign="left" justifyContent="center">
                <Typography
                  component="h6"
                  variant="h6"
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
            sx={{
              display: "flex",
              flexDirection: "row",
              height: "520px",
              gap: 2,
              backgroundColor: "rgba(168,63,16,1)",
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
                  component="h4"
                  variant="h4"
                  sx={{ color: "rgba(255,255,255,1)" }}
                >
                  Heather
                </Typography>
              </Box>
              <Box margin="auto" textAlign="left" justifyContent="center">
                <Typography
                  component="h6"
                  variant="h6"
                  sx={{ color: "rgba(255,255,255,1)" }}
                >
                  Seattle, WA
                </Typography>
              </Box>
            </Box>
            <Box margin="auto" textAlign="left" justifyContent="center">
              <Typography width="90%" sx={{ color: "rgba(255,255,255,1)" }}>
                We worked with the PCG team on two projects after moving into
                our new home in May 2021: 1) a renovation of our downstairs
                family room to remove some old style cabinets and 2) a remodel
                of our guest bathroom. Ryan led the team and did an excellent
                job. The team was able to get both jobs done on time, within
                budget, and everything looks fantastic. Of course, no project
                goes perfectly, but anytime an issue came up, Ryan was easy to
                reach and took care of it. We&#x27;ve since reached out to him
                for some small jobs (after we had a ceiling leak and to repair
                some of the wood floor that got damaged) and he was there for
                us.
              </Typography>
            </Box>
          </Box>
          <Carousel slides={slides} visibility={starsVisibility} />;
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
