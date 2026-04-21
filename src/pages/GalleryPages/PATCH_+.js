import GalleryPageTemplate from "./GalleryPageTemplate";

export default function PatchPlus() {
  console.log("Patch + page component rendered");

  return (
    <GalleryPageTemplate
      pageName="PATCH_+"
      title="PATCH +"
    />
  );
}