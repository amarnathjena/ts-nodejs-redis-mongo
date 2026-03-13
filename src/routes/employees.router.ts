import express from 'express';
import { getEmployees } from '../controllers/employees.controller';
import { cacheMiddleware } from "../middleware/redisCache";

const router = express.Router();

router.get('/getall', cacheMiddleware(60), getEmployees); // cache for 60 seconds

export default router;