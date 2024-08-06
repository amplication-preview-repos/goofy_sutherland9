import { SortOrder } from "../../util/SortOrder";

export type EmployeeOrderByInput = {
  createdAt?: SortOrder;
  email?: SortOrder;
  id?: SortOrder;
  name?: SortOrder;
  position?: SortOrder;
  teamId?: SortOrder;
  updatedAt?: SortOrder;
};
