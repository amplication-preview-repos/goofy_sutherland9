import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { ResolvedTicketsService } from "./resolvedTickets.service";
import { ResolvedTicketsControllerBase } from "./base/resolvedTickets.controller.base";

@swagger.ApiTags("resolvedTickets")
@common.Controller("resolvedTickets")
export class ResolvedTicketsController extends ResolvedTicketsControllerBase {
  constructor(protected readonly service: ResolvedTicketsService) {
    super(service);
  }
}
