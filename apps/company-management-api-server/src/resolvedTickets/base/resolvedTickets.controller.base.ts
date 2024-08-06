/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { isRecordNotFoundError } from "../../prisma.util";
import * as errors from "../../errors";
import { Request } from "express";
import { plainToClass } from "class-transformer";
import { ApiNestedQuery } from "../../decorators/api-nested-query.decorator";
import { ResolvedTicketsService } from "../resolvedTickets.service";
import { ResolvedTicketsCreateInput } from "./ResolvedTicketsCreateInput";
import { ResolvedTickets } from "./ResolvedTickets";
import { ResolvedTicketsFindManyArgs } from "./ResolvedTicketsFindManyArgs";
import { ResolvedTicketsWhereUniqueInput } from "./ResolvedTicketsWhereUniqueInput";
import { ResolvedTicketsUpdateInput } from "./ResolvedTicketsUpdateInput";

export class ResolvedTicketsControllerBase {
  constructor(protected readonly service: ResolvedTicketsService) {}
  @common.Post()
  @swagger.ApiCreatedResponse({ type: ResolvedTickets })
  async createResolvedTickets(
    @common.Body() data: ResolvedTicketsCreateInput
  ): Promise<ResolvedTickets> {
    return await this.service.createResolvedTickets({
      data: {
        ...data,

        employee: data.employee
          ? {
              connect: data.employee,
            }
          : undefined,
      },
      select: {
        createdAt: true,

        employee: {
          select: {
            id: true,
          },
        },

        id: true,
        month: true,
        ticketCount: true,
        updatedAt: true,
        year: true,
      },
    });
  }

  @common.Get()
  @swagger.ApiOkResponse({ type: [ResolvedTickets] })
  @ApiNestedQuery(ResolvedTicketsFindManyArgs)
  async resolvedTicketsItems(
    @common.Req() request: Request
  ): Promise<ResolvedTickets[]> {
    const args = plainToClass(ResolvedTicketsFindManyArgs, request.query);
    return this.service.resolvedTicketsItems({
      ...args,
      select: {
        createdAt: true,

        employee: {
          select: {
            id: true,
          },
        },

        id: true,
        month: true,
        ticketCount: true,
        updatedAt: true,
        year: true,
      },
    });
  }

  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: ResolvedTickets })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async resolvedTickets(
    @common.Param() params: ResolvedTicketsWhereUniqueInput
  ): Promise<ResolvedTickets | null> {
    const result = await this.service.resolvedTickets({
      where: params,
      select: {
        createdAt: true,

        employee: {
          select: {
            id: true,
          },
        },

        id: true,
        month: true,
        ticketCount: true,
        updatedAt: true,
        year: true,
      },
    });
    if (result === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return result;
  }

  @common.Patch("/:id")
  @swagger.ApiOkResponse({ type: ResolvedTickets })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async updateResolvedTickets(
    @common.Param() params: ResolvedTicketsWhereUniqueInput,
    @common.Body() data: ResolvedTicketsUpdateInput
  ): Promise<ResolvedTickets | null> {
    try {
      return await this.service.updateResolvedTickets({
        where: params,
        data: {
          ...data,

          employee: data.employee
            ? {
                connect: data.employee,
              }
            : undefined,
        },
        select: {
          createdAt: true,

          employee: {
            select: {
              id: true,
            },
          },

          id: true,
          month: true,
          ticketCount: true,
          updatedAt: true,
          year: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.Delete("/:id")
  @swagger.ApiOkResponse({ type: ResolvedTickets })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async deleteResolvedTickets(
    @common.Param() params: ResolvedTicketsWhereUniqueInput
  ): Promise<ResolvedTickets | null> {
    try {
      return await this.service.deleteResolvedTickets({
        where: params,
        select: {
          createdAt: true,

          employee: {
            select: {
              id: true,
            },
          },

          id: true,
          month: true,
          ticketCount: true,
          updatedAt: true,
          year: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }
}
