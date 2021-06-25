import React, { useState } from 'react';
import { GoogleLogin } from 'react-google-login';
import HomePage from './HomePage';


// refresh token
import { refreshTokenSetup } from '../utils/refreshToken';

const clientId =
  '268808757517-4ukilrm2ago1jcmeua3lq181i7tu4d2d.apps.googleusercontent.com';

function Login() {
  const [user, setUser] = useState(null);

  const onSuccess = (res) => {
    // console.log('Login Success: currentUser:', res.profileObj);
    refreshTokenSetup(res);
    setUser(res.profileObj);
    console.log('user', user);
  };

  const onFailure = (res) => {
    console.log('Login failed: res:', res);
    alert(
      `Failed to login. 😢 Please ping this to repo owner davidleegriffin2021@gmail.com`
    );
  };

  return (
    <div>
     {!user && <GoogleLogin
        clientId={clientId}
        buttonText="Login"
        onSuccess={onSuccess}
        onFailure={onFailure}
        cookiePolicy={'single_host_origin'}
        style={{ marginTop: '100px' }}
        isSignedIn={true}
      />}
      {user && <HomePage props={user} />}
    </div>
  );
}

export default Login;