import { ResolvedTicketsWhereInput } from "./ResolvedTicketsWhereInput";
import { ResolvedTicketsOrderByInput } from "./ResolvedTicketsOrderByInput";

export type ResolvedTicketsFindManyArgs = {
  where?: ResolvedTicketsWhereInput;
  orderBy?: Array<ResolvedTicketsOrderByInput>;
  skip?: number;
  take?: number;
};
