import { LocationState } from 'redux-first-router';
import { ICompanyComponent } from '../routers/company/action';

export default interface IRootState
{
    userId: number;

    location: LocationState;

    company: ICompanyComponent;
}
