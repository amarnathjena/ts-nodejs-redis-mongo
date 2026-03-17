import express from 'express';
import dotenv from 'dotenv';
import { connectDB } from "./config/db";
import { connectRedis } from "./config/redis";
import employeesRouter from "./routes/employees.router";

dotenv.config();

const app = express();

app.use(express.json());

//connectDB(); // establish MongoDB connection before starting the server
connectRedis(); // establish Redis connection before starting the server

app.use('/api/employees', employeesRouter);

app.get('/', (req, res) => {
  res.send('Hello, World!');
});

app.listen(process.env.SERVER_PORT, () => {
  console.log(`Server is running on port ${process.env.SERVER_PORT}`);
});