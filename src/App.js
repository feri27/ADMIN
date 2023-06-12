import Template from "./template/Template";
import Dashboard from "./dashboard/Dashboard";
import Forms from "./forms/Forms";
import { Switch, Route, Redirect } from "react-router-dom";
import Tables from "./tables/Tables";
import Formbuilder from "./formbuilder/formbuilder";

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
        <Redirect from="/" to="/dashboard" exact />
      </Switch>
    </Template>
  );
}

export default App;
