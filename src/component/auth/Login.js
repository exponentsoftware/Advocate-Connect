import React, { useState }from 'react';
import "./Login.css"
import { auth, provider } from "../../firebase";

function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
  
    const signIn = () => {
      auth.signInWithPopup(provider).catch((e) => {
        alert(e.message);
      });
    };
  
    const handleSignIn = (e) => {
      e.preventDefault();
  
      auth
        .signInWithEmailAndPassword(email, password)
        .then((auth) => {
          console.log(auth);
        })
        .catch((e) => alert(e.message));
        setEmail("");
        setPassword("")
    };
  
    const registerSignIn = (e) => {
      e.preventDefault();
  
      auth
        .createUserWithEmailAndPassword(email, password)
        .then((auth) => {
          if (auth) {
            console.log(auth);
          }
        })
        .catch((e) => alert(e.message));
        setEmail("");
        setPassword("")
    };
    return (
        <div className="login">
          
          <div className="login__container">
            <div className="login__logo">
              <img
                src=""
                alt=""
              />
            </div>
            <div className="login__desc">
              <p>A Platform to find an Advocate for Legal Advices</p>
              
            </div>
            <div className="login__auth">
              <div className="login__authOptions">
                <div className="login__authOption">
                  <img
                    className="login__googleAuth"
                    src="https://media-public.canva.com/MADnBiAubGA/3/screen.svg"
                    alt=""
                  />
                  <p onClick={signIn}>Continue With Google</p>
                </div>
                <div className="login__authOption">
                  <img
                    className="login__googleAuth"
                    src="https://1000logos.net/wp-content/uploads/2016/11/Facebook-logo-500x350.png"
                    alt=""
                  />
                  <span>Continue With Facebook</span>
                </div>
                <div className="login__authDesc">
                  <p>
                    <span style={{ color: "blue", cursor: "pointer" }}>
                      Sign Up With Email
                    </span>
                    . By continuing you indicate that you have read and agree to
                    Advocate Connect's
                    <span style={{ color: "blue", cursor: "pointer" }}>
                      Terms of Service{" "}
                    </span>
                    and{" "}
                    <span style={{ color: "blue", cursor: "pointer" }}>
                      Privacy Policy
                    </span>
                    .
                  </p>
                </div>
              </div>
              <div className="login__emailPass">
                <div className="login__label">
                  <h4>Login</h4>
                </div>
                <div className="login__inputFields">
                  <div className="login__inputField">
                    <input
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      type="text"
                      placeholder="Email"
                    />
                  </div>
                  <div className="login__inputField">
                    <input
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      type="password"
                      placeholder="Password"
                    />
                  </div>
                </div>
                <div className="login__forgButt">
                  <small>Forgot Password?</small>
                  <button onClick={handleSignIn}>Login</button>
                </div>
                <button onClick={registerSignIn}>Register</button>
              </div>
            </div>
            
            <div className="login__footer">
              <p>About</p>
              
              <p>Careers</p>
              <p>Businesses</p>
              <p>Privacy</p>
              <p>Terms</p>
              <p>Contact</p>
              <p>&copy; Advocate Connect Inc. 2021</p>
            </div>
          </div>
        </div>
      );
    }

export default Login
