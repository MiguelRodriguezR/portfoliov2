import { useReducer } from "react";
import clientAxios from "../../config/axios";
import { GET_EXPERIENCES, EXPERIENCE_ERROR } from "../../types";
import ExperienceContext from "./experienceContext";
import experienceReducer from "./experienceReducer";

const ExperienceState = (props) => {
  const initialState = {
    experiences: [],
    error: false,
    loading: true,
    message: null,
  };

  const [state, dispatch] = useReducer(experienceReducer, initialState);

  const getExperiences = async () => {
    try {
      const result = await clientAxios.get("/api/experiences");
      result.data.experiences.map((e) => (e.id = e._id));
      dispatch({
        type: GET_EXPERIENCES,
        payload: result.data.experiences.sort((e1, e2) =>
          e1.position > e2.position ? 1 : -1
        ),
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
      type: EXPERIENCE_ERROR,
      payload: alert,
    });
  };

  return (
    <ExperienceContext.Provider
      value={{
        loading: state.loading,
        experiences: state.experiences,
        error: state.errorForm,
        message: state.message,
        getExperiences,
      }}
    >
      {props.children}
    </ExperienceContext.Provider>
  );
};

export default ExperienceState;
