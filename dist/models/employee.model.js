"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.EmployeeModel = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const departmentEnum = ['HR', 'Engineering', 'Sales', 'Finance', 'Marketing'];
const employeeSchema = new mongoose_1.default.Schema({
    id: {
        type: Number,
        required: true,
        unique: true,
    },
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    department: {
        type: String,
        enum: departmentEnum,
        default: departmentEnum[0]
    },
    salary: {
        type: Number,
        default: 0
    }
}, { collection: 'employees' });
exports.EmployeeModel = mongoose_1.default.model("Employee", employeeSchema);
//# sourceMappingURL=employee.model.js.map