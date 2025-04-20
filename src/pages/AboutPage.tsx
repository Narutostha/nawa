import React from "react";

export const AboutPage = (): JSX.Element => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-6">About Us</h1>
      <div className="prose max-w-none">
        <p className="mb-4">
          Nava Jyoti Higher Secondary School is a co-ed English medium school from PG to secondary level, dedicated to providing quality education since 2038 B.S.
        </p>
        <p className="mb-4">
          Our mission is to create a dynamic and engaging learning environment that fosters academic excellence, personal growth, and character development.
        </p>
      </div>
    </div>
  );
};