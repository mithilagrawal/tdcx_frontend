import { BrowserRouter, Switch } from "react-router-dom";
import reduxThunk from 'redux-thunk';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { Route, Redirect } from 'react-router-dom';

import { ToastContainer } from 'react-toastify';
import Login from './components/web/Login.Component/Login.Component';
import Dashboard from './components/dashboard/Dashboard.Component/Dashboard.Component';
import PublicRoute from "./router/publicRoute";
import PrivateRoute from "./router/privateRoute";

import 'react-toastify/dist/ReactToastify.css';
import reducer from "./reducer";
import { useEffect } from "react";
import './App.css';
function App() {
  useEffect(() => {
    // 👇️ set style on body element
    document.body.classList.add('body-css');
  }, [])
  return (
    <>
      <Provider store={createStore(reducer, {}, applyMiddleware(reduxThunk))}>
        <BrowserRouter>
          <Switch>
            <Route path='/' exact render={props => <Redirect to='/login' />} />
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
