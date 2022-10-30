import { BrowserRouter, Switch } from "react-router-dom";

import { ToastContainer } from 'react-toastify';
import Login from './components/web/Login.Component/Login.Component';
import Dashboard from './components/dashboard/Dashboard.Component/Dashboard.Component';
import PublicRoute from "./router/publicRoute";
import PrivateRoute from "./router/privateRoute";

import 'react-toastify/dist/ReactToastify.css';
import './static/css/bootstrap.css';
function App() {
  return (
    <>
      <BrowserRouter>
        <Switch>
          <PublicRoute restricted={false} path='/login' component={Login} />
          <PrivateRoute exact path='/dashboard' component={Dashboard} />
        </Switch>
      </BrowserRouter>
      <ToastContainer />
    </>
  );
}

export default App;
