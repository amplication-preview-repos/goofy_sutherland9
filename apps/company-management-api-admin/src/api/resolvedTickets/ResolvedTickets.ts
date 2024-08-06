import { Employee } from "../employee/Employee";

export type ResolvedTickets = {
  createdAt: Date;
  employee?: Employee | null;
  id: string;
  month: number | null;
  ticketCount: number | null;
  updatedAt: Date;
  year: number | null;
};
