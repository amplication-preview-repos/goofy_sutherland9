import { EmployeeCreateNestedManyWithoutTeamsInput } from "./EmployeeCreateNestedManyWithoutTeamsInput";

export type TeamCreateInput = {
  department?: string | null;
  employees?: EmployeeCreateNestedManyWithoutTeamsInput;
  name?: string | null;
};
