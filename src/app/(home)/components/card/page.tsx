/* eslint-disable react/no-unescaped-entities */

import BottomLinks from "@/components/common/BottomLinks";
import RightSidebar from "@/components/common/RightSidebar";
import Alert from "@/components/wabtech/alert/Alert";
import CardSnippet from "@/components/wabtech/card/CardSnippet";
import CustomSnippet from "@/components/wabtech/card/CustomSnippet";

const Card = () => {
  const sections = [
    { id: "introduction", title: "Introduction" },
    { id: "default_card", title: "Default" },
    { id: "custom", title: "Custom" },
    { id: "props", title: "Props" },
    { id: "css_customization", title: "Customization" },
  ];
  return (
    <div className="grid grid-cols-1 md:grid-cols-auto-200">
      <div>
        <section id="introduction">
          <h1 className="text-3xl font-semibold mb-4">Card</h1>
          <div className="my-4">
            <p>
              The Card component is used to create customizable content cards.
            </p>
          </div>
        </section>
        <section id="default_card">
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
                  The <span className="code">Card.tsx</span> has the main code
                  for the component, the rest of the code in{" "}
                  <span className="code">App.tsx</span> shows you how to use the
                  component.
                </p>
              </Alert>
              <h1 className="text-xl mt-3">Default Card</h1>
              <p className="mt-2">
                The default Card component displays a content card with a basic
                style.
              </p>
            </div>
          </div>
          <div className="mt-8">
            <CardSnippet />
          </div>
        </section>

        <section id="custom">
          <div className="mt-10">
            <h1 className="text-xl mt-3">Custom Card</h1>
            <p className="mt-2">
              You can customize the Card component further by providing a custom
              class name.
            </p>
            <div className="mt-8">
              <CustomSnippet />
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
                    <td className="font-semibold">
                      <code>`children`</code>
                    </td>
                    <td>React.ReactNode</td>
                    <td>See example above</td>
                    <td>The content to be displayed within the card.</td>
                  </tr>
                  <tr>
                    <td className="font-semibold">
                      <code>`className`</code>
                    </td>
                    <td>string (optional)</td>
                    <td>
                      <code>'border-red-500'</code>
                    </td>
                    <td>Custom CSS class for the card container.</td>
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
              The Card component's appearance can be further customized using
              Tailwind CSS classes. You can adjust the padding, background
              color, border color, and other properties.
            </p>
          </div>
        </section>
        <section id="notes" className="pb-10">
          <div className="mt-10">
            <h1 className="text-2xl mt-3 font-semibold">Notes</h1>
            <div className="mt-4">
              <ul className="list-disc ml-6">
                <li>
                  Ensure that you have the necessary dependencies installed in
                  your project, including React and Tailwind CSS.
                </li>
              </ul>
            </div>
          </div>
        </section>
        <div className="mt-6 mb-10">
          <BottomLinks prevUrl="button" nextUrl="slider" />
        </div>
      </div>
      <RightSidebar sections={sections} />
    </div>
  );
};

export default Card;
