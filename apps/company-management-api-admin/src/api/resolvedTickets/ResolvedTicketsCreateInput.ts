import { EmployeeWhereUniqueInput } from "../employee/EmployeeWhereUniqueInput";

export type ResolvedTicketsCreateInput = {
  employee?: EmployeeWhereUniqueInput | null;
  month?: number | null;
  ticketCount?: number | null;
  year?: number | null;
};
