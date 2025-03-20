import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { TextField, Button, Container, Typography } from "@mui/material";

const Login = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const handleLogin = async () => {
        try {
            const response = await axios.post("http://localhost:8080/api/auth/login", {
                username,
                password,
            });
            localStorage.setItem("token", response.data.token);
            navigate("/expenses");
        } catch (error) {
            alert("Login failed!");
        }
    };

    return (
        <Container>
            <Typography variant="h4">Login</Typography>
            <TextField
                label="Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                fullWidth
                margin="normal"
            />
            <TextField
                label="Password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                fullWidth
                margin="normal"
            />
            <Button variant="contained" color="primary" onClick={handleLogin}>
                Login
            </Button>
            <Button onClick={() => navigate("/register")}>Register</Button>
        </Container>
    );
};

export default Login;