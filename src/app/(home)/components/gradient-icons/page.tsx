/* eslint-disable react/no-unescaped-entities */

import RightSidebar from "@/components/common/RightSidebar";
import Alert from "@/components/wabtech/alert/Alert";
import GradientIconSnippet from "@/components/wabtech/gradient-icons/GradientIconSnippet";
import StrokeSnippet from "@/components/wabtech/gradient-icons/StrokeSnippet";

const GradientIcons = () => {
  const sections = [
    { id: "introduction", title: "Introduction" },
    { id: "default", title: "Default gradient icons" },
    { id: "stroke", title: "With stroke" },
    { id: "props", title: "Props" },
    { id: "css_customization", title: "Customization" },
  ];
  return (
    <div className="grid grid-cols-1 md:grid-cols-auto-200">
      <div>
        <section id="introduction">
          <h1 className="text-3xl font-semibold mb-4">GradientIcon</h1>
          <div className="my-4">
            <p>
              The GradientIcon component allows you to display SVG icons with a
              gradient fill or stroke.
            </p>
          </div>
        </section>
        <section id="default">
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
                  The <span className="code">GradientIcon.tsx</span> has the
                  main code for the component, the rest of the code in{" "}
                  <span className="code">App.tsx</span> shows you how to use the
                  component.
                </p>
              </Alert>
              <h1 className="text-xl mt-3">GradientIcon with Fill</h1>
              <p className="mt-2">
                The default component shows solid gradient icons
              </p>
            </div>
          </div>
          <div className="mt-8">
            <GradientIconSnippet />
          </div>
        </section>

        <section id="stroke">
          <div className="mt-10">
            <h1 className="text-xl mt-3">GradientIcon with Stroke</h1>
            <p className="mt-2">
              You can use the GradientIcon component to display an SVG icon with
              a gradient stroke by setting the{" "}
              <span className="code">`stroke`</span> prop.
            </p>
            <div className="mt-8">
              <StrokeSnippet />
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
                    <td className="font-semibold">`icon`</td>
                    <td>React.ComponentType</td>
                    <td>FiHeart</td>
                    <td>The SVG icon component.</td>
                  </tr>
                  <tr>
                    <td className="font-semibold">`gradientId`</td>
                    <td>string</td>
                    <td>"heart-gradient"</td>
                    <td>The unique ID for the gradient used in the icon.</td>
                  </tr>
                  <tr>
                    <td className="font-semibold">`gradientColors`</td>
                    <td>string[]</td>
                    <td>['#FFC600', '#FF6B00', '#FF3800']</td>
                    <td>An array of colors for the gradient.</td>
                  </tr>
                  <tr>
                    <td className="font-semibold">`stroke`</td>
                    <td>boolean (optional)</td>
                    <td>true</td>
                    <td>Specifies if the gradient is applied to the stroke.</td>
                  </tr>
                  <tr>
                    <td className="font-semibold">`className`</td>
                    <td>string (optional)</td>
                    <td>"custom-icon"</td>
                    <td>
                      Additional CSS class names to apply to the icon container.
                    </td>
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
              You can further customize the appearance of the GradientIcon using
              CSS classes. These classes can be used to adjust the styles,
              positions, and sizes of the icons.
            </p>
          </div>
        </section>
        <section id="notes" className="pb-10">
          <div className="mt-10">
            <h1 className="text-2xl mt-3 font-semibold">Notes</h1>
            <div className="mt-4">
              <ul className="list-disc ml-6">
                <li>
                  The GradientIcon component provides a visually appealing way
                  to display SVG icons with gradient fills or strokes.
                </li>
                <li>
                  The component offers flexibility in choosing gradient colors
                  and whether to apply gradients to fills or strokes.
                </li>
                <li>
                  Be sure to have the required dependencies, including
                  <span className="code">react-icons</span>, in your project.
                </li>
              </ul>
            </div>
          </div>
        </section>
      </div>
      <RightSidebar sections={sections} />
    </div>
  );
};

export default GradientIcons;
