import { Link } from "react-router-dom";

function Dashboard() {
  return (
    <div style={{ maxWidth: 600, margin: "2rem auto" }}>
      <h1>Admin Panel</h1>
      <p>Select an action:</p>

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

    </div>
  );
}

export default Dashboard;
