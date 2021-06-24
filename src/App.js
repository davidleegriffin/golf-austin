import { Route, Switch, BrowserRouter } from "react-router-dom";
import SplashPage from './components/SplashPage';
import Detail from './components/Detail';
import './App.css';

function App() {
 
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={SplashPage} />
          <Route exact path="/detail" component={Detail} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
