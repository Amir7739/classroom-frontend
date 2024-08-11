import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./components/AuthContext";
import ProtectedRoute from "./components/ProtectedRoute";
import Login from "./components/Login";
import Layout from "./components/Layout";
import Dashboard from "./components/Dashboard";
import TeacherDashboard from "./components/TeacherDashboard";
import PrincipalDashboard from "./components/PrincipalDashboard";
import AddUserForm from "./components/AddUserForm";
import ClassroomForm from "./components/CreateClassroomForm";
import ClassroomList from "./components/ClassroomList";
import StudentListing from "./components/StudentListing";
import EditUser from "./components/EditUser";
// import StudentDashboard from "./components/StudentDashboard";

const App = () => {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route
            path="/"
            element={
              <ProtectedRoute>
                <Layout>
                  <Dashboard />
                </Layout>
              </ProtectedRoute>
            }
          />
          <Route
            path="/edit-user/:id"
            element={
              <ProtectedRoute>
                <Layout>
                  <EditUser />
                </Layout>
              </ProtectedRoute>
            }
          />
          <Route
            path="/teacher"
            element={
              <ProtectedRoute>
                <Layout>
                  <TeacherDashboard />
                </Layout>
              </ProtectedRoute>
            }
          />
          <Route
            path="/principal"
            element={
              <ProtectedRoute>
                <Layout>
                  <PrincipalDashboard />
                </Layout>
              </ProtectedRoute>
            }
          />
          <Route
            path="/add-user"
            element={
              <ProtectedRoute>
                <Layout>
                  <AddUserForm />
                </Layout>
              </ProtectedRoute>
            }
          />
          <Route
            path="/add-classroom"
            element={
              <ProtectedRoute>
                <Layout>
                  <ClassroomForm />
                </Layout>
              </ProtectedRoute>
            }
          />
          <Route
            path="/get-classroom"
            element={
              <ProtectedRoute>
                <Layout>
                  <ClassroomList />
                </Layout>
              </ProtectedRoute>
            }
          />
          <Route
            path="/get-student"
            element={
              <ProtectedRoute>
                <Layout>
                  <StudentListing />
                </Layout>
              </ProtectedRoute>
            }
          />
          {/* <Route
            path="/students"
            element={
              <ProtectedRoute>
                <Layout>
                  <StudentDashboard />
                </Layout>
              </ProtectedRoute>
            }
          /> */}
        </Routes>
      </Router>
    </AuthProvider>
  );
};

export default App;
