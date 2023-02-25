import React from "react";

const Footer = () => {
  return (
    <footer className="grid grid-cols-2 md:grid-cols-4 gap-y-10 gap-x-12 px-24 md:px-32 py-14 bg-gray-100 text-gray-600">
      <div className="space-y-4 text-xs text-gray-800">
        <h5 className="uppercase font-bold">about</h5>
        <p>How Airbnb works</p>
        <p>Newsroom</p>
        <p>Inverstors</p>
        <p>Airbnb Plus</p>
        <p>Airbnb Luxe</p>
      </div>
      <div className="space-y-4 text-xs text-gray-800">
        <h5 className="uppercase font-bold">community</h5>
        <p>Accessibility</p>
        <p>This is not a real site</p>
        <p>Its a preety awsome clone</p>
        <p>Referrals accepted</p>
        <p>r0cke</p>
      </div>
      <div className="space-y-4 text-xs text-gray-800">
        <h5 className="uppercase font-bold">host</h5>
        <p>Ritik Sabhrwal</p>
        <p>Presents</p>
        <p>Airbnb Clone</p>
        <p>Next.js</p>
        <p>Tailwind css</p>
      </div>
      <div className="space-y-4 text-xs text-gray-800">
        <h5 className="uppercase font-bold">support</h5>
        <p>Help center</p>
        <p>Trust & Safety</p>
        <p>Say Hi</p>
        <p>Feedback</p>
        <p>Complaints</p>
      </div>
    </footer>
  );
};

export default Footer;
