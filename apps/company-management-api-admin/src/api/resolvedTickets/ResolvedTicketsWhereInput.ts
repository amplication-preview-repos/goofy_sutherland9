import { EmployeeWhereUniqueInput } from "../employee/EmployeeWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";

export type ResolvedTicketsWhereInput = {
  employee?: EmployeeWhereUniqueInput;
  id?: StringFilter;
  month?: IntNullableFilter;
  ticketCount?: IntNullableFilter;
  year?: IntNullableFilter;
};
