import { Action } from 'redux-first-router';
import Routes from '../routes';

export interface ICompanyPayload
{
    code: string;
}


export interface ICompanyComponent
{
    companyCode: string;
    component: any;
}

export interface ICompanyFoundAction extends Action
{
    type: Routes | 'COMPANY_FOUND' | '@@redux-first-router/NOT_FOUND';
    payload: ICompanyComponent;
}

