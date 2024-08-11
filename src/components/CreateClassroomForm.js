import React, { useState } from "react";
import {
  Container,
  TextField,
  Button,
  Typography,
  Box,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  OutlinedInput,
  Chip,
} from "@mui/material";
import { toast } from "react-toastify";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const daysOfWeek = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
];

const ClassroomForm = () => {
  const [name, setName] = useState("");
  const [teacher, setTeacher] = useState("");
  const [students, setStudents] = useState([]);
  const [startTime, setStartTime] = useState("");
  const [endTime, setEndTime] = useState("");
  const [days, setDays] = useState([]);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const classroomData = {
      name,
      teacher,
      students,
      startTime,
      endTime,
      days,
    };

    try {
      await axios.post("http://localhost:5000/classrooms", classroomData);
      toast.success("Classroom created successfully!");
      navigate("/get-classroom");
    } catch (error) {
      toast.error("Failed to create classroom. Please try again.");
    }
  };

  return (
    <Container maxWidth="sm">
      <Typography variant="h4" component="h1" gutterBottom>
        Create New Classroom
      </Typography>
      <form onSubmit={handleSubmit}>
        <TextField
          label="Classroom Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          fullWidth
          margin="normal"
          required
        />
        <TextField
          label="Teacher"
          value={teacher}
          onChange={(e) => setTeacher(e.target.value)}
          fullWidth
          margin="normal"
        />
        <TextField
          label="Students (comma separated)"
          value={students.join(", ")}
          onChange={(e) =>
            setStudents(e.target.value.split(",").map((s) => s.trim()))
          }
          fullWidth
          margin="normal"
        />
        <TextField
          label="Start Time"
          type="time"
          value={startTime}
          onChange={(e) => setStartTime(e.target.value)}
          fullWidth
          margin="normal"
          InputLabelProps={{ shrink: true }}
          required
        />
        <TextField
          label="End Time"
          type="time"
          value={endTime}
          onChange={(e) => setEndTime(e.target.value)}
          fullWidth
          margin="normal"
          InputLabelProps={{ shrink: true }}
          required
        />
        <FormControl fullWidth margin="normal">
          <InputLabel id="days-label">Days</InputLabel>
          <Select
            labelId="days-label"
            multiple
            value={days}
            onChange={(e) => setDays(e.target.value)}
            input={<OutlinedInput id="select-multiple-chip" label="Days" />}
            renderValue={(selected) => (
              <Box sx={{ display: "flex", flexWrap: "wrap", gap: 0.5 }}>
                {selected.map((value) => (
                  <Chip key={value} label={value} />
                ))}
              </Box>
            )}
          >
            {daysOfWeek.map((day) => (
              <MenuItem key={day} value={day}>
                {day}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
        <Button type="submit" variant="contained" color="primary" fullWidth>
          Create Classroom
        </Button>
      </form>
    </Container>
  );
};

export default ClassroomForm;
