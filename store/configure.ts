import { applyMiddleware, compose, createStore, Store } from 'redux';

import combinedReducers, { enhancer, middleware } from './combined-reducers';

import IRootState from './models/_i-root-state';


export default function configureStore(): Store<IRootState>
{
    const middlewares = applyMiddleware(middleware);

    // noinspection TsLint
    const composeEnhancers = (window as any)['__REDUX_DEVTOOLS_EXTENSION_COMPOSE__'] || compose;
    const composed         = composeEnhancers(enhancer, middlewares);

    const store = createStore<IRootState>(combinedReducers, composed);

    return store;
}
