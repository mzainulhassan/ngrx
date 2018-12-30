import { CounterActionTypes, CounterActions } from '../actions/counter.actions';

export interface Counter {
  value: number
}

export const initialState: Counter = {
  value: 0
};

export function reducer(state = initialState, action: CounterActions): Counter {
  switch (action.type) {

    case CounterActionTypes.INCREMENT:
      state.value = state.value + 1;
      return state;

    case CounterActionTypes.DECREMENT:
      state.value = state.value - 1;
      return state;

    case CounterActionTypes.RESET:
      state.value = 0;
      return state;

    case CounterActionTypes.SET:
      return action.payload;

    default:
      return state;
  }
}
