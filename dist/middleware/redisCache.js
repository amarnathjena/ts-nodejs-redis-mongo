"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.cacheMiddleware = void 0;
const redis_1 = require("../config/redis");
const cacheMiddleware = (ttl) => {
    return async (req, res, next) => {
        // 1️⃣ Cache only GET requests
        if (req.method !== "GET") {
            return next();
        }
        // 2️⃣ Skip caching for authenticated requests
        if (req.headers.authorization) {
            return next();
        }
        const cacheKey = `cache:${req.originalUrl}`; // Use the request URL as the cache key
        const cachedData = await redis_1.redisClient.get(cacheKey);
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
        res.json = (body) => {
            redis_1.redisClient.setEx(cacheKey, ttl, JSON.stringify(body)); // Step 3
            return originalJson(body); // Step 4
        };
        next();
    };
};
exports.cacheMiddleware = cacheMiddleware;
//# sourceMappingURL=redisCache.js.map