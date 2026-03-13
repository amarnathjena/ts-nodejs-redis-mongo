import { createClient } from 'redis';
import dotenv from 'dotenv';
dotenv.config();

export const redisClient = createClient({
    username: process.env.REDIS_USERNAME as string,
    password: process.env.REDIS_PASSWORD as string,
    socket: {
        host: process.env.REDIS_HOST as string,
        port: 19434
    }
});

redisClient.on('error', (err) => {
  console.error('Redis Client Error', err);
});

export const connectRedis = async () => {
  try {
    await redisClient.connect();
    console.log('Connected to Redis successfully');
  } catch (error) {
    console.error('Redis connection error:', error);
    process.exit(1); // Exit process with failure
  }
};