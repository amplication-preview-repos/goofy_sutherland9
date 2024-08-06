import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  DateField,
  ReferenceField,
  TextField,
} from "react-admin";
import { EMPLOYEE_TITLE_FIELD } from "../employee/EmployeeTitle";

export const ResolvedTicketsShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <DateField source="createdAt" label="Created At" />
        <ReferenceField
          label="Employee"
          source="employee.id"
          reference="Employee"
        >
          <TextField source={EMPLOYEE_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="ID" source="id" />
        <TextField label="month" source="month" />
        <TextField label="ticketCount" source="ticketCount" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="year" source="year" />
      </SimpleShowLayout>
    </Show>
  );
};
