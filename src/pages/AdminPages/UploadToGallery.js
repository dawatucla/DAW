import React, { useState } from "react";
import { db, storage, auth } from "../../firebase-config";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { v4 as uuidv4 } from "uuid";
console.log("Current Firebase user:", auth.currentUser);

const galleryOptions = [
  "ALICE_THE_CLUB",
  "ECHO_002",
  "ECHO_003",
  "ECHO_004",
  "ECHO_005",
  "ECHO_006",
  "FROST_CHILDREN",
  "JACK",
  "PARTY_001",
  "PARTY_002",
  "PATCH_+js",
  "RITUAL_001",
  "RITUAL_002",
  "SECRET_ANNIVERSARY"
];

export default function UploadToGallery() {
  const [selectedPage, setSelectedPage] = useState("");
  const [files, setFiles] = useState([]);
  const [isUploading, setIsUploading] = useState(false);
  const [message, setMessage] = useState("");

const handleFileChange = (e) => {
  const chosenFiles = Array.from(e.target.files);
  chosenFiles.forEach((file) => {
    console.log(file.name, (file.size / 1024 / 1024).toFixed(2), "MB");
  });
  setFiles(chosenFiles);
};

const handleUpload = async (e) => {
  e.preventDefault();
  setMessage("");

  if (!selectedPage) {
    setMessage("Please select a gallery page.");
    return;
  }

  if (files.length === 0) {
    setMessage("Please choose at least one image.");
    return;
  }

  try {
    setIsUploading(true);
    console.log("Upload started");
    console.log("Selected page:", selectedPage);
    console.log("Files:", files);

    for (const file of files) {
      console.log("Starting file:", file.name, file.size);

      const uniqueName = `${uuidv4()}-${file.name}`;
      const storagePath = `galleryImages/${selectedPage}/${uniqueName}`;
      const storageRef = ref(storage, storagePath);

      console.log("Uploading to Storage:", storagePath);
      await uploadBytes(storageRef, file);
      console.log("Storage upload finished:", file.name);

      console.log("Getting download URL...");
      const imageUrl = await getDownloadURL(storageRef);
      console.log("Download URL:", imageUrl);

      console.log("Writing Firestore doc...");
      await addDoc(collection(db, "galleryImages"), {
        page: selectedPage,
        imageUrl,
        fileName: file.name,
        storagePath,
        createdAt: serverTimestamp(),
      });
      console.log("Firestore doc written:", file.name);
    }

    console.log("All uploads complete");
    setMessage("Images uploaded successfully.");
    setFiles([]);
    setSelectedPage("");
  } catch (error) {
    console.error("Upload error:", error);
    setMessage(`Upload failed: ${error.code || ""} ${error.message || "Unknown error"}`);
  } finally {
    console.log("Resetting upload state");
    setIsUploading(false);
  }
};

  return (
    <div style={{ maxWidth: "700px", margin: "2rem auto" }}>
      <h2>Upload to Gallery</h2>

      <form onSubmit={handleUpload}>
        <div style={{ marginBottom: "1rem" }}>
          <label>Select gallery page:</label>
          <br />
          <select
            value={selectedPage}
            onChange={(e) => setSelectedPage(e.target.value)}
          >
            <option value="">-- Choose a gallery --</option>
            {galleryOptions.map((page) => (
              <option key={page} value={page}>
                {page}
              </option>
            ))}
          </select>
        </div>

        <div style={{ marginBottom: "1rem" }}>
          <label>Select image files:</label>
          <br />
          <input
            type="file"
            accept="image/*"
            multiple
            onChange={handleFileChange}
          />
        </div>

        <button type="submit" disabled={isUploading}>
          {isUploading ? "Uploading..." : "Upload Images"}
        </button>
      </form>

      {message && <p style={{ marginTop: "1rem" }}>{message}</p>}

      {files.length > 0 && (
        <div style={{ marginTop: "1rem" }}>
          <h4>Selected files:</h4>
          {files.map((file, index) => (
            <p key={index}>{file.name}</p>
          ))}
        </div>
      )}
    </div>
  );
}