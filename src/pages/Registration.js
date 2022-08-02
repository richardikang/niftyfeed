import React, { useState } from "react";
import { Button, Card, Alert } from "react-bootstrap";
import { useAuth } from "../contexts/AuthContext";
import { useNavigate } from "react-router-dom";
import { Input } from "@mui/material";

const Registration = () => {
  const [error, setError] = useState("");
  // const [name, setName] = useState("");
  // const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  // const [loading, setLoading] = useState(false);

  // const emailRef = useRef();
  // const passwordRef = useRef();
  // const passwordConfirmRef = useRef();
  const navigate = useNavigate();

  const { signup } = useAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    // if (passwordRef.current.value !== passwordConfirmRef.current.value) {
    //   return setError("Passwords do not match");
    // }

    try {
      // setLoading(true);
      await signup(email, password);
      navigate("/dashboard");
    } catch (e) {
      console.error("caught it", e);
      setError("Failed to create an account");
    }
    // setLoading(false);
  };

  return (
    <>
      <Card>
        <Card.Body>
          <div>
            <h1 className="new-account">New Account</h1>
            {error && <Alert variant="danger">{error}</Alert>}
          </div>
          <form onSubmit={handleSubmit}>
            <div className="form-name">
              <Input
                // onChange={(e) => setName(e.target.value)}
                type="name"
                placeholder="Name(first, last)"
                required
              />
            </div>
            <div className="logreg-div">
              <div className="form-group">
                <Input
                  onChange={(e) => setEmail(e.target.value)}
                  type="email"
                  // ref={emailRef}
                  placeholder="Email"
                  required
                />
              </div>
            </div>
            <div className="logreg-div">
              <div className="form-group">
                <Input
                  // onChange={(e) => setUsername(e.target.value)}
                  type="username"
                  placeholder="Username"
                  required
                />
              </div>
            </div>
            <div className="logreg-div">
              <div className="form-group">
                <Input
                  onChange={(e) => setPassword(e.target.value)}
                  type="password"
                  placeholder="Password"
                  required
                />
              </div>
            </div>
            <div className="logreg-div">
              <div className="form-group">
                <Input
                  onChange={(e) => setPassword(e.target.value)}
                  type="password"
                  placeholder="Re-enter password"
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
                <a>Forgot password</a>
              </div>
              <div>
                Already have an account?{" "}
                <a data-toggle="modal" href="/Login">
                  Log In
                </a>
              </div>
            </div>
          </form>
        </Card.Body>
      </Card>
    </>
  );
};
export default Registration;
