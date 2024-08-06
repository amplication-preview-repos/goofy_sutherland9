import { StringNullableFilter } from "../../util/StringNullableFilter";
import { EmployeeListRelationFilter } from "../employee/EmployeeListRelationFilter";
import { StringFilter } from "../../util/StringFilter";

export type TeamWhereInput = {
  department?: StringNullableFilter;
  employees?: EmployeeListRelationFilter;
  id?: StringFilter;
  name?: StringNullableFilter;
};
