// noinspection TsLint
require('expose-loader?Promise!bluebird');


import * as React from 'react';
import * as ReactDOM from 'react-dom';

import RootContainer from './App';

import { Provider } from 'react-redux';
import configureStore from '../store/configure';

import { AppContainer as HotLoaderAppContainer } from 'react-hot-loader';


const root = document.getElementById('root');

const store = configureStore();


function render(Component: React.ComponentType): void
{
    ReactDOM.render(
        <HotLoaderAppContainer>
            <Provider store={store}>
                <Component />
            </Provider>
        </HotLoaderAppContainer>,
        root
    );
}

if (module.hot) {
    // noinspection TsLint
    console.log('hot');


    render(RootContainer);


    module.hot.accept('./App', () => {
        // noinspection TsLint
        const NextRootContainer = require('./App').default;

        // for some odd reasons, passing NextRootContainer to render causes the whole page to reload
        // whenever the code is changed, instead of just a portion of it.

        render(RootContainer);
    });
}
else {
    // noinspection TsLint
    console.log('cold');
    // TODO: Create build script. Create a non-hot-loaded render
}
