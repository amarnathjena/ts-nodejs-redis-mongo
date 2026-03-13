import { Request, Response } from "express";
import { EmployeeModel } from "../models/employee.model";

export const getEmployees = async (req: Request, res: Response) => {
  try {
    console.log("Fetching employees..."+new Date().toISOString());
    const employees = await EmployeeModel.find();
    res.status(200).json(employees);
  } catch (error) {
    res.status(500).json({ message: "Error fetching employees", error });
  }
};