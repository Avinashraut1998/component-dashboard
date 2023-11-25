import { AppBar, Toolbar, Typography } from "@mui/material";
import React, { useContext } from "react";
import NotificationsIcon from "@mui/icons-material/Notifications";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import { MyContext } from "../MyContext";
const Navbar = ({ drawerWidth }) => {
  const { user } = useContext(MyContext);
  console.log(user, "from nav");
  return (
    <>
      <AppBar
        position="fixed"
        sx={{
          width: `calc(100% - ${drawerWidth}px)`,
          ml: `${drawerWidth}`,
          backgroundColor: "lightblue",
        }}
      >
        <Toolbar sx={{ justifyContent: "right", gap: 1 }}>
          <NotificationsIcon />
          <Typography
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              gap: 1,
            }}
          >
            <span>Welcome {user?.name}</span>
            <AccountBoxIcon />
          </Typography>
        </Toolbar>
      </AppBar>
    </>
  );
};

export default Navbar;
