import Template from "./template/Template";
import Dashboard from "./dashboard/Dashboard";
import Forms from "./forms/Forms";
import { Switch, Route, Redirect } from "react-router-dom";
import Tables from "./tables/Tables";
import Formbuilder from "./formbuilder/formbuilder";
import Documents from "./documents/documents";
import Client from "./client/client";
import Addclient from "./addclient/addclient";
import FormProvider from "./addclient/store/FormProvider";
import Frmtemplate from "./frmtemplate/frmtemplate";
import Clientdetail from "./clientdetail/clientdetail";

function App() {
  return (
    <Template>
      <Switch>
        <Route path="/dashboard">
          <Dashboard />
        </Route>
        <Route path="/forms">
          <Forms />
        </Route>
        <Route path="/tables">
          <Tables />
        </Route>
        <Route path="/builder">
          <Formbuilder/>
        </Route>
        <Route path="/documents">
          <Documents/>
        </Route>
        <Route path="/client">
          <Client/>
        </Route>
        <Route path="/add-client">
        <FormProvider>
        <Addclient/>
        </FormProvider>
        </Route>
        <Route path="/template">
          <Frmtemplate/>
        </Route>
        <Route path="/clientdetail">
          <Clientdetail/>
        </Route>
        <Redirect from="/" to="/dashboard" exact />
      </Switch>
    </Template>
  );
}

export default App;
