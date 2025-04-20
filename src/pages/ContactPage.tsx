import React from "react";

export const ContactPage = (): JSX.Element => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-6">Contact Us</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <h2 className="text-2xl font-semibold mb-4">Get in Touch</h2>
          <div className="space-y-4">
            <p>
              <strong>Address:</strong> Basukinagar, Tinkune, Kathmandu
            </p>
            <p>
              <strong>Phone:</strong> +977-1-4108905, 4108973
            </p>
            <p>
              <strong>Email:</strong> info@navajyotischool.edu.np
            </p>
          </div>
        </div>
        <div>
          <h2 className="text-2xl font-semibold mb-4">Location Map</h2>
          <div className="h-[300px] bg-gray-200 rounded-lg">
            {/* Map will go here */}
          </div>
        </div>
      </div>
    </div>
  );
};