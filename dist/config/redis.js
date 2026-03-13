"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.connectRedis = exports.redisClient = void 0;
const redis_1 = require("redis");
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
exports.redisClient = (0, redis_1.createClient)({
    username: process.env.REDIS_USERNAME,
    password: process.env.REDIS_PASSWORD,
    socket: {
        host: process.env.REDIS_HOST,
        port: 19434
    }
});
exports.redisClient.on('error', (err) => {
    console.error('Redis Client Error', err);
});
const connectRedis = async () => {
    try {
        await exports.redisClient.connect();
        console.log('Connected to Redis successfully');
    }
    catch (error) {
        console.error('Redis connection error:', error);
        process.exit(1); // Exit process with failure
    }
};
exports.connectRedis = connectRedis;
//# sourceMappingURL=redis.js.map