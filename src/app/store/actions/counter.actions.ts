import { Action } from '@ngrx/store';

export enum CounterActionTypes {
  INCREMENT = 'INCREMENT',
  DECREMENT = "DECREMENT",
  RESET = "RESET",
  SET = "[page1] SET"
}

export class Increment implements Action {
  readonly type = CounterActionTypes.INCREMENT;
}

export class Decrement implements Action {
  readonly type = CounterActionTypes.DECREMENT;
}

export class Reset implements Action {
  readonly type = CounterActionTypes.RESET;
}

export class Set implements Action {
  readonly type = CounterActionTypes.SET;
  constructor(public payload: { value: number }) { }
}


export type CounterActions = Increment | Decrement | Reset | Set;
