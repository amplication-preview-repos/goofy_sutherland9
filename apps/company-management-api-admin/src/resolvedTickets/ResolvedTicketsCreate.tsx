import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  ReferenceInput,
  SelectInput,
  NumberInput,
} from "react-admin";
import { EmployeeTitle } from "../employee/EmployeeTitle";

export const ResolvedTicketsCreate = (
  props: CreateProps
): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <ReferenceInput
          source="employee.id"
          reference="Employee"
          label="Employee"
        >
          <SelectInput optionText={EmployeeTitle} />
        </ReferenceInput>
        <NumberInput step={1} label="month" source="month" />
        <NumberInput step={1} label="ticketCount" source="ticketCount" />
        <NumberInput step={1} label="year" source="year" />
      </SimpleForm>
    </Create>
  );
};
