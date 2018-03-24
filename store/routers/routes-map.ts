import Routes from './routes';

import { companyThunk } from './company/thunk';

import { RouteObject, RouteThunk } from 'redux-first-router';

import IRootState from '../models/_i-root-state';

const routesMap: {[route in Routes]: string | RouteObject<{}, IRootState>} = {
    HOME: '/',
    USER: '/user/:id',
    COMPANY: {path: '/company/:code', thunk: companyThunk}
};

export default routesMap;
