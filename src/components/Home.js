import React from "react";
import Navbar from "./Navbar";
import { Box, CssBaseline } from "@mui/material";
import { Outlet } from "react-router-dom";
import AsideBar from "./AsideBar";

const Home = () => {
  let drawerWidth = 240;

  return (
    <>
      <Box sx={{ display: "flex" }}>
        <CssBaseline />
        <Navbar drawerWidth={drawerWidth} />
        <AsideBar drawerWidth={drawerWidth} />
        <Box
          component="main"
          sx={{ flexGrow: 1, bgcolor: "background.default", p: 3, mt: 6 }}
        >
          <Outlet />
        </Box>
      </Box>
    </>
  );
};

export default Home;
