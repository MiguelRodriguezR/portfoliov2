import { useReducer } from "react";
import clientAxios from "../../config/axios";
import { GET_PROJECTS, PROJECT_ERROR } from "../../types";
import ProjectContext from "./projectContext";
import projectReducer from "./projectReducer";

const ProjectState = (props) => {
  const initialState = {
    projects: [],
    error: false,
    loading: true,
    message: null,
  };

  const [state, dispatch] = useReducer(projectReducer, initialState);

  const getProjects = async () => {
    try {
      const result = await clientAxios.get("/api/projects");
      result.data.projects.map((p) => (p.id = p._id));
      dispatch({
        type: GET_PROJECTS,
        payload: result.data.projects.sort( (p1,p2) => p1.position > p2.position ? 1 : -1),
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
      type: PROJECT_ERROR,
      payload: alert,
    });
  };

  return (
    <ProjectContext.Provider
      value={{
        loading: state.loading,
        projects: state.projects,
        error: state.errorForm,
        message: state.message,
        getProjects,
      }}
    >
      {props.children}
    </ProjectContext.Provider>
  );

};

export default ProjectState;
