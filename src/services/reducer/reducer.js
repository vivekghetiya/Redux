import { ADD_COUNT } from "../constant";

export const initialState = {
  countData: [],
};

export default function Counts(state = [], action) {
  switch (action.type) {
    case ADD_COUNT:
      return [
        ...state,
        {
          countData: action.data,
        },
      ];
    default:
      return state;
  }
}
