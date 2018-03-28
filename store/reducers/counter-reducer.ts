import { Action } from 'redux';

export interface ICounterAction extends Action
{
    type: CounterKind;
}

export enum CounterKind
{
    INCREMENT = 'INCREMENT',
    DECREMENT = 'DECREMENT'
}

export default function counterReducer(
    state: number = 0,
    action: ICounterAction
): number
{
    // noinspection TsLint
    console.log('state from counter reducer: ');
    // noinspection TsLint
    console.log(state);


    switch (action.type) {
        case CounterKind.INCREMENT:
            return state + 1;
        case CounterKind.DECREMENT:
            return state - 1;
        default:
            return state;
    }
}
