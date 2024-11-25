import { Box, Stack, Typography } from "@mui/material";
import Footer from "@/components/Footer";
import Link from "next/link";
import Image from "next/image";

export default function Home() {
    return (
        <Box
            sx={{
                display: "flex",
                flexDirection: "column",
                minHeight: "80vh",
                maximumWidth: "80vw",
                backgroundColor: "white",
                color: "black",
            }}
        >
            <Stack>
                <Box
                    margin="auto"
                    textAlign={"center"}
                    justifyContent={"center"}
                    sx={{
                        width: "100%",
                        paddingTop: "120px",
                        backgroundColor: "white",
                    }}
                >
                    <Typography component="h1" variant="h4" sx={{ pb: 4 }}>
                        About Us
                    </Typography>
                    <Typography component="h1" variant="h5" sx={{ pb: 4 }}>
                        Dedicated to Our Clients
                    </Typography>
                    <Box
                        margin="auto"
                        sx={{
                            display: "flex",
                            flexDirection: "row",
                            justifyContent: "flex-start",
                            alignItems: "flex-start",
                            maxWidth: "80%",
                            gap: 8,
                            mb: 4,
                        }}
                    >
                        <Box sx={{ flexShrink: 0, pl: 2 }}>
                            <Image
                                src="/images/Logo small.png"
                                alt="Pelletier Construction Group Logo"
                                width={100}
                                height={100}
                            />
                        </Box>
                        <Box sx={{ textAlign: "left" }}>
                            <Typography
                                component="p"
                                variant="body1"
                                sx={{ color: "black" }}
                            >
                                Pelletier Construction Group is dedicated to
                                fine craftsmanship and serving its customers. We
                                provide a wide range of high quality services in
                                a professional and timely manner. Our goal is to
                                satisfy each customer and their specific
                                construction needs for ADUs, remodels, new
                                shops, garages, decks and patio covers. If your
                                home no longer meets your needs, you don’t have
                                to sell it and move. Instead, choose a full
                                house interior remodel. In doing so, you can put
                                your personal touch on every area of your home.
                                With a full house interior remodel, you’ll be
                                able to customize your home to ensure it aligns
                                with your unique lifestyle and preferences. If
                                you’d like the home of your dreams without the
                                stress and expense of moving, this is an
                                excellent option.
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
                            sx={{ pb: 4, pt: 4, color: "blue" }}
                        >
                            Get in Touch
                        </Typography>
                        <iframe
                            src="https://docs.google.com/forms/d/e/1FAIpQLSelwJL2BR_yNzPqrdGUy_s5CZFI6mNpHTv4LQ0IxRYpjwvUVQ/viewform?embedded=true"
                            width="700"
                            height="1200"
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
