import { SET_POSITION, SET_SECTION, SET_SELECTED_SECTION, SET_TOP_SECTIONS } from "../../types";

export default (state, action) => {
  switch (action.type) {
    case SET_POSITION:
      return {
        ...state,
        position: action.payload,
      };
    case SET_SECTION:
      return {
        ...state,
        actualSection: action.payload,
      };
    case SET_SELECTED_SECTION:
      return {
        ...state,
        selectedSection: action.payload,
      };
    case SET_TOP_SECTIONS:
      return {
        ...state,
        topSections: action.payload,
      };
    default:
      return state;
  }
};
