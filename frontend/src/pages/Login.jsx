import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../css/Login.css";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    // connect to backend later
    console.log("Login:", username, password);
  };

  return (
    <main className="login-bg">
      <section className="login-card">

        <button className="login-close" onClick={() => navigate(-1)}>✕</button>

        <div className="login-icon"><i class="fa-solid fa-lock"></i></div>

        <h2 className="login-brand">PM Golf Club</h2>
        <h4 className="login-title">Admin Login</h4>
        <p className="login-subtitle">Sign in to manage PM Golf Club</p>

        <form className="login-form" onSubmit={handleLogin}>
          <input
            type="text"
            className="login-input"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <input
            type="password"
            className="login-input"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <div className="login-links">
            <span>Don't have account yet?</span>
            <span>Forgot Password?</span>
          </div>

          <button type="submit" className="login-btn">Login</button>
        </form>

      </section>
    </main>
  );
}

export default Login;