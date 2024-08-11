import React, { useEffect, useState } from "react";
import { Container, Typography, Paper, Box, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const navigate = useNavigate();
  const [userRole, setUserRole] = useState("");

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user") || "{}");
    if (user && user.role) {
      setUserRole(user.role);
    }
  }, []);

  const handleAddUser = () => {
    navigate("/add-user");
  };

  const handleAddClassroom = () => {
    navigate("/add-classroom");
  };

  const handleListClassroom = () => {
    navigate("/get-classroom");
  };

  return (
    <Container
      sx={{
        minHeight: "100vh",
        backgroundImage: `url('https://th.bing.com/th/id/OIP.aHuYH2_rV47Igjmy6_4b8AAAAA?w=450&h=288&rs=1&pid=ImgDetMain')`,
        backgroundSize: "cover",
        width: "160%",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        padding: 0,
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          minHeight: "100vh",
          backdropFilter: "blur(5px)", // Optional: adds a blur effect to the background
        }}
      >
        <Paper
          elevation={3}
          sx={{
            padding: 4,
            textAlign: "center",
            maxWidth: 600,
            width: "100%",
            backgroundColor: "rgba(255, 255, 255, 0.8)", // Optional: adds a semi-transparent background to Paper
          }}
        >
          <Typography variant="h4" component="h1" gutterBottom>
            Welcome to Heliverse Classroom
          </Typography>

          {/* Conditionally render the Add Teacher/Student button */}
          {userRole === "Principal" && (
            <Button variant="contained" color="primary" onClick={handleAddUser}>
              Add Teacher/Student
            </Button>
          )}

          <Typography variant="h6" paragraph>
            This is your dashboard where you can manage classrooms, teachers,
            and students. Use the navigation menu to access different sections
            of the application.
          </Typography>
          <Typography variant="body1" paragraph>
            Get started by checking the latest updates, adding new classes, or
            reviewing current schedules.
          </Typography>
          {userRole !== "Student" && (
            <Button
              style={{ marginRight: 10 }}
              variant="contained"
              color="primary"
              onClick={handleAddClassroom}
            >
              Add Classroom
            </Button>
          )}
          {userRole !== "Student" && (
            <Button
              variant="contained"
              color="primary"
              onClick={handleListClassroom}
            >
              ClassRoom List
            </Button>
          )}
        </Paper>
      </Box>
    </Container>
  );
};

export default Dashboard;
