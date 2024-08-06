import { EmployeeUpdateManyWithoutTeamsInput } from "./EmployeeUpdateManyWithoutTeamsInput";

export type TeamUpdateInput = {
  department?: string | null;
  employees?: EmployeeUpdateManyWithoutTeamsInput;
  name?: string | null;
};
