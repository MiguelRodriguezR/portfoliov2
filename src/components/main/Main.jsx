import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ProjectState from "../../context/projects/projectState";
import Pcontainer from "../layout/pcontainer";

const Main = () => {
  return (
    <ProjectState>
      <Router>
        <Switch>
          <Route exact path="/" component={Pcontainer}></Route>
        </Switch>
      </Router>
    </ProjectState>
  );
};

export default Main;
