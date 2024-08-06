import { ResolvedTickets as TResolvedTickets } from "../api/resolvedTickets/ResolvedTickets";

export const RESOLVEDTICKETS_TITLE_FIELD = "id";

export const ResolvedTicketsTitle = (record: TResolvedTickets): string => {
  return record.id?.toString() || String(record.id);
};
