import { Action } from 'redux';
import Routes from '../routes';


export interface IUserActionNoPayload extends Action
{
    type: Routes | '@@redux-first-router/NOT_FOUND';
    payload?: IUserPayload;
}

export interface IUserAction extends IUserActionNoPayload
{
    payload: IUserPayload;
}


export interface IUserPayload
{
    id: number;
}
