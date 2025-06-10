"use client";

import Link from "next/link";
import React, { useState } from "react";
import { usePathname } from "next/navigation";
import Image from "next/image";
import logo_small from "@/public/logo_small.png";
import {
  AppBar,
  Button,
  IconButton,
  Toolbar,
  Grid,
  Drawer,
  Box,
  Divider,
  List,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

const drawerWidth = 240;

// Updated navItems array to include Blueprint Builder
const navItems = ["HOME", "PROJECTS", "ESTIMATES", "ABOUT", "TESTIMONIALS", "CONTACT", "DADU/ADU"];

// Updated links array to include the path for the Blueprint Builder page
const links = ["/", "/projects-page", "/estimates", "/about", "/testimonials", "/contact", "/blueprint", "/dadu"];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const pathname = usePathname();
  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box sx={{ textAlign: "center" }}>
      <Link href="/" passHref>
        <Button>
          <Image src={logo_small} alt="logo" width={100} height={50} />
        </Button>
      </Link>
      <Divider />
      <List>
        {navItems.map((item, index) => (
          <Grid item key={item}>
            <Link href={links[index]} passHref>
              <Button 
                key={item} 
                onClick={handleDrawerToggle}
                sx={{
                  color: pathname === links[index] ? "blue" : "black",
                  fontWeight: pathname === links[index] ? "bold" : "normal",
                }}
              >
                {item}
              </Button>
            </Link>
          </Grid>
        ))}
      </List>
      <Divider />
    </Box>
  );

  return (
    <Box>
      <AppBar component="nav" sx={{ backgroundColor: "white", padding: .5 }}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon sx={{ justifyContent: "flex-end", color: "black" }} />
          </IconButton>
          <Box sx={{ flexGrow: 1 }}>
            <Link href="/" passHref>
              <Button>
                <Image src={logo_small} alt="logo" width={100} height={50} />
              </Button>
            </Link>
          </Box>
          <Box sx={{ display: { xs: "none", sm: "block" } }}>
            <Grid container spacing={2}>
              {navItems.map((item, index) => (
                <Grid item key={item} sx={{ display: "flex" }}>
                  <Link href={links[index]} passHref>
                    <Button 
                      key={item} 
                      sx={{ 
                        color: pathname === links[index] ? "blue" : "black",
                        fontWeight: pathname === links[index] ? "bold" : "normal",
                        fontSize: 16,
                      }}
                    >
                      {item}
                    </Button>
                  </Link>
                </Grid>
              ))}
            </Grid>
          </Box>
        </Toolbar>
      </AppBar>
      <nav>
        <Drawer
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
      </nav>
      <Box component="main">
        <Toolbar />
      </Box>
    </Box>
  );
}
