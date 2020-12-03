import StateView from "./pages/StateView.jsx";
import * as S from "./App-Style.js";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/dashboard">
          <S.Container>
            <StateView />
          </S.Container>
        </Route>
        <Route path="/">
          <div>
            <h1>hello world</h1>
          </div>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
