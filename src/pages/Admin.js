// pages/Admin.js  (LOGIN)
import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { signInWithPopup, signOut } from "firebase/auth";
import { auth, provider } from "../firebase-config.js";

const ADMIN_NAME = "admin";        // demo only
const ADMIN_PASSWORD = "password"; // demo only

const ADMIN_EMAILS = [
  "jacksonroodman@gmail.com",
  "chris.sanrow@gmail.com",
  "srivatbalaji@gmail.com",
  "thedaw@g.ucla.edu",
  "oudonthavetobeprettyanymore@gmail.com"
]

export default function Admin() {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const location = useLocation();

  const handleGoogleLogin = async () => {
    try{
      const result = await signInWithPopup(auth, provider);
      const email = result.user.email?.toLowerCase();
      const isAllowed = ADMIN_EMAILS.includes(email);
      if(!isAllowed){
        await signOut(auth);
        alert("✌︎㋡ access denied buster ╭∩╮(•̀_•́)╭∩╮");
        return;
      }
      navigate("/admin/dashboard");
    }
    catch(error){
      console.error("google login faillllllll: ", error);
      alert("login failed ✌︎㋡ try again");
    }
  };

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
    <div style={{ maxWidth: "500px", margin: "2rem auto" }}>
      <h1>Admin Login</h1>
      <button onClick={handleGoogleLogin}>
        Sign in with Google
      </button>
    </div>
  );
}
