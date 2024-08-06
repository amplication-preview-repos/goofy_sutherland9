import { ResolvedTickets } from "../resolvedTickets/ResolvedTickets";
import { Team } from "../team/Team";

export type Employee = {
  createdAt: Date;
  email: string | null;
  id: string;
  name: string | null;
  position: string | null;
  resolvedTicketsItems?: Array<ResolvedTickets>;
  team?: Team | null;
  updatedAt: Date;
};
