import { EMAIL_ERROR, SEND_EMAIL, EMAIL_SENDING } from "../../types";

export default (state, action) => {
  switch (action.type) {
    case SEND_EMAIL:
      return {
        ...state,
        sending: false,
        sent: true,
      };
    case EMAIL_SENDING:
      return {
        ...state,
        sending: true,
      };
    case EMAIL_ERROR:
      return {
        ...state,
        error: action.payload,
        sending: false,
        sent: false,
      };
    default:
      return state;
  }
};
