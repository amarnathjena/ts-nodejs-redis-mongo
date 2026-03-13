import mongoose from "mongoose";
export declare const EmployeeModel: mongoose.Model<{
    id: number;
    name: string;
    email: string;
    department: "HR" | "Engineering" | "Sales" | "Finance" | "Marketing";
    salary: number;
}, {}, {}, {}, mongoose.Document<unknown, {}, {
    id: number;
    name: string;
    email: string;
    department: "HR" | "Engineering" | "Sales" | "Finance" | "Marketing";
    salary: number;
}, {}, {
    collection: string;
}> & {
    id: number;
    name: string;
    email: string;
    department: "HR" | "Engineering" | "Sales" | "Finance" | "Marketing";
    salary: number;
} & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}, mongoose.Schema<any, mongoose.Model<any, any, any, any, any, any, any>, {}, {}, {}, {}, {
    collection: string;
}, {
    id: number;
    name: string;
    email: string;
    department: "HR" | "Engineering" | "Sales" | "Finance" | "Marketing";
    salary: number;
}, mongoose.Document<unknown, {}, {
    id: number;
    name: string;
    email: string;
    department: "HR" | "Engineering" | "Sales" | "Finance" | "Marketing";
    salary: number;
}, {}, mongoose.MergeType<mongoose.DefaultSchemaOptions, {
    collection: string;
}>> & {
    id: number;
    name: string;
    email: string;
    department: "HR" | "Engineering" | "Sales" | "Finance" | "Marketing";
    salary: number;
} & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}, {
    [path: string]: mongoose.SchemaDefinitionProperty<undefined, any, any>;
} | {
    [x: string]: mongoose.SchemaDefinitionProperty<any, any, mongoose.Document<unknown, {}, {
        id: number;
        name: string;
        email: string;
        department: "HR" | "Engineering" | "Sales" | "Finance" | "Marketing";
        salary: number;
    }, {}, mongoose.MergeType<mongoose.DefaultSchemaOptions, {
        collection: string;
    }>> & {
        id: number;
        name: string;
        email: string;
        department: "HR" | "Engineering" | "Sales" | "Finance" | "Marketing";
        salary: number;
    } & {
        _id: mongoose.Types.ObjectId;
    } & {
        __v: number;
    }> | undefined;
}, {
    id: number;
    name: string;
    email: string;
    department: "HR" | "Engineering" | "Sales" | "Finance" | "Marketing";
    salary: number;
} & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}>, {
    id: number;
    name: string;
    email: string;
    department: "HR" | "Engineering" | "Sales" | "Finance" | "Marketing";
    salary: number;
} & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}>;
//# sourceMappingURL=employee.model.d.ts.map