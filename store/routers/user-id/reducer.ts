import { NOT_FOUND } from 'redux-first-router';
import { IUserActionNoPayload } from './action';

import Routes from '../routes';

export default function userIdReducer(
    state: any = null, action: IUserActionNoPayload = {type: NOT_FOUND}
): number | null
{
    switch (action.type) {
        case Routes.HOME:
        case NOT_FOUND:
            return null;
        case Routes.USER:
            if (action.payload && action.payload.id) {
                return action.payload.id;
            }
            else {
                return null;
            }
        default:
            return state;
    }
}

