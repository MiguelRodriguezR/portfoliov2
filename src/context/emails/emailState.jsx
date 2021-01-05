import { useReducer } from "react";
import clientAxios from "../../config/axios";
import { EMAIL_ERROR, SEND_EMAIL, EMAIL_SENDING } from "../../types";
import EmailContext from "./emailContext";
import emailReducer from "./emailReducer";

const EmailState = (props) => {
  const initialState = {
    sending: false,
    error:null,
    sent: false
  };

  const [state, dispatch] = useReducer(emailReducer, initialState);

  const sendEmail = async (email) => {
    try {
      dispatch({
        type: EMAIL_SENDING,
        payload: true,
      });
      await clientAxios.post("/api/emails", email);
      dispatch({
        type: SEND_EMAIL,
        payload: initialState,
      });
    } catch (error) {
      dispatchError();
    }
  };

  const dispatchError = () => {
    const alert = {
      msg: "There was an error",
      category: "alerta-error",
    };
    dispatch({
      type: EMAIL_ERROR,
      payload: alert,
    });
  };

  return (
    <EmailContext.Provider
      value={{
        sending: state.sending,
        sent: state.sent,
        error: state.message,
        sendEmail,
      }}
    >
      {props.children}
    </EmailContext.Provider>
  );
};

export default EmailState;
