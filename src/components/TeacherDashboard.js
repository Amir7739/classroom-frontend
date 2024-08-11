import React, { useState, useEffect } from "react";
import axios from "axios";
import {
  Container,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";

const TeacherDashboard = () => {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    const fetchStudents = async () => {
      const response = await axios.get("http://localhost:5000/timetables"); // Adjust API endpoint
      setStudents(response.data);
    };

    fetchStudents();
  }, []);

  return (
    <Container
      sx={{
        marginLeft: "260px", // Adjust the margin to accommodate your sidebar width
        marginTop: "20px",
      }}
    >
      <Typography variant="h4" gutterBottom>
        Teacher Dashboard
      </Typography>

      <Typography variant="h6">Students in My Classroom</Typography>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Subject</TableCell>
            <TableCell>Start Time</TableCell>
            <TableCell>End Time</TableCell>
            <TableCell>Day</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {students.map((student) => (
            <TableRow key={student.id}>
              <TableCell>{student.subject}</TableCell>
              <TableCell>{student.startTime}</TableCell>
              <TableCell>{student.endTime}</TableCell>
              <TableCell>{student.day}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Container>
  );
};

export default TeacherDashboard;
