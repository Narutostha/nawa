import React from "react";

export const GalleryPage = (): JSX.Element => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-6">Gallery</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Gallery content will go here */}
      </div>
    </div>
  );
};