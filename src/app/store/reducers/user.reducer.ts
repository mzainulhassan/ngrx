import { UserActionTypes, UserActions } from '../actions/user.actions';

export interface User {
  fname: string,
  lname: string
}

export const initialState: User = {
  fname: "",
  lname: ""
};

export function reducer(state = initialState, action: UserActions): User {
  switch (action.type) {

    case UserActionTypes.SET:
      return action.payload;

    case UserActionTypes.GET:
      return state;

    default:
      return state;
  }
}
