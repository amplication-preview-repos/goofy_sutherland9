import { EmployeeWhereUniqueInput } from "../employee/EmployeeWhereUniqueInput";

export type ResolvedTicketsUpdateInput = {
  employee?: EmployeeWhereUniqueInput | null;
  month?: number | null;
  ticketCount?: number | null;
  year?: number | null;
};
