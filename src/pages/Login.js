import React, { useState } from "react";
import { Button } from "reactstrap";
import { Card, Alert } from "react-bootstrap";
import { useNavigate, Link } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";
import { Input } from "@mui/material";

// import styled from "styled-components";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const navigate = useNavigate();

  const { login } = useAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    try {
      await login(username, password);
      navigate("/dashboard");
    } catch (e) {
      console.error("caught it", e);
      setError("Failed to sign in");
    }
  };

  return (
    <>
      <Card>
        <Card.Body>
          <div>
            <h1>Login</h1>
            {error && <Alert variant="danger">{error}</Alert>}
          </div>
          <form onSubmit={handleSubmit}>
            <div>
              <Input
                onChange={(e) => setUsername(e.target.value)}
                type="username"
                placeholder="Username"
                required
              />
            </div>
            <div>
              <div>
                <Input
                  onChange={(e) => setPassword(e.target.value)}
                  type="password"
                  placeholder="Password"
                  required
                />
              </div>
            </div>
            <div>
              <Button type="submit" className="submit">
                Submit
              </Button>
            </div>
            <div className="logreg-footnote">
              <div>
                <Link to="/Forgotpassword" className="login">
                  forgot password
                </Link>
              </div>
              <Link to="/registration">create an account</Link>
            </div>
          </form>
        </Card.Body>
      </Card>
    </>
  );
};

// const Loginstyles = styled.div`
//   display: flex;
//   justify-content: center;
//   background-color: white;
//   float: right;

//   /* Button {
//     position: relative;
//     align-items: center;
//     justify-content: center;
//   } */

//   /* Form {
//     display: flex;
//     flex-direction: column;
//     text-align: center;
//     justify-content: space-between;
//     gap: 30px;
//     margin-right: 10px;
//   } */

//   /* Login {
//     margin-left: 100px;
//   } */
// `;

export default Login;
