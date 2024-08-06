/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { ResolvedTicketsWhereInput } from "./ResolvedTicketsWhereInput";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";

@InputType()
class ResolvedTicketsListRelationFilter {
  @ApiProperty({
    required: false,
    type: () => ResolvedTicketsWhereInput,
  })
  @ValidateNested()
  @Type(() => ResolvedTicketsWhereInput)
  @IsOptional()
  @Field(() => ResolvedTicketsWhereInput, {
    nullable: true,
  })
  every?: ResolvedTicketsWhereInput;

  @ApiProperty({
    required: false,
    type: () => ResolvedTicketsWhereInput,
  })
  @ValidateNested()
  @Type(() => ResolvedTicketsWhereInput)
  @IsOptional()
  @Field(() => ResolvedTicketsWhereInput, {
    nullable: true,
  })
  some?: ResolvedTicketsWhereInput;

  @ApiProperty({
    required: false,
    type: () => ResolvedTicketsWhereInput,
  })
  @ValidateNested()
  @Type(() => ResolvedTicketsWhereInput)
  @IsOptional()
  @Field(() => ResolvedTicketsWhereInput, {
    nullable: true,
  })
  none?: ResolvedTicketsWhereInput;
}
export { ResolvedTicketsListRelationFilter as ResolvedTicketsListRelationFilter };
