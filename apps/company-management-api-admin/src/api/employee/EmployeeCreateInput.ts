import { ResolvedTicketsCreateNestedManyWithoutEmployeesInput } from "./ResolvedTicketsCreateNestedManyWithoutEmployeesInput";
import { TeamWhereUniqueInput } from "../team/TeamWhereUniqueInput";

export type EmployeeCreateInput = {
  email?: string | null;
  name?: string | null;
  position?: string | null;
  resolvedTicketsItems?: ResolvedTicketsCreateNestedManyWithoutEmployeesInput;
  team?: TeamWhereUniqueInput | null;
};
