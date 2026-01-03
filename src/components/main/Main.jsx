import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import EmailState from "../../context/emails/emailState";
import ProjectState from "../../context/projects/projectState";
import ExperienceState from "../../context/experiences/experienceState";
import ScrollState from "../../context/scroll/scrollState";
import Pcontainer from "../layout/pcontainer";

const Main = () => {
  return (
    <ProjectState>
      <ExperienceState>
        <EmailState>
          <ScrollState>
            <Router>
              <Switch>
                <Route exact path="/" component={Pcontainer}></Route>
              </Switch>
            </Router>
          </ScrollState>
        </EmailState>
      </ExperienceState>
    </ProjectState>
  );
};

export default Main;
