import * as React from 'react';
import Counter from './Counter';

import { connect } from 'react-redux';

import Link from 'redux-first-router-link';

import IRootState from '../store/models/_i-root-state';
import { IUserAction } from '../store/routers/user-id/action';

import Routes from '../store/routers/routes';

import { hot } from 'react-hot-loader';
import { CounterKind, ICounterAction } from '../store/reducers/counter-reducer';

interface IComponentStates
{
    rootState: IRootState;
}

interface IComponentDispatches
{
    goToUser(userId: number): void;
    increment(): void;
    decrement(): void;
}


interface IComponentProps extends IComponentStates, IComponentDispatches
{
}


class App extends React.Component<IComponentProps, {}>
{
    constructor(props: IComponentProps)
    {
        super(props);
    }

    public render(): JSX.Element
    {
        return (
            <h1>
                Hello, World.<br/>
                <button type='button' onClick={this.props.increment}>Increment</button>
                <button type='button' onClick={this.props.decrement}>Decrement</button>
                &nbsp; {this.props.rootState.counter}
                <br/>
                <Link to='/'>Home sweet home.</Link><br/>
                <Counter /><br/>
                Hello, World again.<br/>
                <Link to='/user/123'>User 123</Link><br/>
                <Link to={{ type: 'USER', payload: {id: 168} }}>User 168</Link><br/>
                <button onClick={this.goToUser520}>Go to user 520</button><br/>
                User id: {this.props.rootState.userId}
                <hr/>

                <Link to='/company/FB'>Company FB</Link><br/>
                <Link to={{ type: 'COMPANY', payload: {code: 'AAPL'} }}>Company Apple</Link><br/>

                <hr/>
                {this.props.rootState.company && <this.props.rootState.company.component/>}
            </h1>
        );
    }

    private goToUser520 = () => {
        this.props.goToUser(520);
    };

}

function mapStateToProps(state: IRootState): IComponentStates
{
    const props: IComponentStates = {
        rootState: state
    };

    return props;
}


type ActionsUsed = IUserAction | ICounterAction;

const mapDispatchToProps = (dispatch: (action: ActionsUsed) => void): IComponentDispatches =>
    ({
        goToUser: (userId: number): void => dispatch({type: Routes.USER, payload: {id: userId}}),
        increment: (): void => dispatch({type: CounterKind.INCREMENT}),
        decrement: (): void => dispatch({type: CounterKind.DECREMENT})
    });

export default hot(module)(
    connect(mapStateToProps, mapDispatchToProps)(App)
);
