import { Module } from "@nestjs/common";
import { ResolvedTicketsModuleBase } from "./base/resolvedTickets.module.base";
import { ResolvedTicketsService } from "./resolvedTickets.service";
import { ResolvedTicketsController } from "./resolvedTickets.controller";
import { ResolvedTicketsResolver } from "./resolvedTickets.resolver";

@Module({
  imports: [ResolvedTicketsModuleBase],
  controllers: [ResolvedTicketsController],
  providers: [ResolvedTicketsService, ResolvedTicketsResolver],
  exports: [ResolvedTicketsService],
})
export class ResolvedTicketsModule {}
