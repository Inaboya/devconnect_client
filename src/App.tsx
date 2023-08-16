import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AppDispatch } from "./redux/store";
import { setAuthToken } from "./utils/setAuthToken";
import { loadUser } from "./redux/actions/auth";
import { LOGOUT } from "./utils/typings";
import Navbar from "./components/Navbar";
import "./App.css";
import LandingPage from "./page/LandingPage";
import RegisterPage from "./page/RegisterPage";
import LoginPage from "./page/LoginPage";
import PrivateRoute from "./routing/PrivateRoute";
import Dashboard from "./page/Dashboard";
import AddExperience from "./page/AddExperience";

const App = () => {
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    if (localStorage.token) {
      setAuthToken(localStorage.token);
    }

    dispatch(loadUser());

    window.addEventListener("storage", () => {
      if (!localStorage.token) dispatch({ type: LOGOUT });
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<LandingPage />} />

          <Route path="register"  element={<RegisterPage />} />
          <Route path="login"  element={<LoginPage />} />

          {/* Private routing component */}

          <Route
            path="/dashboard"
            element={<PrivateRoute component={Dashboard} />}
          />

<Route
            path="/add-experience"
            element={<PrivateRoute component={AddExperience} />}
          />
        </Routes>
      </Router>
    </>
  );
};

export default App;
