import { Action, RouteThunk, StateGetter } from 'redux-first-router';
import IRootState from '../../models/_i-root-state';
import { ICompanyComponent, ICompanyFoundAction, ICompanyPayload } from './action';

export const companyThunk: RouteThunk<IRootState> = async (dispatch, getState) =>
{
    const company = getState().location.payload as ICompanyPayload;

    const c = await import(/* webpackChunkName: 'theCompany' */ '../../../front-end/Company');

    const companyComponent: ICompanyComponent = {
        component  : c.default,
        companyCode: company.code
    };

    const action: ICompanyFoundAction = {
        type   : 'COMPANY_FOUND',
        payload: companyComponent
    };

    dispatch(action);
};

