import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { ResolvedTicketsServiceBase } from "./base/resolvedTickets.service.base";

@Injectable()
export class ResolvedTicketsService extends ResolvedTicketsServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
