/* eslint-disable react/no-unescaped-entities */

import RightSidebar from "@/components/common/RightSidebar";
import AccordionSnippet from "@/components/wabtech/accordion/AccordionSnippet";
import MultipleOpenSnippet from "@/components/wabtech/accordion/MultipleOpenSnippet";
import OpenCloseIconsSnippet from "@/components/wabtech/accordion/OpenCloseIconsSnippet";
import Alert from "@/components/wabtech/alert/Alert";

const Accordion = () => {
  const sections = [
    { id: "introduction", title: "Introduction" },
    { id: "default_accordion", title: "Default" },
    { id: "open_multiple", title: "Multiple Open Sections" },
    { id: "custom_icons", title: "Custom Icons" },
    { id: "props", title: "Props" },
    { id: "css_customization", title: "Customization" },
    { id: "notes", title: "Notes" },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-auto-200">
      <div>
        <section id="introduction">
          <h1 className="text-3xl font-semibold mb-4">Accordion</h1>
          <div className="my-4">
            <p>
              The Accordion component provides a way to create collapsible
              sections of content. Users can click on the accordion header to
              expand or collapse the associated content.
            </p>
          </div>
        </section>
        <section id="default_accordion">
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
                  The <span className="code">Accordion.tsx</span> has the main
                  code for the component, the rest of the code in{" "}
                  <span className="code">App.tsx</span> shows you how to use the
                  component.
                </p>
              </Alert>
            </div>
            <h1 className="text-xl mt-3">Default Accordion</h1>
            <p className="mt-2">
              The default behavior of the Accordion allows only one section to
              be open at a time.
            </p>
          </div>
          <div className="mt-8">
            <AccordionSnippet />
          </div>
        </section>
        <section id="open_multiple">
          <div className="mt-10">
            <h1 className="text-xl mt-3">
              Accordion with Multiple Open Sections
            </h1>
            <p className="mt-2">
              To allow multiple sections to be open simultaneously, set the{" "}
              <span className="code">`openMultiple`</span> prop to{" "}
              <span className="code">`true`.</span>
            </p>
            <div className="mt-8">
              <MultipleOpenSnippet />
            </div>
          </div>
        </section>
        <section id="custom_icons">
          <div className="mt-10">
            <h1 className="text-xl mt-3">Accordion with Custom Icons</h1>
            <p className="mt-2">
              You can customize the open and close icons of the accordion items
              using the <span className="code">`openIcon`</span> and{" "}
              <span className="code">`closeIcon`</span> props.
            </p>
            <div className="mt-8">
              <OpenCloseIconsSnippet />
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
                    <th>Example value</th>
                    <th>Description</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="font-semibold">`openMultiple`</td>
                    <td>boolean (optional)</td>
                    <td>true</td>
                    <td>
                      Determines whether multiple accordion items can be open
                      simultaneously. Default is{" "}
                      <span className="code">`false`</span>.
                    </td>
                  </tr>
                  <tr>
                    <td className="font-semibold">`children`</td>
                    <td>array of ReactElement</td>
                    <td>See example</td>
                    <td>An array of AccordionItem components.</td>
                  </tr>
                  <tr>
                    <td className="font-semibold">`openIcon`</td>
                    <td>JSX.Element (optional)</td>
                    <td>See example</td>
                    <td>Custom icon for the open state of accordion items.</td>
                  </tr>
                  <tr>
                    <td className="font-semibold">`closeIcon`</td>
                    <td>JSX.Element (optional)</td>
                    <td>See example</td>
                    <td>
                      Custom icon for the closed state of accordion items.
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div className="mt-10">
            <h1 className="text-2xl">AccordionItem</h1>
            <p>
              The AccordionItem component represents a single collapsible
              section within the Accordion.
            </p>
          </div>
        </section>
        <section id="css_customization">
          <div className="mt-10">
            <h1 className="text-2xl mt-3 font-semibold">CSS Customization</h1>
            <p className="mt-2">
              The Accordion and AccordionItem components have predefined styles
              based on the Tailwind CSS framework. You can customize the
              appearance by applying Tailwind CSS classes to the component's
              container and elements.
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
                <li>
                  It's recommended to pass unique keys to each AccordionItem
                  when mapping over the children to avoid React rendering
                  errors.
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

export default Accordion;
