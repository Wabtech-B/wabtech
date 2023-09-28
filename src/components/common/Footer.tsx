import React from "react";

const Footer = () => {
  return (
    <div className="bg-zinc-900 p-3">
      <div className="text-center">
        &copy; {new Date().getFullYear()} Wabtech. All rights reserved.
      </div>
    </div>
  );
};

export default Footer;
