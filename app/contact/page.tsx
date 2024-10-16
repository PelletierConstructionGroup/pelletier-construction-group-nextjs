import { Box, Button, Stack, Typography } from "@mui/material";
import Footer from "@/components/Footer";
import Link from "next/link";

export default function Home() {
    return (
        <Box
            sx={{
                display: "flex",
                flexDirection: "column",
                minHeight: "100vh",
                maximumWidth: "100vw",
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
                        Contact Us
                    </Typography>
                    <Typography>
                        <Link href="tel:+19078417274" passHref>
                            <Box
                                component="a"
                                sx={{
                                    color: "inherit",
                                    textDecoration: "none",
                                    "&:hover": { textDecoration: "underline" },
                                }}
                            >
                                (907) 841-7274
                            </Box>
                        </Link>
                    </Typography>
                    <Typography>
                        <Link
                            href="mailto:ryan@pelletier.construction"
                            passHref
                        >
                            <Box
                                component="a"
                                sx={{
                                    color: "inherit",
                                    textDecoration: "none",
                                    "&:hover": { textDecoration: "underline" },
                                }}
                            >
                                ryan@pelletier.construction
                            </Box>
                        </Link>
                    </Typography>
                    <Button
                        variant="contained"
                        color="primary"
                        href="/contact"
                        sx={{
                            mt: 3,
                            mb: 4,
                            fontSize: "1.2rem",
                            width: "200px",
                            height: "50px",
                        }}
                    >
                        Call Now
                    </Button>
                    <Box
                        margin="auto"
                        sx={{
                            display: "grid",
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
                            width="82%"
                            height="82%"
                            style={{ border: 0 }}
                            loading="lazy"
                        >
                            contacts us
                        </iframe>
                    </Box>
                </Box>
            </Stack>
            <Footer />
        </Box>
    );
}
