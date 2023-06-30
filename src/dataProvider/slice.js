import { produce } from 'immer';

const initialState = {
  accessToken: '',
};

const reducer = (state = initialState, { type, payload }) =>
  produce(state, (draft) => {
    switch (type) {
      case 'accessToken':
        draft.accessToken = payload;
        break;
      default:
        return draft;
    }
  });

export default reducer;
