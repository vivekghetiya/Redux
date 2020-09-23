import { ADD_COUNT } from "../constant";

export const addCount = (data) => {
  return {
    type: ADD_COUNT,
    data: data,
  };
};
