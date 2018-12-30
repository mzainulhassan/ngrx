import { Action } from '@ngrx/store';

export enum UserActionTypes {
  SET = "[page2] SET",
  GET = "GET"
}

export class Set implements Action {
  readonly type = UserActionTypes.SET;
  constructor(public payload: { fname: string, lname: string }) { }
}

export class Get implements Action {
  readonly type = UserActionTypes.GET;
}

export type UserActions = Set | Get;
