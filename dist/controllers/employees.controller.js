"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getEmployees = void 0;
const employee_model_1 = require("../models/employee.model");
const getEmployees = async (req, res) => {
    try {
        console.log("Fetching employees..." + new Date().toISOString());
        const employees = await employee_model_1.EmployeeModel.find();
        res.status(200).json(employees);
    }
    catch (error) {
        res.status(500).json({ message: "Error fetching employees", error });
    }
};
exports.getEmployees = getEmployees;
//# sourceMappingURL=employees.controller.js.map