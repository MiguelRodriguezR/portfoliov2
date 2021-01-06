import { useReducer } from "react";
import { SET_POSITION, SET_SECTION, SET_SELECTED_SECTION, SET_TOP_SECTIONS } from "../../types";
import ScrollContext from "./scrollContext";
import scrollReducer from "./scrollReducer";

const ScrollState = (props) => {
  const initialState = {
    position: 0,
    topSections: {'myWork':0 ,'about':0, 'contact':0},
    actualSection: null,
    selectedSection: null,
  };

  const [state, dispatch] = useReducer(scrollReducer, initialState);

  const setPosition = (position) =>{
    dispatch({
      type: SET_POSITION,
      payload: position,
    });
  }

  const setActualSection = (section) =>{
    dispatch({
      type: SET_SECTION,
      payload: section,
    });
  }

  const setSelectedSection = (section) =>{
    dispatch({
      type: SET_SELECTED_SECTION,
      payload: section,
    });
  }

  const setTopSections = (top) =>{
    dispatch({
      type: SET_TOP_SECTIONS,
      payload: top,
    });
  }

  return (
    <ScrollContext.Provider
      value={{
        position: state.position,
        actualSection: state.actualSection,
        topSections: state.topSections,
        selectedSection: state.selectedSection,
        setPosition,
        setActualSection,
        setSelectedSection,
        setTopSections
      }}
    >
      {props.children}
    </ScrollContext.Provider>
  );
};

export default ScrollState;
