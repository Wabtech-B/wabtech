import { Check } from "lucide-react";
import Image from "next/image";
import React from "react";

export const metadata = {
  title: "Services",
};

const Services = () => {
  return (
    <div className="mt-14">
      <div className="text-center py-10 bg-hero bg-center bg-cover !text-white">
        <h1 className="text-4xl md:text-5xl font-bold">Services</h1>
        <p className="mt-4 text-lg text-gray-100">
          Explore some of our services in depth
        </p>
      </div>
      <div className="max-w-7xl px-3 mx-auto relative">
        <div className="absolute -z-10 h-full w-full bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity:30 dark:opacity-10" />
        <div className="mt-8 max-w-3xl mx-auto">
          <div className="relative before:absolute before:h-full before:w-[2px] before:bg-gray-300 before:dark:bg-gray-700 before:top-0 before:left-4">
            <div className="pl-8">
              <div>
                <div className="relative">
                  <div className="absolute -left-10 top-1/2 -translate-y-1/2 w-12 h-12 rounded-lg border bg-white shadow-sm dark:bg-gradient-to-tr from-gray-950 to-gray-800 flex-center-center">
                    <div className="relative w-8 h-8 ">
                      <Image
                        src="/images/web-design.png"
                        alt="Web design"
                        fill
                        className="object-contain"
                      />
                    </div>
                  </div>
                  <h1 className="text-2xl font-semibold mb-2 ml-4">
                    Web Design
                  </h1>
                </div>
                <div className="mt-6 ml-4">
                  <div>
                    <div className="flex gap-x-2">
                      <div className="w-6 h-6 rounded-full flex-center-center bg-gradient-to-tr from-[#0bab7c] to-[#032a1e] text-white shrink-0">
                        <Check className="w-4 h-4" />
                      </div>
                      <p>
                        We specialize in crafting unique websites tailored to
                        your business needs.
                      </p>
                    </div>
                    <div className="flex gap-x-2 mt-4">
                      <div className="w-6 h-6 rounded-full flex-center-center bg-gradient-to-tr from-[#0bab7c] to-[#032a1e] text-white shrink-0">
                        <Check className="w-4 h-4" />
                      </div>
                      <p>
                        Our designs are not only visually appealing but also
                        optimized for user engagement and conversion.
                      </p>
                    </div>
                    <div className="flex gap-x-2 mt-4">
                      <div className="w-6 h-6 rounded-full flex-center-center bg-gradient-to-tr from-[#0bab7c] to-[#032a1e] text-white shrink-0">
                        <Check className="w-4 h-4" />
                      </div>
                      <p>
                        We focus on creating a seamless user experience that
                        guides visitors towards your desired actions, such as
                        making a purchase or contacting you.
                      </p>
                    </div>
                    <div className="flex gap-x-2 mt-4">
                      <div className="w-6 h-6 rounded-full flex-center-center bg-gradient-to-tr from-[#0bab7c] to-[#032a1e] text-white shrink-0">
                        <Check className="w-4 h-4" />
                      </div>
                      <p>
                        Whether you&apos;re a small business or a large
                        corporation, we ensure your website reflects your brand
                        identity and values, helping you stand out in the
                        crowded online space.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-12">
                <div className="relative">
                  <div className="absolute -left-10 top-1/2 -translate-y-1/2 w-12 h-12 rounded-lg border bg-white shadow-sm dark:bg-gradient-to-tr from-gray-950 to-gray-800 flex-center-center">
                    <div className="relative w-8 h-8 ">
                      <Image
                        src="/images/ui2.png"
                        alt="Web design"
                        fill
                        className="object-contain"
                      />
                    </div>
                  </div>
                  <h1 className="text-2xl font-semibold mb-2 ml-4">
                    UI/UX Design
                  </h1>
                </div>
                <div className="mt-6 ml-4">
                  <div>
                    <div className="flex gap-x-2">
                      <div className="w-6 h-6 rounded-full flex-center-center bg-gradient-to-tr from-[#0bab7c] to-[#032a1e] text-white shrink-0">
                        <Check className="w-4 h-4" />
                      </div>
                      <p>
                        User Interface (UI) and User Experience (UX) design are
                        crucial for making websites and apps easy and enjoyable
                        to use.
                      </p>
                    </div>
                    <div className="flex gap-x-2 mt-4">
                      <div className="w-6 h-6 rounded-full flex-center-center bg-gradient-to-tr from-[#0bab7c] to-[#032a1e] text-white shrink-0">
                        <Check className="w-4 h-4" />
                      </div>
                      <p>
                        Our UI/UX design process involves understanding your
                        target audience, their needs, and how they interact with
                        your digital products.
                      </p>
                    </div>
                    <div className="flex gap-x-2 mt-4">
                      <div className="w-6 h-6 rounded-full flex-center-center bg-gradient-to-tr from-[#0bab7c] to-[#032a1e] text-white shrink-0">
                        <Check className="w-4 h-4" />
                      </div>
                      <p>
                        We create intuitive interfaces that guide users through
                        your website or app effortlessly, reducing confusion and
                        frustration.
                      </p>
                    </div>
                    <div className="flex gap-x-2 mt-4">
                      <div className="w-6 h-6 rounded-full flex-center-center bg-gradient-to-tr from-[#0bab7c] to-[#032a1e] text-white shrink-0">
                        <Check className="w-4 h-4" />
                      </div>
                      <p>
                        By prioritizing user experience, we help you retain
                        visitors, increase engagement, and ultimately achieve
                        your business goals.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-12">
                <div className="relative">
                  <div className="absolute -left-10 top-1/2 -translate-y-1/2 w-12 h-12 rounded-lg border bg-white shadow-sm dark:bg-gradient-to-tr from-gray-950 to-gray-800 flex-center-center">
                    <div className="relative w-8 h-8 ">
                      <Image
                        src="/images/clean-code2.png"
                        alt="Web design"
                        fill
                        className="object-contain"
                      />
                    </div>
                  </div>
                  <h1 className="text-2xl font-semibold mb-2 ml-4">
                    Design To Code
                  </h1>
                </div>
                <div className="mt-6 ml-4">
                  <div>
                    <div className="flex gap-x-2">
                      <div className="w-6 h-6 rounded-full flex-center-center bg-gradient-to-tr from-[#0bab7c] to-[#032a1e] text-white shrink-0">
                        <Check className="w-4 h-4" />
                      </div>
                      <p>
                        We bridge the gap between design and development by
                        transforming your creative designs into functional,
                        responsive websites.
                      </p>
                    </div>
                    <div className="flex gap-x-2 mt-4">
                      <div className="w-6 h-6 rounded-full flex-center-center bg-gradient-to-tr from-[#0bab7c] to-[#032a1e] text-white shrink-0">
                        <Check className="w-4 h-4" />
                      </div>
                      <p>
                        We ensure that every pixel of your design is faithfully
                        translated into clean, efficient code.
                      </p>
                    </div>
                    <div className="flex gap-x-2 mt-4">
                      <div className="w-6 h-6 rounded-full flex-center-center bg-gradient-to-tr from-[#0bab7c] to-[#032a1e] text-white shrink-0">
                        <Check className="w-4 h-4" />
                      </div>
                      <p>
                        We pay attention to details such as loading times,
                        browser compatibility, and mobile responsiveness to
                        deliver a seamless user experience across all devices.
                      </p>
                    </div>
                    <div className="flex gap-x-2 mt-4">
                      <div className="w-6 h-6 rounded-full flex-center-center bg-gradient-to-tr from-[#0bab7c] to-[#032a1e] text-white shrink-0">
                        <Check className="w-4 h-4" />
                      </div>
                      <p>
                        Let it be a figma design, adobe XD, or PSD design, we
                        make sure every pixel is converted to code.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-12">
                <div className="relative">
                  <div className="absolute -left-10 top-1/2 -translate-y-1/2 w-12 h-12 rounded-lg border bg-white shadow-sm dark:bg-gradient-to-tr from-gray-950 to-gray-800 flex-center-center">
                    <div className="relative w-8 h-8 ">
                      <Image
                        src="/images/template2.png"
                        alt="Web design"
                        fill
                        className="object-contain"
                      />
                    </div>
                  </div>
                  <h1 className="text-2xl font-semibold mb-2 ml-4">
                    Templates and Customization
                  </h1>
                </div>
                <div className="mt-6 ml-4">
                  <div>
                    <div className="flex gap-x-2">
                      <div className="w-6 h-6 rounded-full flex-center-center bg-gradient-to-tr from-[#0bab7c] to-[#032a1e] text-white shrink-0">
                        <Check className="w-4 h-4" />
                      </div>
                      <p>
                        Our extensive library of templates offers a quick and
                        cost-effective solution for getting your website up and
                        running.
                      </p>
                    </div>
                    <div className="flex gap-x-2 mt-4">
                      <div className="w-6 h-6 rounded-full flex-center-center bg-gradient-to-tr from-[#0bab7c] to-[#032a1e] text-white shrink-0">
                        <Check className="w-4 h-4" />
                      </div>
                      <p>
                        Choose from a variety of professionally designed
                        templates that can be customized to match your brand
                        identity and preferences.
                      </p>
                    </div>
                    <div className="flex gap-x-2 mt-4">
                      <div className="w-6 h-6 rounded-full flex-center-center bg-gradient-to-tr from-[#0bab7c] to-[#032a1e] text-white shrink-0">
                        <Check className="w-4 h-4" />
                      </div>
                      <p>
                        We understand that every business is unique, so we offer
                        customization services to ensure your website stands out
                        from the crowd.
                      </p>
                    </div>
                    <div className="flex gap-x-2 mt-4">
                      <div className="w-6 h-6 rounded-full flex-center-center bg-gradient-to-tr from-[#0bab7c] to-[#032a1e] text-white shrink-0">
                        <Check className="w-4 h-4" />
                      </div>
                      <p>
                        All the templates are well documented, fully responsive,
                        support darkmode, use dynamic and real data ready for
                        API integration, and provide clean code; easily
                        customized by anyone.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
