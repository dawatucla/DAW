import React, { useEffect, useState } from "react";
import { db } from"../../firebase-config";
import { collection, query, where, getDocs, orderBy } from "firebase/firestore";

export default function GalleryPageTemplate({ pageName, title }) {
  const [images, setImages] = useState([]);

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const q = query(
          collection(db, "galleryImages"),
          where("page", "==", pageName),
          orderBy("createdAt", "desc")
        );

        const snapshot = await getDocs(q);
        const imageList = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data()
        }));

        setImages(imageList);
      } catch (error) {
        console.error("Error fetching gallery images:", error);
      }
    };

    fetchImages();
  }, [pageName]);

  return (
    <div>
      <h1>{title}</h1>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
          gap: "1rem"
        }}
      >
        {images.map((image) => (
          <img
            key={image.id}
            src={image.imageUrl}
            alt={image.fileName}
            style={{ width: "100%", height: "auto" }}
          />
        ))}
      </div>
    </div>
  );
}