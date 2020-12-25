import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Pcontainer from "../layout/pcontainer";

const Main = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Pcontainer}></Route>
      </Switch>
    </Router>
  );
};

export default Main;
