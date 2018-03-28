import { connectRoutes } from 'redux-first-router';

import { applyMiddleware, combineReducers, createStore, Reducer } from 'redux';

import { createBrowserHistory as createHistory } from 'history';

import IRootState from './models/_i-root-state';
import routesMap from './routers/routes-map';

import counterReducer from './reducers/counter-reducer';
import companyComponentReducer from './routers/company/reducer';
import userIdReducer from './routers/user-id/reducer';


const history = createHistory();

const {reducer: locationReducer, middleware, enhancer} = connectRoutes(history, routesMap);

const reducers: {[name in keyof IRootState]: Reducer<any>} = {
    userId: userIdReducer,
    location: locationReducer,
    company: companyComponentReducer,
    counter: counterReducer
};


const combinedReducers = combineReducers<IRootState>(reducers);

export {
    middleware,
    enhancer
};

export default combinedReducers;
