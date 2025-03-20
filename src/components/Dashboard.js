import React, { useEffect, useState } from "react";
import axios from "axios";
import { Bar } from "react-chartjs-2";
import { Container, Typography } from "@mui/material";
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from "chart.js";

// Register Chart.js components
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const Dashboard = () => {
    const [data, setData] = useState({});

    useEffect(() => {
        const fetchData = async () => {
            const token = localStorage.getItem("token");
            const response = await axios.get("http://localhost:8080/api/expenses/analytics", {
                headers: { Authorization: `Bearer ${token}` },
            });
            setData({
                labels: response.data.labels,
                datasets: [
                    {
                        label: "Expenses",
                        data: response.data.values,
                        backgroundColor: "rgba(75,192,192,0.6)",
                    },
                ],
            });
        };
        fetchData();
    }, []);

    return (
        <Container>
            <Typography variant="h4">Expense Analytics</Typography>
            <Bar data={data} />
        </Container>
    );
};

export default Dashboard;