/* eslint-disable react/no-unescaped-entities */

import RightSidebar from "@/components/common/RightSidebar";
import Alert from "@/components/wabtech/alert/Alert";
import CheckboxSnippet from "@/components/wabtech/checkbox/CheckboxSnippet";
import FormikSnippet from "@/components/wabtech/checkbox/FormikSnippet";
import GroupSnippet from "@/components/wabtech/checkbox/GroupSnippet";

const Checkbox = () => {
  const sections = [
    { id: "introduction", title: "Introduction" },
    { id: "single_checkbox", title: "Single Checkbox" },
    { id: "group", title: "Group Checkboxes" },
    { id: "formik", title: "With Formik & Yup" },
    { id: "props", title: "Props" },
    { id: "css_customization", title: "Customization" },
  ];
  return (
    <div className="grid grid-cols-1 md:grid-cols-auto-200">
      <div>
        <section id="introduction">
          <h1 className="text-3xl font-semibold mb-4">Checkbox</h1>
          <div className="my-4">
            <p>
              The Checkbox component is used to create customizable checkboxes
              for user input.
            </p>
          </div>
        </section>
        <section id="single_checkbox">
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
                  The <span className="code">Checkbox.tsx</span> has the main
                  code for the component, the rest of the code in{" "}
                  <span className="code">App.tsx</span> shows you how to use the
                  component.
                </p>
              </Alert>
              <h1 className="text-xl mt-3">Single Checkbox</h1>
              <p className="mt-2">
                The Checkbox component can be used to create a single checkbox.
              </p>
            </div>
          </div>
          <div className="mt-8">
            <CheckboxSnippet />
          </div>
        </section>

        <section id="group">
          <div className="mt-10">
            <h1 className="text-xl mt-3">Using it in a group</h1>
            <p className="mt-2">
              This example demonstrates how to use the Checkbox component in a
              group
            </p>
            <div className="mt-8">
              <GroupSnippet />
            </div>
          </div>
        </section>

        <section id="formik">
          <div className="mt-10">
            <h1 className="text-xl mt-3">Formik & Yup Integration</h1>
            <p className="mt-2">
              The Checkbox component can be integrated with{" "}
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
                    <td className="font-semibold">`label`</td>
                    <td>string</td>
                    <td>'Enable Feature'</td>
                    <td>The label for the checkbox.</td>
                  </tr>
                  <tr>
                    <td className="font-semibold">`value`</td>
                    <td>string</td>
                    <td>'feature'</td>
                    <td>The value associated with the checkbox.</td>
                  </tr>
                  <tr>
                    <td className="font-semibold">`onChange`</td>
                    <td>function (optional)</td>
                    <td>() =&gt; console.log('Clicked')</td>
                    <td>Change event handler function.</td>
                  </tr>
                  <tr>
                    <td className="font-semibold">`checked`</td>
                    <td>boolean (optional)</td>
                    <td>true or false</td>
                    <td>Whether the checkbox is checked.</td>
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
              The Checkbox component's appearance can be further customized
              using Tailwind CSS classes. You can adjust the size, border,
              colors, and other properties.
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
                  your project, including React and Formik.
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

export default Checkbox;
