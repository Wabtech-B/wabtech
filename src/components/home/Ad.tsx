import React from "react";
import GradientIcon from "../wabtech/gradient-icons/GradientIcon";
import { FaAffiliatetheme } from "react-icons/fa";

const Ad = () => {
  return (
    <div className="py-16 max-w-7xl mx-auto px-3">
      <div className="gradient-box">
        <div className="flex gap-3">
          <GradientIcon
            icon={FaAffiliatetheme}
            gradientId="gradient"
            gradientColors={["#f9c51b", "#01680f"]}
            className="text-5xl"
          />
          <div>
            <h1 className="text-3xl font-semibold">Need other services</h1>
            <p className="text-lg">
              Are you in need of a website? Or you have a UI/UX design (figma,
              adobe xd, photoshop) that needs to be translated into highly
              maintainable code or maybe you need a custom UI/UX design for your
              next mobile app, web app or website, we gat you covered!
            </p>
            <p className="mt-3 text-lg">
              Email us today for any enquiries through{" "}
              <a href="mailto:wabtech.tech@gmail.com" className="underline">
                wabtech.tech@gmail.com
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Ad;
