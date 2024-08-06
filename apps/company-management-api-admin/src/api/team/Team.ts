import { Employee } from "../employee/Employee";

export type Team = {
  createdAt: Date;
  department: string | null;
  employees?: Array<Employee>;
  id: string;
  name: string | null;
  updatedAt: Date;
};
