/* eslint-disable react/no-unescaped-entities */

import CopyIcon from "@/components/common/CopyIcon";
import CodeSnippet from "../installation/CodeSnippet";
import Alert from "@/components/wabtech/alert/Alert";
import SelectSnippet from "@/components/wabtech/select/SelectSnippet";
import WithIconSnippet from "@/components/wabtech/select/WithIconSnippet";
import InvalidFeedbackSnippet from "@/components/wabtech/select/InvalidFeedbackSnippet";
import FormikSnippet from "@/components/wabtech/select/FormikSnippet";
import RightSidebar from "@/components/common/RightSidebar";
import BottomLinks from "@/components/common/BottomLinks";

const Select = () => {
  const sections = [
    { id: "introduction", title: "Introduction" },
    { id: "default", title: "Default Select" },
    { id: "with_icon", title: "With Icon" },
    { id: "with_invalid_feedback", title: "Invalid Feedback" },
    { id: "formik", title: "With Formik & Yup" },
    { id: "props", title: "Props" },
    { id: "css_customization", title: "Customization" },
  ];
  const installDeps = `npm install framer-motion`;
  return (
    <div className="grid grid-cols-1 md:grid-cols-auto-200">
      <div>
        <section id="introduction">
          <h1 className="text-3xl font-semibold mb-4">Select</h1>
          <div className="my-4">
            <p>
              The Select component allows users to choose an option from a
              dropdown list.{" "}
              <span className="text-yellow-500">
                Remember this component adapts to the space below or above the
                browser window.
              </span>
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
                  The <span className="code">Select.tsx</span> has the main code
                  for the component, the rest of the code in{" "}
                  <span className="code">App.tsx</span> shows you how to use the
                  component.
                </p>
              </Alert>
              <h1 className="text-xl mt-3">Default Select</h1>
              <p className="mt-2">
                You can use the Select component to create a dropdown select
                input. You can also use <span className="code">`escape`</span>{" "}
                key to close the Select
              </p>
            </div>
          </div>
          <div className="mt-8">
            <SelectSnippet />
          </div>
        </section>

        <section id="with_icon">
          <div className="mt-10">
            <h1 className="text-xl mt-3">Select with icon</h1>
            <p className="mt-2">
              Pass a <span className="code">`icon`</span> prop to the Select for
              adding an icon.
            </p>
            <div className="mt-8">
              <WithIconSnippet />
            </div>
          </div>
        </section>

        <section id="with_invalid_feedback">
          <div className="mt-10">
            <h1 className="text-xl mt-3">Select with Invalid Feedback</h1>
            <p className="mt-2">
              You can use the <span className="code">`invalid`</span> prop to
              show invalid feedback.
            </p>
            <div className="mt-8">
              <InvalidFeedbackSnippet />
            </div>
          </div>
        </section>

        <section id="formik">
          <div className="mt-10">
            <h1 className="text-xl mt-3">Select with Formik</h1>
            <p className="mt-2">
              The Select component can be integrated with{" "}
              <a
                href="https://formik.org/"
                className="text-primary hover:underline"
                target="_blank"
              >
                Formik
              </a>{" "}
              for form management and{" "}
              <a
                href="https://www.npmjs.com/package/yup"
                className="text-primary hover:underline"
                target="_blank"
              >
                Yup
              </a>{" "}
              for validation.
            </p>
            <div className="mt-8">
              <FormikSnippet />
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
                    <td className="font-semibold">`options`</td>
                    <td>Option[]</td>
                    <td>See Example</td>
                    <td>An array of options for the select.</td>
                  </tr>
                  <tr>
                    <td className="font-semibold">`icon`</td>
                    <td>JSX.Element (optional)</td>
                    <td>See Example</td>
                    <td>An optional icon to display beside the select.</td>
                  </tr>
                  <tr>
                    <td className="font-semibold">`text`</td>
                    <td>string (invalid)</td>
                    <td>"Select a role"</td>
                    <td>An optional select text placeholder</td>
                  </tr>
                  <tr>
                    <td className="font-semibold">`invalid`</td>
                    <td>boolean (optional)</td>
                    <td>true</td>
                    <td>
                      Indicates if the select field is in an invalid state.
                    </td>
                  </tr>
                  <tr>
                    <td className="font-semibold">`onSelect`</td>
                    <td>function</td>
                    <td>handleSelectChange</td>
                    <td>The function called on select.</td>
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
              You can further customize the appearance of the Select component
              using CSS classes. These classes can be used to adjust the styles
              of the select input and dropdown.
            </p>
          </div>
        </section>
        <section id="notes" className="pb-10">
          <div className="mt-10">
            <h1 className="text-2xl mt-3 font-semibold">Notes</h1>
            <div className="mt-4">
              <ul className="list-disc ml-6">
                <li>
                  The Select component allows users to choose an option from a
                  dropdown list.
                </li>
                <li>
                  The dropdown opens when the button is clicked, and the
                  selected option is displayed.
                </li>
                <li>The dropdown can be searched using the input field.</li>
              </ul>
            </div>
          </div>
        </section>
        <div className="mt-6 mb-10">
          <BottomLinks prevUrl="scrollable" nextUrl="stepper" />
        </div>
      </div>
      <RightSidebar sections={sections} />
    </div>
  );
};

export default Select;
