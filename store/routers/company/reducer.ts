import { ICompanyComponent, ICompanyFoundAction } from './action';

import { Reducer } from 'redux';

import { NOT_FOUND } from 'redux-first-router';
import IRootState from '../../models/_i-root-state';
import Routes from '../routes';

export default function companyComponentReducer(
    state: any = null,
    action: ICompanyFoundAction
): ICompanyComponent | null
{
    // noinspection TsLint
    console.log('state: ');
    // noinspection TsLint
    console.log(state);

    switch (action.type) {
        case Routes.HOME:
        case NOT_FOUND:
            return null;
        case 'COMPANY_FOUND':
            return action.payload;
        default:
            return state;
    }
}

