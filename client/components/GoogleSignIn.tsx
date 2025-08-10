import React from 'react';
import { GoogleOAuthProvider, GoogleLogin } from '@react-oauth/google';

const GOOGLE_CLIENT_ID = '465980528119-tgfmjir80p119m702seduhtu8j7mc53d.apps.googleusercontent.com'; // Replace with your actual client ID

export default function GoogleSignIn() {
  return (
    <GoogleOAuthProvider clientId={GOOGLE_CLIENT_ID}>
      <GoogleLogin
        onSuccess={credentialResponse => {
          console.log(credentialResponse);
          // Handle login success (send token to backend, update context, etc.)
        }}
        onError={() => {
          console.log('Login Failed');
        }}
      />
    </GoogleOAuthProvider>
  );
}
