/* eslint-disable react/no-unescaped-entities */

import BottomLinks from "@/components/common/BottomLinks";
import RightSidebar from "@/components/common/RightSidebar";
import Alert from "@/components/wabtech/alert/Alert";
import AutoPlaySnippet from "@/components/wabtech/slider/AutoPlaySnippet";
import ControlsSnippet from "@/components/wabtech/slider/ControlsSnippet";
import CustomControlsSnippet from "@/components/wabtech/slider/CustomControlsSnippet";
import DotsSnippet from "@/components/wabtech/slider/DotsSnippet";
import ImagesSnippet from "@/components/wabtech/slider/ImagesSnippet";
import SliderSnippet from "@/components/wabtech/slider/SliderSnippet";
import TestimonialSnippet from "@/components/wabtech/slider/TestimonialsSnippet";

const Slider = () => {
  const sections = [
    { id: "introduction", title: "Introduction" },
    { id: "default_slider", title: "Default" },
    { id: "images", title: "With images" },
    { id: "custom_control_icons", title: "Custom Control Icons" },
    { id: "hide_controls", title: "Hide Controls" },
    { id: "hide_dots", title: "Hide Dots" },
    { id: "disable_autoplay", title: "Disable Autoplay" },
    { id: "testimonial_example", title: "Testimonial example" },
    { id: "props", title: "Props" },
    { id: "css_customization", title: "Customization" },
  ];
  return (
    <div className="grid grid-cols-1 md:grid-cols-auto-200">
      <div>
        <section id="introduction">
          <h1 className="text-3xl font-semibold mb-4">Slider/Carousel</h1>
          <div className="my-4">
            <p>
              The Slider component allows you to create a responsive image
              carousel with customizable controls and navigation dots.
            </p>
          </div>
        </section>
        <section id="default_slider">
          <div className="mt-8">
            <h1 className="text-2xl font-semibold">Installation</h1>
            <p className="mt-2">
              No installation required, just copy and paste the component code
            </p>
            <h1 className="text-2xl font-semibold mt-6">Usage</h1>
            <div className="my-4">
              <Alert variant="warning">
                <h1 className="text-2xl">Please Note:</h1>
                <p className="mt-2">
                  The <span className="code">Slider.tsx</span> has the main code
                  for the component, the rest of the code in{" "}
                  <span className="code">App.tsx</span> shows you how to use the
                  component.
                </p>
              </Alert>
              <h1 className="text-xl mt-3">Default Slider</h1>
              <p className="mt-2">
                You can use the Slider component to create an image carousel
                with default controls and navigation dots.{" "}
              </p>
            </div>
          </div>
          <div className="mt-8">
            <SliderSnippet />
          </div>
        </section>

        <section id="images">
          <div className="mt-10">
            <h1 className="text-xl mt-3">Slider with images</h1>
            <p className="mt-2">This is an example of a slider with images</p>
            <div className="mt-8">
              <ImagesSnippet />
            </div>
          </div>
        </section>

        <section id="custom_control_icons">
          <div className="mt-10">
            <h1 className="text-xl mt-3">Custom Control Icons</h1>
            <p className="mt-2">
              You can add custom control icons using the{" "}
              <span className="code">`leftControlIcon`</span> and{" "}
              <span className="code">`leftControlIcon`</span> props
            </p>
            <div className="mt-8">
              <CustomControlsSnippet />
            </div>
          </div>
        </section>

        <section id="hide_controls">
          <div className="mt-10">
            <h1 className="text-xl mt-3">Hide controls</h1>
            <p className="mt-2">
              You can hide the controls by setting the{" "}
              <span className="code">showControls</span> prop to false
            </p>
            <div className="mt-8">
              <ControlsSnippet />
            </div>
          </div>
        </section>

        <section id="hide_dots">
          <div className="mt-10">
            <h1 className="text-xl mt-3">Hide Dots</h1>
            <p className="mt-2">
              You can hide the dots by setting the{" "}
              <span className="code">showDots</span> prop to false
            </p>
            <div className="mt-8">
              <DotsSnippet />
            </div>
          </div>
        </section>

        <section id="disable_autoplay">
          <div className="mt-10">
            <h1 className="text-xl mt-3">Disable Autoplay</h1>
            <p className="mt-2">
              You can disable autoplay by setting the{" "}
              <span className="code">autoPlay</span> prop to false
            </p>
            <div className="mt-8">
              <AutoPlaySnippet />
            </div>
          </div>
        </section>

        <section id="testimonial_example">
          <div className="mt-10">
            <h1 className="text-xl mt-3">Testimonial example</h1>
            <p className="mt-2">
              This is an example of a testimonial slider with this component
            </p>
            <div className="mt-8">
              <TestimonialSnippet />
            </div>
          </div>
        </section>

        <section id="props" className="pb-10">
          <div className="mt-10">
            <h1 className="text-2xl mt-3 font-semibold">Props</h1>
            <div className="mt-4 overflow-auto table-wrapper border dark:border-zinc-600 rounded-lg">
              <table className="w-full rounded-lg overflow-hidden">
                <thead>
                  <tr className="bg-slate-100 dark:bg-zinc-800/60">
                    <th>Prop Name</th>
                    <th>Type</th>
                    <th>Sample Value</th>
                    <th>Description</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="font-semibold">`children`</td>
                    <td>ReactNode</td>
                    <td>See Example</td>
                    <td>The images or content to display in the carousel.</td>
                  </tr>
                  <tr>
                    <td className="font-semibold">`className`</td>
                    <td>string (optional)</td>
                    <td>'custom-slider'</td>
                    <td>Additional CSS classes for the Slider container.</td>
                  </tr>
                  <tr>
                    <td className="font-semibold">`showControls`</td>
                    <td>boolean (optional)</td>
                    <td>true</td>
                    <td>Whether to show navigation controls.</td>
                  </tr>
                  <tr>
                    <td className="font-semibold">`showDots`</td>
                    <td>boolean (optional)</td>
                    <td>true</td>
                    <td>Whether to show navigation dots.</td>
                  </tr>
                  <tr>
                    <td className="font-semibold">`autoPlay`</td>
                    <td>boolean (optional)</td>
                    <td>true</td>
                    <td>Whether to enable automatic slide transitioning.</td>
                  </tr>
                  <tr>
                    <td className="font-semibold">`leftControlIcon`</td>
                    <td>JSX.Element (optional)</td>
                    <td>See Example</td>
                    <td>Custom icon for the left control.</td>
                  </tr>
                  <tr>
                    <td className="font-semibold">`rightControlIcon`</td>
                    <td>JSX.Element (optional)</td>
                    <td>See Example</td>
                    <td>Custom icon for the right control.</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>
        <section id="css_customization">
          <div className="mt-10">
            <h1 className="text-2xl mt-3 font-semibold">CSS Customization</h1>
            <p className="mt-2">
              You can further customize the appearance of the Slider component
              using CSS classes. These classes can be used to adjust the styles
              of the controls, navigation dots, and carousel items.
            </p>
          </div>
        </section>
        <section id="notes" className="pb-10">
          <div className="mt-10">
            <h1 className="text-2xl mt-3 font-semibold">Notes</h1>
            <div className="mt-4">
              <ul className="list-disc ml-6">
                <li>
                  The Slider component provides a responsive image carousel with
                  customizable controls and navigation dots.
                </li>
                <li>
                  It supports automatic slide transitioning with customizable
                  interval.
                </li>
              </ul>
            </div>
          </div>
        </section>
        <div className="mt-6 mb-10">
          <BottomLinks prevUrl="card" nextUrl="checkbox" />
        </div>
      </div>
      <RightSidebar sections={sections} />
    </div>
  );
};

export default Slider;
