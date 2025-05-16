import {
  Drawer,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Toolbar,
  Typography,
  Box,
} from "@mui/material";
import { BsGraphUpArrow } from "react-icons/bs";
import { FaUsersCog, FaUserFriends } from "react-icons/fa";
import { NavLink } from "react-router";

const menuItems = [
  { text: "Dashboard", icon: <BsGraphUpArrow />, path: "/" },
  { text: "Customers", icon: <FaUserFriends />, path: "/customers" },
  { text: "User Management", icon: <FaUsersCog />, path: "/" },
];

const SideBar = () => {
  return (
    <Drawer
      variant="permanent"
      anchor="left"
      sx={{
        width: 240,
        flexShrink: 0,
        "& .MuiDrawer-paper": {
          width: 240,
          backdropFilter: "blur(12px)",
          background: "rgba(255, 255, 255, 0.1)",
          borderRight: "1px solid rgba(255, 255, 255, 0.2)",
          color: "#fff",
          boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
          boxSizing: "border-box",
        },
      }}
    >
      <Toolbar>
        <Typography variant="h6" noWrap sx={{ pl: 1, color: "#000" }}>
          Analytics Panel
        </Typography>
      </Toolbar>
      <Box sx={{ overflow: "auto", mt: 2 }}>
        <List>
          {menuItems.map((item) => (
            <ListItemButton key={item.text} sx={{ color: "#000" }}>
              <ListItemIcon>{item.icon}</ListItemIcon>
              <NavLink
                to={item.path ?? "/"}
                style={{ textDecoration: "none", color: "#000" }}
              >
                <ListItemText primary={item.text} />
              </NavLink>
            </ListItemButton>
          ))}
        </List>
      </Box>
    </Drawer>
  );
};

export default SideBar;
