import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { AuthProvider } from "./contexts/AuthContext";
import { MoralisProvider } from "react-moralis";

import About from "./pages/About";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import Demo from "./pages/Demo";
import Account from "./pages/Accountwizard";
import Login from "./pages/Login";
import Registration from "./pages/Registration";
import Dashboard from "./pages/Dashboard";
import ForgotPassword from "./pages/ForgotPassword";
import ProtectedRoute from "./components/ProtectedRoute";

import "./App.css";

const App = () => {
  return (
    <AuthProvider>
      <MoralisProvider
        serverUrl="https://bke4qvnxg7uc.usemoralis.com:2053/server"
        appId="njkYZk54FWda03ZyCOu4wg4BxbYHB5FaMQ1Nuobu"
      >
        <BrowserRouter>
          <Routes>
            <Route path="/registration" element={<Registration />} />
            <Route path="/login" element={<Login />} />
            <Route exact path="/forgotpassword" element={<ForgotPassword />} />
            <Route exact path="/about" element={<About />} />
            <Route exact path="/contact" element={<Contact />} />
            <Route exact path="/demo" element={<Demo />} />
            <Route exact path="/account" element={<Account />} />
            <Route path="/redirect" element={<Navigate to="/registration" />} />
            <Route path="/redirect" element={<Navigate to="/demo" />} />
            <Route
              path="/dashboard"
              element={
                <ProtectedRoute>
                  <Dashboard />
                </ProtectedRoute>
              }
            />
            <Route path="/" element={<Home />} />
          </Routes>
        </BrowserRouter>
      </MoralisProvider>
    </AuthProvider>
  );
};

export default App;
