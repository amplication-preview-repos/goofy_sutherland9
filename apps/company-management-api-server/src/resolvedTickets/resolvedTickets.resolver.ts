import * as graphql from "@nestjs/graphql";
import { ResolvedTicketsResolverBase } from "./base/resolvedTickets.resolver.base";
import { ResolvedTickets } from "./base/ResolvedTickets";
import { ResolvedTicketsService } from "./resolvedTickets.service";

@graphql.Resolver(() => ResolvedTickets)
export class ResolvedTicketsResolver extends ResolvedTicketsResolverBase {
  constructor(protected readonly service: ResolvedTicketsService) {
    super(service);
  }
}
