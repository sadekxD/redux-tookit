import { Route, Switch } from "react-router";
import Launches from "./components/Launches";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/">
          <Launches></Launches>
        </Route>
        <Route path="/*">404 not found</Route>
      </Switch>
    </div>
  );
}

export default App;
