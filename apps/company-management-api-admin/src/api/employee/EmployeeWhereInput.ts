import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { ResolvedTicketsListRelationFilter } from "../resolvedTickets/ResolvedTicketsListRelationFilter";
import { TeamWhereUniqueInput } from "../team/TeamWhereUniqueInput";

export type EmployeeWhereInput = {
  email?: StringNullableFilter;
  id?: StringFilter;
  name?: StringNullableFilter;
  position?: StringNullableFilter;
  resolvedTicketsItems?: ResolvedTicketsListRelationFilter;
  team?: TeamWhereUniqueInput;
};
