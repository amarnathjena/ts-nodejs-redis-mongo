import { Request, Response, NextFunction } from 'express';
import { redisClient } from '../config/redis';

export const cacheMiddleware = (ttl: number) => {
    return async (req: Request, res: Response, next: NextFunction) => {
        
        // 1️⃣ Cache only GET requests
        if (req.method !== "GET") {
            return next();
        }

        // 2️⃣ Skip caching for authenticated requests
        if (req.headers.authorization) {
            return next();
        }
        
        const cacheKey = `cache:${req.originalUrl}`; // Use the request URL as the cache key
        const cachedData = await redisClient.get(cacheKey);
        if (cachedData) {
            console.log("Serving from Redis cache");
            return res.status(200).json(JSON.parse(cachedData));
        }
        console.log("Cache MISS");

        // Override res.json to store response in Redis
        //1. Save the original res.send
        //2. Replace res.send with your own function
        //3. Do your custom logic (capture/log/modify body)
        //4. Call the original res.send
        const originalJson = res.json.bind(res); // Step 1
        res.json = (body: any) => { // Step 2
            redisClient.setEx(cacheKey, ttl, JSON.stringify(body)); // Step 3
            return originalJson(body); // Step 4
        };

        next();
    }
};