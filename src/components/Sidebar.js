import React, { useEffect, useState } from "react";
import {
  List,
  ListItem,
  ListItemText,
  Drawer,
  Toolbar,
  Divider,
} from "@mui/material";
import { Link } from "react-router-dom";

const Sidebar = () => {
  const [userRole, setUserRole] = useState("");

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user") || "{}");
    if (user && user.role) {
      setUserRole(user.role);
    }
  }, []);

  return (
    <Drawer
      variant="permanent"
      sx={{
        width: 240,
        flexShrink: 0,
        [`& .MuiDrawer-paper`]: { width: 240, boxSizing: "border-box" },
      }}
    >
      <Toolbar />
      <Divider />
      <List>
        {userRole === "Principal" && (
          <>
            <ListItem button component={Link} to="/principal">
              <ListItemText primary="Principal Dashboard" />
            </ListItem>
            <ListItem button component={Link} to="/teacher">
              <ListItemText primary="Teacher Dashboard" />
            </ListItem>
            <ListItem button component={Link} to="/get-student">
              <ListItemText primary="Student Dashboard" />
            </ListItem>
          </>
        )}

        {userRole === "Teacher" && (
          <ListItem button component={Link} to="/teacher">
            <ListItemText primary="Teacher Dashboard" />
          </ListItem>
        )}

        {userRole === "Student" && (
          <ListItem button component={Link} to="/get-student">
            <ListItemText primary="Student Dashboard" />
          </ListItem>
        )}
      </List>
    </Drawer>
  );
};

export default Sidebar;
