import React from "react";
// import { Router, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
// import { AuthProvider } from "./contexts/AuthContext";

// import About from "./pages/About";
// import Contact from "./pages/Contact";
import Home from "./pages/Home";
// import Demo from "./pages/Demo";
// import Account from "./pages/Accountwizard";
// import Registration from "./pages/Registration";
// import Dashboard from "./pages/Dashboard";
// import PrivateRoute from "./components/PrivateRoute";
// import ForgotPassword from "./pages/ForgotPassword";

// import Dashboard from './pages/Dashboard';
import "./App.css";

const App = () => {
  return (
    <div>
      <Home />
    </div>
    // <AuthProvider>
    //   <Router>
    //     <>
    //       <Routes>
    //         <Route path="/registration" component={Registration} />
    //         <PrivateRoute exact path="/dashboard" component={Dashboard} />
    //         <Route exact path="/forgotpassword" component={ForgotPassword} />
    //         <Route exact path="/about" component={About} />
    //         <Route exact path="/contact" component={Contact} />
    //         <Route exact path="/demo" component={Demo} />
    //         <Route exact path="/account" component={Account} />
    //         <Route path="/" component={Home} />
    //       </Routes>
    //     </>
    //   </Router>
    // </AuthProvider>
  );
};

export default App;
