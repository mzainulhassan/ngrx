import {
  ActionReducerMap,
} from '@ngrx/store';
import * as fromCounter from './reducers/counter.reducer';
import * as fromUser from './reducers/user.reducer';

export interface State {

  counter: fromCounter.Counter;
  user: fromUser.User;
}

export const reducers: ActionReducerMap<State> = {

  counter: fromCounter.reducer,
  user: fromUser.reducer
};