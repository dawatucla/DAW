// App.js
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Intro from "./pages/Intro";
import Gallery from "./pages/Gallery";
import Events from "./pages/Events";
import Connect from "./pages/Connect";
import Blog from "./pages/Blog";

import Admin from "./pages/Admin"; // login
import AdminDashboard from "./pages/AdminPages/Dashboard";
import CreatePost from "./pages/AdminPages/CreatePost";
import UploadToGallery from "./pages/AdminPages/UploadToGallery";

import RequireAdmin from "./components/RequireAdmin";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Intro />} />
        <Route path="/home" element={<Home />} />
        <Route path="/gallery/*" element={<Gallery />} />
        <Route path="/events" element={<Events />} />
        <Route path="/connect" element={<Connect />} />
        <Route path="/blog" element={<Blog />} />

        {/* /admin = login page */}
        <Route path="/admin" element={<Admin />} />

        {/* protected admin routes */}
        <Route
          path="/admin/dashboard"
          element={
            <RequireAdmin>
              <AdminDashboard />
            </RequireAdmin>
          }
        />
        <Route
          path="/admin/createpost"
          element={
            <RequireAdmin>
              <CreatePost />
            </RequireAdmin>
          }
        />
        <Route
          path="/admin/uploadtogallery"
          element={
            <RequireAdmin>
              <UploadToGallery />
            </RequireAdmin>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
