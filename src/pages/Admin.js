// pages/Admin.js  (LOGIN)
import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";

const ADMIN_NAME = "admin";        // demo only
const ADMIN_PASSWORD = "password"; // demo only

export default function Admin() {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const location = useLocation();

  // if we got sent here from a protected page, go back there after login
  const from = location.state?.from?.pathname || "/admin/dashboard";

  const handleSubmit = (e) => {
    e.preventDefault();

    if (name === ADMIN_NAME && password === ADMIN_PASSWORD) {
      localStorage.setItem("isAdmin", "true");
      navigate(from, { replace: true });
    } else {
      setError("Wrong name or password.");
    }
  };

  return (
    <div style={{ maxWidth: 400, margin: "2rem auto" }}>
      <h2>Admin Login</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name</label><br />
          <input
            type="text"
            value={name}
            onChange={e => setName(e.target.value)}
            required
          />
        </div>

        <div style={{ marginTop: "1rem" }}>
          <label>Password</label><br />
          <input
            type="password"
            value={password}
            onChange={e => setPassword(e.target.value)}
            required
          />
        </div>

        {error && <p style={{ color: "red" }}>{error}</p>}

        <button type="submit" style={{ marginTop: "1rem" }}>
          Log In
        </button>
      </form>
    </div>
  );
}
