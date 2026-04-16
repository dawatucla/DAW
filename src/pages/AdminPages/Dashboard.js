import { useNavigate, Link } from "react-router-dom";
import { signOut } from "firebase/auth";
import { auth } from "../../firebase-config.js";

function Dashboard() {
  const navigate = useNavigate();
  const handleLogout = async () => {
    await signOut(auth);
    navigate("/admin");
  };

  return (
    <div style={{ maxWidth: 600, margin: "2rem auto" }}>
      <h1>Admin Panel</h1>

      <div style={{ display: "flex", gap: "1rem", marginTop: "1rem" }}>
        <Link to="/admin/createpost">
          <button>Create Post</button>
        </Link>

        <Link to="/admin/manageposts">
          <button>Manage Posts</button>
        </Link>

        <Link to="/admin/uploadtogallery">
          <button>Upload to Gallery</button>
        </Link>
      </div>

      <button onClick={handleLogout} style={{ marginTop: "1rem" }}>
        Log Out
      </button>
    </div>
  );
}

export default Dashboard;
