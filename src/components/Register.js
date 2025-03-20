import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { TextField, Button, Container, Typography } from "@mui/material";

const Register = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [role, setRole] = useState("Employee");
    const navigate = useNavigate();

    const handleRegister = async () => {
        try {
            await axios.post("http://localhost:8080/api/auth/register", {
                username,
                password,
                role,
            });
            navigate("/");
        } catch (error) {
            alert("Registration failed!");
        }
    };

    return (
        <Container>
            <Typography variant="h4">Register</Typography>
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
            <TextField
                label="Role"
                value={role}
                onChange={(e) => setRole(e.target.value)}
                fullWidth
                margin="normal"
            />
            <Button variant="contained" color="primary" onClick={handleRegister}>
                Register
            </Button>
        </Container>
    );
};

export default Register;