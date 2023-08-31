/* eslint-disable react/no-unescaped-entities */

import CopyIcon from "@/components/common/CopyIcon";
import CodeSnippet from "../installation/CodeSnippet";
import Alert from "@/components/wabtech/alert/Alert";
import ModalSnippet from "@/components/wabtech/modal/ModalSnippet";
import CustomStateSnippet from "@/components/wabtech/modal/CustomStateSnippet";
import VariantsSnippet from "@/components/wabtech/modal/VariantsSnippet";
import RightSidebar from "@/components/common/RightSidebar";
import BottomLinks from "@/components/common/BottomLinks";

const Modal = () => {
  const sections = [
    { id: "introduction", title: "Introduction" },
    { id: "default", title: "Default Modal" },
    { id: "custom_state", title: "Custom state" },
    { id: "variants", title: "Variants" },
    { id: "props", title: "Props" },
    { id: "css_customization", title: "Customization" },
  ];
  const installDeps = `npm install framer-motion`;
  return (
    <div className="grid grid-cols-1 md:grid-cols-auto-200">
      <div>
        <section id="introduction">
          <h1 className="text-3xl font-semibold mb-4">Modal</h1>
          <div className="my-4">
            <p>
              The Modal component allows you to create modal dialogs with
              different sizes and behaviors, such as custom triggers, titles,
              and variants.
            </p>
          </div>
        </section>
        <section id="default">
          <div className="mt-8">
            <h1 className="text-2xl font-semibold">Installation</h1>
            <p className="mt-2">
              This component uses{" "}
              <a
                href="https://www.framer.com/api/motion/"
                target="_blank"
                className=" text-primary hover:underline"
              >
                framer-motion
              </a>{" "}
              for the slide-in animations. If you intend to use this component,
              make sure to install it.
            </p>
            <div className="bg-zinc-950 border border-zinc-700 p-2 rounded-lg my-4 relative">
              <CodeSnippet snippet={installDeps} />

              <div className="absolute top-5 right-4">
                <CopyIcon text={installDeps} />
              </div>
            </div>
            <h1 className="text-2xl font-semibold mt-6">Usage</h1>
            <div className="my-4">
              <Alert variant="warning">
                <h1 className="text-2xl">Please Note:</h1>
                <p className="mt-2">
                  The <span className="code">Modal.tsx</span> has the main code
                  for the component, the rest of the code in{" "}
                  <span className="code">App.tsx</span> shows you how to use the
                  component.
                </p>
              </Alert>
              <h1 className="text-xl mt-3">
                Default Modal with Custom Trigger
              </h1>
              <p className="mt-2">
                The default modal comes with a custom trigger passed as a prop.
                You can also close the modal using the{" "}
                <span className="code">escape</span> key
              </p>
            </div>
          </div>
          <div className="mt-8">
            <ModalSnippet />
          </div>
        </section>

        <section id="custom_state">
          <div className="mt-10">
            <h1 className="text-xl mt-3">Managing Your Own State</h1>
            <p className="mt-2">
              You can also manage your own state for the modal by using{" "}
              <span className="code">``useState</span> hook and passing{" "}
              <span className="code">`isOpen`</span> and{" "}
              <span className="code">`onClose`</span> props to the Modal
            </p>
            <div className="mt-8">
              <CustomStateSnippet />
            </div>
          </div>
        </section>

        <section id="variants">
          <div className="mt-10">
            <h1 className="text-xl mt-3">Modal with Different variants</h1>
            <p className="mt-2">
              You can adjust the modal's variant using the
              <span className="code">`variant`</span> prop.The available
              variants are <span className="code">`small`</span>,{" "}
              <span className="code">`medium` </span>,{" "}
              <span className="code">`large`</span>,{" "}
              <span className="code">`full`</span> and{" "}
              <span className="code">`scrollable`</span>. The default is
              <span className="code">`medium`</span>
            </p>
            <div className="mt-8">
              <VariantsSnippet />
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
                    <td className="font-semibold">`isOpen`</td>
                    <td>boolean (optional)</td>
                    <td>true</td>
                    <td>Specifies if the modal is open or closed.</td>
                  </tr>
                  <tr>
                    <td className="font-semibold">`onClose`</td>
                    <td>function (optional)</td>
                    <td>handleCloseModal</td>
                    <td>The function called when the modal is closed.</td>
                  </tr>
                  <tr>
                    <td className="font-semibold">`children`</td>
                    <td>React.ReactNode </td>
                    <td>&lt;p&gt;Modal content&lt;/p&gt;</td>
                    <td>The content to be displayed within the modal.</td>
                  </tr>
                  <tr>
                    <td className="font-semibold">`variant`</td>
                    <td>
                      {" "}
                      <span className="code">`small`</span>|{" "}
                      <span className="code">`medium`</span>|{" "}
                      <span className="code">`large`</span>|{" "}
                      <span className="code">`full`</span>|{" "}
                      <span className="code">`scrollable`</span> (optional)
                    </td>
                    <td>"medium"</td>
                    <td>
                      The size variant of the modal (
                      <span className="code">`small`</span>,{" "}
                      <span className="code">`medium`</span>,{" "}
                      <span className="code">`large`</span>,{" "}
                      <span className="code">`full`</span>,{" "}
                      <span className="code">`scrollable`</span> ).
                    </td>
                  </tr>
                  <tr>
                    <td className="font-semibold">`title`</td>
                    <td>string (optional)</td>
                    <td>"Modal Title"</td>
                    <td>The title to be displayed at the top of the modal.</td>
                  </tr>
                  <tr>
                    <td className="font-semibold">`openTrigger`</td>
                    <td>JSX.Element (optional)</td>
                    <td>&lt;button&gt;Open Modal&lt;/button&gt;</td>
                    <td>A custom trigger element to open the modal.</td>
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
              You can further customize the appearance of the Modal component
              using CSS classes. These classes can be used to adjust the styles
              and positions of the modal content.
            </p>
          </div>
        </section>
        <section id="notes" className="pb-10">
          <div className="mt-10">
            <h1 className="text-2xl mt-3 font-semibold">Notes</h1>
            <div className="mt-4">
              <ul className="list-disc ml-6">
                <li>
                  The Modal component provides a flexible way to create modal
                  dialogs with different sizes and behaviors.
                </li>
                <li>
                  The <span className="code">`variant`</span> prop lets you
                  choose from different modal sizes, such as small, medium,
                  large, full-screen, and scrollable.
                </li>
              </ul>
            </div>
          </div>
        </section>
        <div className="mt-6 mb-10">
          <BottomLinks prevUrl="kanban-board" nextUrl="multiselect" />
        </div>
      </div>
      <RightSidebar sections={sections} />
    </div>
  );
};

export default Modal;
