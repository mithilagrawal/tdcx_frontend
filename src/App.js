import { BrowserRouter, Switch } from "react-router-dom";
import reduxThunk from 'redux-thunk';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';

import { ToastContainer } from 'react-toastify';
import Login from './components/web/Login.Component/Login.Component';
import Dashboard from './components/dashboard/Dashboard.Component/Dashboard.Component';
import PublicRoute from "./router/publicRoute";
import PrivateRoute from "./router/privateRoute";

import 'react-toastify/dist/ReactToastify.css';
import reducer from "./reducer";
// import './static/css/bootstrap.css';
function App() {
  return (
    <>
      <Provider store={createStore(reducer, {}, applyMiddleware(reduxThunk))}>
        <BrowserRouter>
          <Switch>
            <PublicRoute restricted={false} path='/login' component={Login} />
            <PrivateRoute exact path='/dashboard' component={Dashboard} />
          </Switch>
        </BrowserRouter>
      </Provider>
      <ToastContainer />
    </>
  );
}

export default App;
