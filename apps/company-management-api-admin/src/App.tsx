import React, { useEffect, useState } from "react";
import { Admin, DataProvider, Resource } from "react-admin";
import buildGraphQLProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { EmployeeList } from "./employee/EmployeeList";
import { EmployeeCreate } from "./employee/EmployeeCreate";
import { EmployeeEdit } from "./employee/EmployeeEdit";
import { EmployeeShow } from "./employee/EmployeeShow";
import { ResolvedTicketsList } from "./resolvedTickets/ResolvedTicketsList";
import { ResolvedTicketsCreate } from "./resolvedTickets/ResolvedTicketsCreate";
import { ResolvedTicketsEdit } from "./resolvedTickets/ResolvedTicketsEdit";
import { ResolvedTicketsShow } from "./resolvedTickets/ResolvedTicketsShow";
import { TeamList } from "./team/TeamList";
import { TeamCreate } from "./team/TeamCreate";
import { TeamEdit } from "./team/TeamEdit";
import { TeamShow } from "./team/TeamShow";
import { jwtAuthProvider } from "./auth-provider/ra-auth-jwt";

const App = (): React.ReactElement => {
  const [dataProvider, setDataProvider] = useState<DataProvider | null>(null);
  useEffect(() => {
    buildGraphQLProvider
      .then((provider: any) => {
        setDataProvider(() => provider);
      })
      .catch((error: any) => {
        console.log(error);
      });
  }, []);
  if (!dataProvider) {
    return <div>Loading</div>;
  }
  return (
    <div className="App">
      <Admin
        title={"CompanyManagementAPI"}
        dataProvider={dataProvider}
        authProvider={jwtAuthProvider}
        theme={theme}
        dashboard={Dashboard}
        loginPage={Login}
      >
        <Resource
          name="Employee"
          list={EmployeeList}
          edit={EmployeeEdit}
          create={EmployeeCreate}
          show={EmployeeShow}
        />
        <Resource
          name="ResolvedTickets"
          list={ResolvedTicketsList}
          edit={ResolvedTicketsEdit}
          create={ResolvedTicketsCreate}
          show={ResolvedTicketsShow}
        />
        <Resource
          name="Team"
          list={TeamList}
          edit={TeamEdit}
          create={TeamCreate}
          show={TeamShow}
        />
      </Admin>
    </div>
  );
};

export default App;
