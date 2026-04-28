import { Navigate, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../firebase-config";

const ADMIN_EMAILS = [
  "jacksonroodman@gmail.com",
  "chris.sanrow@gmail.com",
  "srivatbalaji@gmail.com",
  "thedaw@g.ucla.edu",
  "oudonthavetobeprettyanymore@gmail.com"
]

export default function RequireAdmin({ children }) {
  const [user, setUser] = useState(undefined);
  const location = useLocation();
  // const isAdmin = localStorage.getItem("isAdmin") === "true";

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });

    return () => unsub();
  }, []);

  if(user === undefined){
    // still loading
    return <div>Loading... ⎛⎝ ≽ {'>'} ⩊ {'<'} ≼ ⎠⎞</div>;
  }

  const email = user?.email?.toLowerCase();
  const isAllowed = !!email && ADMIN_EMAILS.includes(email);
  if(!user || !isAllowed){
    return <Navigate to="/admin" state={{from:location}} replace />;
  }

  return children;
}
