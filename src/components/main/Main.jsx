import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import EmailState from "../../context/emails/emailState";
import ProjectState from "../../context/projects/projectState";
import Pcontainer from "../layout/pcontainer";

const Main = () => {
  return (
    <ProjectState>
      <EmailState>
        <Router>
          <Switch>
            <Route exact path="/portfoliov2" component={Pcontainer}></Route>
          </Switch>
        </Router>
      </EmailState>
    </ProjectState>
  );
};

export default Main;
