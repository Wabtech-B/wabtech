/* eslint-disable react/no-unescaped-entities */

import RightSidebar from "@/components/common/RightSidebar";
import Alert from "@/components/wabtech/alert/Alert";
import FullWidthSnippet from "@/components/wabtech/tabs/FullWidthSnippet";
import IconsSnippet from "@/components/wabtech/tabs/IconsSnippet";
import PillsSnippet from "@/components/wabtech/tabs/PillsSnippet";
import TabsSnippet from "@/components/wabtech/tabs/TabsSnippet";

const Tabs = () => {
  const sections = [
    { id: "introduction", title: "Introduction" },
    { id: "default", title: "Default Tabs" },
    { id: "pills", title: "Pills Tabs" },
    { id: "full_width", title: "Full Width" },
    { id: "icons", title: "With Icons" },
    { id: "props", title: "Props" },
    { id: "css_customization", title: "Customization" },
  ];
  return (
    <div className="grid grid-cols-1 md:grid-cols-auto-200">
      <div>
        <section id="introduction">
          <h1 className="text-3xl font-semibold mb-4">Tabs</h1>
          <div className="my-4">
            <p>
              The Tabs component allows you to organize content into tabs with
              different styles and behaviors.
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
                  The <span className="code">Tabs.tsx</span> has the main code
                  for the component, the rest of the code in{" "}
                  <span className="code">App.tsx</span> shows you how to use the
                  component.
                </p>
              </Alert>
              <h1 className="text-xl mt-3">Default Tabs</h1>
              <p className="mt-2">
                You can use the Tabs component to create tabbed content.
              </p>
            </div>
          </div>
          <div className="mt-8">
            <TabsSnippet />
          </div>
        </section>

        <section id="pills">
          <div className="mt-10">
            <h1 className="text-xl mt-3">Pills Tabs</h1>
            <p className="mt-2">
              The Tabs component supports two different tab styles:{" "}
              <span className="code">`pills`</span> and{" "}
              <span className="code">`indicator`</span>.
            </p>
            <div className="mt-8">
              <PillsSnippet />
            </div>
          </div>
        </section>

        <section id="full_width">
          <div className="mt-10">
            <h1 className="text-xl mt-3">Full Width</h1>
            <p className="mt-2">
              You can make the Tabs component take up the full width of its
              container by setting the <span className="code">`full`</span> prop
              to <span className="code">`true`</span>.
            </p>
            <div className="mt-8">
              <FullWidthSnippet />
            </div>
          </div>
        </section>

        <section id="icons">
          <div className="mt-10">
            <h1 className="text-xl mt-3">Tabs with Icons</h1>
            <p className="mt-2">You can include icons in tab titles.</p>
            <div className="mt-8">
              <IconsSnippet />
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
                    <th>Prop</th>
                    <th>Type</th>
                    <th>Default</th>
                    <th>Description</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="font-semibold">`variant`</td>
                    <td>
                      <span className="code">`pills`</span> |{" "}
                      <span className="code">`indicator`</span> (optional)
                    </td>
                    <td>"indicator"</td>
                    <td>The style variant of the tabs.</td>
                  </tr>
                  <tr>
                    <td className="font-semibold">`full`</td>
                    <td>boolean (optional)</td>
                    <td>false</td>
                    <td>
                      Whether the tabs should take the full width of the
                      container.
                    </td>
                  </tr>
                  <tr>
                    <td className="font-semibold">`children`</td>
                    <td>React.ReactNode</td>
                    <td></td>
                    <td>Tabs content and associated components.</td>
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
              You can further customize the appearance of the Tabs component
              using CSS classes. These classes can be used to adjust the styles
              of the tabs buttons and indicators.
            </p>
          </div>
        </section>
        <section id="notes" className="pb-10">
          <div className="mt-10">
            <h1 className="text-2xl mt-3 font-semibold">Notes</h1>
            <div className="mt-4">
              <ul className="list-disc ml-6">
                <li>
                  The Tabs component allows you to organize content into tabs
                  with different styles and behaviors.
                </li>
                <li>
                  It supports two tab variants:{" "}
                  <span className="code">`pills`</span> and{" "}
                  <span className="code">`indicator`</span>.
                </li>
                <li>
                  You can create full-width tabs by setting the{" "}
                  <span className="code">`full`</span> prop to{" "}
                  <span className="code">`true`</span>.
                </li>
                <li>Tabs can also include icons in their titles.</li>
              </ul>
            </div>
          </div>
        </section>
      </div>
      <RightSidebar sections={sections} />
    </div>
  );
};

export default Tabs;
