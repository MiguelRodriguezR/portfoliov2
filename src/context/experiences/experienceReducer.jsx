import { GET_EXPERIENCES, EXPERIENCE_ERROR } from "../../types";

export default (state, action) => {
  switch (action.type) {
    case GET_EXPERIENCES:
      return {
        ...state,
        experiences: action.payload,
        loading: false,
      };
    case EXPERIENCE_ERROR:
      return {
        ...state,
        message: action.payload,
      };
    default:
      return state;
  }
};
