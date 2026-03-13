import mongoose from "mongoose";

const departmentEnum = ['HR', 'Engineering', 'Sales', 'Finance', 'Marketing'] as const;

const employeeSchema = new mongoose.Schema({
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
}, {collection: 'employees'});

export const EmployeeModel = mongoose.model("Employee", employeeSchema);