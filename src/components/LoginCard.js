import { Box, Button, Card, TextField, Typography } from "@mui/material";
import React, { useContext, useState } from "react";
import { MyContext } from "../MyContext";
import { useNavigate } from "react-router-dom";

const LoginCard = () => {
  const { users, setUser } = useContext(MyContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [userNotFound, setUserNotFound] = useState(false);

  const navigate = useNavigate();
  function searchUser() {
    // eslint-disable-next-line
    const foundUser = users.find(
      (item) => item.email === email && item.password === password
    );

    if (foundUser) {
      return foundUser;
    } else {
      setUserNotFound(true);
      return null;
    }
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    const currUser = searchUser();
    setUser(currUser);
    if (currUser != null) navigate("/home");
  };

  return (
    <div>
      <Typography
        variant="h4"
        color="white"
        textAlign="center"
        marginBottom="10px"
      >
        Account Login
      </Typography>
      <Card sx={{ p: 1.2, maxWidth: 345, borderRadius: 4 }}>
        <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
          <TextField
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            autoFocus
            onChange={(e) => setEmail(e.target.value)}
          />
          <TextField
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
            onChange={(e) => setPassword(e.target.value)}
          />
          {userNotFound && (
            <Typography variant="body2" color="error" textAlign="center">
              User not found. Please check your email and password.
            </Typography>
          )}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Button type="submit" variant="contained">
              Sign In
            </Button>
          </div>
        </Box>
      </Card>
    </div>
  );
};

export default LoginCard;
