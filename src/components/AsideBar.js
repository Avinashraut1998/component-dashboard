import {
  Button,
  Divider,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Toolbar,
  Typography,
} from "@mui/material";
import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import SettingsIcon from "@mui/icons-material/Settings";
import PersonIcon from "@mui/icons-material/Person";
import { MyContext } from "../MyContext";

const AsideBar = ({ drawerWidth }) => {
  const { setUser } = useContext(MyContext);
  let navigate = useNavigate();
  function handleClick() {
    setUser(null);
    navigate("/login");
  }

  const listItems = [
    {
      name: "Dashboard",
      icon: <SettingsIcon />,
      path: "/home/dashboard",
    },
    {
      name: "Profile",
      icon: <AccountBoxIcon />,
      path: "/home/profile",
    },
    {
      name: "Settings",
      icon: <PersonIcon />,
      path: "/home/settings",
    },
  ];
  return (
    <Drawer
      PaperProps={{
        sx: {
          color: "#fff",
          backgroundColor: "lightblue",
        },
      }}
      sx={{
        width: drawerWidth,
        flexShrink: 0,
        "& .MuiDrawer-paper": {
          width: drawerWidth,
          boxSizing: "border-box",
        },
      }}
      variant="permanent"
      anchor="left"
    >
      <Toolbar>
        <Typography variant="h6" noWrap color="white">
          Dashboard
        </Typography>
      </Toolbar>
      <Divider />
      <List>
        {listItems.map((item) => (
          <ListItem key={item?.name} disablePadding>
            <ListItemButton onClick={() => navigate(item?.path)}>
              <ListItemIcon>{item?.icon}</ListItemIcon>
              <ListItemText primary={item?.name} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Button variant="outlined" onClick={handleClick}>
        Logout
      </Button>
    </Drawer>
  );
};

export default AsideBar;
