import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  ReferenceInput,
  SelectInput,
  NumberInput,
} from "react-admin";
import { EmployeeTitle } from "../employee/EmployeeTitle";

export const ResolvedTicketsEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
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
    </Edit>
  );
};
