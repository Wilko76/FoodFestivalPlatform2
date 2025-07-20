
import React from 'react';
import { AuthProvider } from './authContext';
import LoginPage from './LoginPage';

function App() {
  return (
    <AuthProvider>
      <LoginPage />
    </AuthProvider>
  );
}

export default App;
