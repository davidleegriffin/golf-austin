import React from 'react';
import { GoogleLogout } from 'react-google-login';

const clientId =
  '268808757517-4ukilrm2ago1jcmeua3lq181i7tu4d2d.apps.googleusercontent.com';

function Logout() {
  const onSuccess = () => {
    console.log('Logout made successfully');
    // alert('Logout made successfully ✌');
    window.location.reload();
  };

  return (
    <div>
      <GoogleLogout
        clientId={clientId}
        buttonText="Logout"
        onLogoutSuccess={onSuccess}
      ></GoogleLogout>
    </div>
  );
}

export default Logout;
