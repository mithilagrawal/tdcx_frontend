import React from 'react';

import './Dashboard.Component.css';

import Header from '../../common/Header.Component/Header.Component';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reduxThunk from 'redux-thunk';
import reducer from '../../../reducer';
import TaskList from './components/Tasklist.Component/TaskList.Component';
const Dashboard = () => {


    return (
        <>
            <Provider store={createStore(reducer, {}, applyMiddleware(reduxThunk))}>
                <div className='cont'>

                    <Header></Header>
                    <TaskList></TaskList>
                </div>
            </Provider>
        </>

    )

}

export default Dashboard;