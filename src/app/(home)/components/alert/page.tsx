/* eslint-disable react/no-unescaped-entities */

import BottomLinks from "@/components/common/BottomLinks";
import RightSidebar from "@/components/common/RightSidebar";
import Alert from "@/components/wabtech/alert/Alert";
import AlertSnippet from "@/components/wabtech/alert/AlertSnippet";
import RemovableSnippet from "@/components/wabtech/alert/RemovableSnippet";
import TitleSnippet from "@/components/wabtech/alert/TitleSnippet";
import VariantsSnippet from "@/components/wabtech/alert/VariantsSnippet";

const AlertPage = () => {
  const sections = [
    { id: "introduction", title: "Introduction" },
    { id: "default_alert", title: "Default" },
    { id: "variants", title: "Variants" },
    { id: "title", title: "Title" },
    { id: "removable", title: "Removable" },
    { id: "props", title: "Props" },
    { id: "css_customization", title: "Customization" },
  ];
  return (
    <div className="grid grid-cols-1 md:grid-cols-auto-200">
      <div>
        <section id="introduction">
          <h1 className="text-3xl font-semibold mb-4">Alert</h1>
          <div className="my-4">
            <p>
              The Alert component provides a way to display contextual messages
              or notifications to users.
            </p>
          </div>
        </section>
        <section id="default_alert">
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
                  The <span className="code">Alert.tsx</span> has the main code
                  for the component, the rest of the code in{" "}
                  <span className="code">App.tsx</span> shows you how to use the
                  component.
                </p>
              </Alert>
              <h1 className="text-xl mt-3">Default Alert</h1>
              <p className="mt-2">
                The default Alert component displays a simple message with a
                neutral appearance.
              </p>
            </div>
          </div>
          <div className="mt-8">
            <AlertSnippet />
          </div>
        </section>
        <section id="variants" className="mt-10">
          <h1 className="text-xl mt-3">Alert Variants</h1>
          <p className="mt-2">
            You can use different variants to convey different types of
            messages. Available variants are{" "}
            <span className="code">`info`</span>,{" "}
            <span className="code">`success`</span>,{" "}
            <span className="code">`warning`</span>, and{" "}
            <span className="code">`error`</span>.
          </p>
          <div className="mt-8">
            <VariantsSnippet />
          </div>
        </section>
        <section id="title" className="mt-10">
          <h1 className="text-xl mt-3">Alert with Title</h1>
          <p className="mt-2">
            You can include a title along with the message for more context with
            the <span className="code">`title`</span> prop
          </p>
          <div className="mt-8">
            <TitleSnippet />
          </div>
        </section>
        <section id="removable" className="mt-10">
          <h1 className="text-xl mt-3">Removable Alert</h1>
          <p className="mt-2">
            An Alert can also be set as removable, allowing users to dismiss it.
            Just add the <span className="code">`removable`</span> prop
          </p>
          <div className="mt-8">
            <RemovableSnippet />
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
                    <td className="font-semibold">`variant`</td>
                    <td>
                      <span className="code">`default`</span> |{" "}
                      <span className="code">`success`</span> |{" "}
                      <span className="code">`warning`</span> |{" "}
                      <span className="code">`error`</span>
                    </td>
                    <td>default</td>
                    <td>The variant of the alert.</td>
                  </tr>
                  <tr>
                    <td className="font-semibold">`children`</td>
                    <td>React.ReactNode</td>
                    <td>See example</td>
                    <td>Content of the alert.</td>
                  </tr>
                  <tr>
                    <td className="font-semibold">`removable`</td>
                    <td>boolean (optional)</td>
                    <td>true</td>
                    <td>Whether the alert is removable.</td>
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
              The Alert component provides different styling based on the chosen
              variant. You can further customize the appearance by applying
              Tailwind CSS classes to the component's container and elements.
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
          <BottomLinks prevUrl="accordion" nextUrl="avatar" />
        </div>
      </div>
      <RightSidebar sections={sections} />
    </div>
  );
};

export default AlertPage;
