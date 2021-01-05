import { GET_PROJECTS, PROJECT_ERROR } from "../../types";

export default (state, action) => {
  switch (action.type) {
    case GET_PROJECTS:
      return {
        ...state,
        projects: action.payload,
        loading: false,
      };
    case PROJECT_ERROR:
      return {
        ...state,
        message: action.payload,
        loading: false,
      };
    default:
      return state;
  }
};
