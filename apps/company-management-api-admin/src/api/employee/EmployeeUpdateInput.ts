import { ResolvedTicketsUpdateManyWithoutEmployeesInput } from "./ResolvedTicketsUpdateManyWithoutEmployeesInput";
import { TeamWhereUniqueInput } from "../team/TeamWhereUniqueInput";

export type EmployeeUpdateInput = {
  email?: string | null;
  name?: string | null;
  position?: string | null;
  resolvedTicketsItems?: ResolvedTicketsUpdateManyWithoutEmployeesInput;
  team?: TeamWhereUniqueInput | null;
};
