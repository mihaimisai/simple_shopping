import React, { useState } from 'react';
import SignUpForm from './SignUpForm';
import LoginForm from './LoginForm';

function LoginApp() {
 
    const [showLogin, setShowLogin] = useState(true)

    const handleLogin = () => {
        setShowLogin(true)
    }

    const handleSignUp = () => {
        setShowLogin(false)
    }

  return (
    <div>
        {
            showLogin ? 
            <div>
                <LoginForm />
                <button className="btn btn-warning mt-3" onClick={handleSignUp}>Sign Up</button>
            </div>
            :
            <div>
                <SignUpForm />
                <button className="btn btn-warning mt-3" onClick={handleLogin}>Log in</button>
            </div>
        }
    </div>
  );
}

export default LoginApp;
