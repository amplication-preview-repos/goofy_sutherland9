import { SortOrder } from "../../util/SortOrder";

export type ResolvedTicketsOrderByInput = {
  createdAt?: SortOrder;
  employeeId?: SortOrder;
  id?: SortOrder;
  month?: SortOrder;
  ticketCount?: SortOrder;
  updatedAt?: SortOrder;
  year?: SortOrder;
};
