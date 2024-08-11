import React, { useState, useEffect } from "react";
import {
  Container,
  Typography,
  Paper,
  Box,
  List,
  ListItem,
  ListItemText,
  Divider,
  CircularProgress,
} from "@mui/material";
import axios from "axios";

const ClassroomList = () => {
  const [classrooms, setClassrooms] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchClassrooms = async () => {
      try {
        const response = await axios.get(
          "http://localhost:5000/classrooms/get"
        );
        setClassrooms(response.data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching classrooms:", error);
        setLoading(false);
      }
    };

    fetchClassrooms();
  }, []);

  if (loading) {
    return (
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          minHeight: "100vh",
        }}
      >
        <CircularProgress />
      </Box>
    );
  }

  return (
    <Container maxWidth="md">
      <Typography variant="h4" component="h1" gutterBottom>
        Classroom List
      </Typography>
      <Paper elevation={3} sx={{ padding: 2 }}>
        <List>
          {classrooms.map((classroom) => (
            <React.Fragment key={classroom._id}>
              <ListItem alignItems="flex-start">
                <ListItemText
                  primary={classroom.name}
                  secondary={
                    <>
                      <Typography variant="body2" color="text.primary">
                        Teacher: {classroom.teacher}
                      </Typography>
                      <Typography variant="body2" color="text.primary">
                        Students: {classroom.students.join(", ")}
                      </Typography>
                      <Typography variant="body2" color="text.primary">
                        Time: {classroom.startTime} - {classroom.endTime}
                      </Typography>
                      <Typography variant="body2" color="text.primary">
                        Days: {classroom.days.join(", ")}
                      </Typography>
                    </>
                  }
                />
              </ListItem>
              <Divider />
            </React.Fragment>
          ))}
        </List>
      </Paper>
    </Container>
  );
};

export default ClassroomList;
