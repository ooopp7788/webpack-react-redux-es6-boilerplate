import { COUNTER_INC, COUNTER_DEC } from 'actions/counterActions';

const initialState = 0;

export default function counter(state = initialState, action) {

  switch (action.type) {
    case COUNTER_INC:
      return state + 1;

    case COUNTER_DEC:
      return state - 1;

    default:
      return state;
  }
}
