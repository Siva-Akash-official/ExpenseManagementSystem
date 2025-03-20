import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { TextField, Button, Container, Typography } from "@mui/material";

const ExpenseForm = () => {
    const [amount, setAmount] = useState("");
    const [category, setCategory] = useState("");
    const [description, setDescription] = useState("");
    const navigate = useNavigate();

    const handleSubmit = async () => {
        const token = localStorage.getItem("token");
        await axios.post(
            "http://localhost:8080/api/expenses",
            { amount, category, description },
            { headers: { Authorization: `Bearer ${token}` } }
        );
        navigate("/expenses");
    };

    return (
        <Container>
            <Typography variant="h4">Add Expense</Typography>
            <TextField
                label="Amount"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                fullWidth
                margin="normal"
            />
            <TextField
                label="Category"
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                fullWidth
                margin="normal"
            />
            <TextField
                label="Description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                fullWidth
                margin="normal"
            />
            <Button variant="contained" color="primary" onClick={handleSubmit}>
                Submit
            </Button>
        </Container>
    );
};

export default ExpenseForm;