import { connectRoutes } from 'redux-first-router';

import { applyMiddleware, combineReducers, compose, createStore, Reducer } from 'redux';

// import createHistory from 'history/createBrowserHistory';
import { createBrowserHistory as createHistory } from 'history';

import IRootState from './models/_i-root-state';
import routesMap from './routers/routes-map';

import companyComponentReducer from './routers/company/reducer';
import userIdReducer from './routers/user-id/reducer';


const history = createHistory();

const {reducer: locationReducer, middleware, enhancer} = connectRoutes(history, routesMap);

const reducers: {[name in keyof IRootState]: Reducer<any>} = {
    userId: userIdReducer,
    location: locationReducer,
    company: companyComponentReducer
};


const rootReducer = combineReducers<IRootState>(reducers);

const middlewares = applyMiddleware(middleware);

// noinspection TsLint
const composeEnhancers = (window as any)['__REDUX_DEVTOOLS_EXTENSION_COMPOSE__'] || compose;
const composed = composeEnhancers(enhancer, middlewares);


const store = createStore<IRootState>(rootReducer, composed);

export default store;

