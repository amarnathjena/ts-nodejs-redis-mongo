"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const db_1 = require("./config/db");
const redis_1 = require("./config/redis");
const employees_router_1 = __importDefault(require("./routes/employees.router"));
dotenv_1.default.config();
const app = (0, express_1.default)();
app.use(express_1.default.json());
(0, db_1.connectDB)(); // establish MongoDB connection before starting the server
(0, redis_1.connectRedis)(); // establish Redis connection before starting the server
app.use('/api/employees', employees_router_1.default);
app.get('/', (req, res) => {
    res.send('Hello, World!');
});
app.listen(process.env.SERVER_PORT, () => {
    console.log(`Server is running on port ${process.env.SERVER_PORT}`);
});
//# sourceMappingURL=index.js.map