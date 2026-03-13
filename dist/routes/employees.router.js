"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const employees_controller_1 = require("../controllers/employees.controller");
const redisCache_1 = require("../middleware/redisCache");
const router = express_1.default.Router();
router.get('/getall', (0, redisCache_1.cacheMiddleware)(60), employees_controller_1.getEmployees); // cache for 60 seconds
exports.default = router;
//# sourceMappingURL=employees.router.js.map