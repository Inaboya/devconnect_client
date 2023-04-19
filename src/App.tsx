import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './page/LandingPage';
import './App.css';
import Navbar from './components/Navbar';
import RegisterPage from './page/RegisterPage';
import LoginPage from './page/LoginPage';
import Alert from './components/Alert';
import PrivateRoute from './routing/PrivateRoute';
import Dashboard from './page/Dashboard';

const App: React.FC = () => {
  return (
    <>
      <Router>
        <Navbar />
        <Alert />
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/login" element={<LoginPage />} />
          {/* <Route path="/profiles" element={<ProfilesPage />} /> */}
          {/* <Route path="/profiles/:id" element={<ProfilePage />} /> */}
          <Route
            path="dashboard"
            element={<PrivateRoute Component={Dashboard} />}
          />
          {/* <Route
            path="create-profile"
            element={<PrivateRoute component={ProfileForm} />}
          /> */}
          {/* <Route
            path="edit-profile"
            element={<PrivateRoute component={ProfileForm} />}
          /> */}
          {/* <Route
            path="add-experience"
            element={<PrivateRoute component={AddExperience} />}
          /> */}
          {/* <Route
            path="add-education"
            element={<PrivateRoute component={AddEducation} />}
          /> */}
          {/* <Route path="posts" element={<PrivateRoute component={Posts} />} /> */}
          {/* <Route path="posts/:id" element={<PrivateRoute component={Post} />} /> */}
          {/* <Route path="/*" element={<NotFound />} /> */}
        </Routes>
      </Router>
    </>
  );
};

export default App;
