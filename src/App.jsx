import StateView from "./pages/StateView.jsx";
import * as S from "./App-Style.js";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import  Header  from "./components/Header/Header.jsx";
import Globe from './pages/Globe/Globe.jsx';

function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route path="/dashboard">
          <S.Container>
            <StateView />
          </S.Container>
        </Route>
        <Route path="/">
          <Globe />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
