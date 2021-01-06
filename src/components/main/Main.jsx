import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import EmailState from "../../context/emails/emailState";
import ProjectState from "../../context/projects/projectState";
import ScrollState from "../../context/scroll/scrollState";
import Pcontainer from "../layout/pcontainer";

const Main = () => {
  return (
    <ProjectState>
      <EmailState>
        <ScrollState>
          <Router>
            <Switch>
              <Route exact path="/portfoliov2" component={Pcontainer}></Route>
            </Switch>
          </Router>
        </ScrollState>
      </EmailState>
    </ProjectState>
  );
};

export default Main;
