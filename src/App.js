import Login from './components/Login';
import Logout from './components/Logout';
import LoginHooks from './components/LoginHooks';
import LogoutHooks from './components/LogoutHooks';
import SplashPage from './components/SplashPage';

import './App.css';

function App() {
  // console.log(isSignedIn);
  return (
    <div className="App">
      {/* {!user && <Login />} */}
      {/* <Logout /> */}
      <SplashPage />
      {/* <h1>WITH HOOKS</h1>
      <LoginHooks />
      <LogoutHooks /> */}
    </div>
  );
}

export default App;
