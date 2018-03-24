import * as React from 'react';
import Counter from './Counter';

import { connect } from 'react-redux';

import Link from 'redux-first-router-link';

import IRootState from '../store/models/_i-root-state';
import { IUserAction } from '../store/routers/user-id/action';

import Routes from '../store/routers/routes';

interface IComponentStates
{
    rootState: IRootState;
}

interface IComponentDispatches
{
    goToUser(userId: number): void;
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
            <div>
                Hello, you are great.<br/>
                Company: {this.props.rootState.company.companyCode}<br/>

                <button onClick={this.goToUser520}>Go to user 520</button><br/>
            </div>
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

const mapDispatchToProps = (dispatch: (action: IUserAction) => void) =>
    ({
        goToUser: (userId: number): void => dispatch({type: Routes.USER, payload: {id: userId}})
    });

export default connect(mapStateToProps, mapDispatchToProps)(App);
