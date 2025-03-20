import React, { useEffect, useState } from "react";
import axios from "axios";
import { Button, Container, Typography, List, ListItem, ListItemText } from "@mui/material";

const ExpenseList = () => {
    const [expenses, setExpenses] = useState([]);

    useEffect(() => {
        const fetchExpenses = async () => {
            const token = localStorage.getItem("token");
            const response = await axios.get("http://localhost:8080/api/expenses", {
                headers: { Authorization: `Bearer ${token}` },
            });
            setExpenses(response.data);
        };
        fetchExpenses();
    }, []);

    return (
        <Container>
            <Typography variant="h4">Expenses</Typography>
            <List>
                {expenses.map((expense) => (
                    <ListItem key={expense.id}>
                        <ListItemText
                            primary={`Amount: $${expense.amount}`}
                            secondary={`Category: ${expense.category}`}
                        />
                    </ListItem>
                ))}
            </List>
            <Button variant="contained" color="primary" href="/add-expense">
                Add Expense
            </Button>
        </Container>
    );
};

export default ExpenseList;