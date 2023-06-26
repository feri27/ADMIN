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
import Location from "./location/location";
import Team from "./team/team";
import Clientcontact from "./contact/clientcontact";
import Login from "./login/login";
import { Link, useLocation } from "react-router-dom";
import { useEffect } from "react";
import Clientdetail from "./clientdetail/clientdetail";
import Allinspection from "./allinspection/allinspection";

function App() {

  const location = useLocation();
  useEffect(() => [location])

  return (
    <div>{location.pathname==='/login'?<><Route path="/login">
    <Login/>
  </Route></>:<><Template>
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
      <Route path="/clientdetail">
        <Clientdetail/>
      </Route>
      <Route path="/template">
        <Frmtemplate/>
      </Route>
      <Route path="/location">
        <Location/>
      </Route>

      <Route path="/contact">
        <Clientcontact/>
      </Route>

      <Route path="/allinspection">
        <Allinspection/>
      </Route>

      <Route path="/team">
        <Team/>
      </Route>

      <Redirect from="/" to="/login" exact />
     
    </Switch>
  </Template></>}
        
    </div>
    
  );
}

export default App;
