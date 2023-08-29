/* eslint-disable react/no-unescaped-entities */

import RightSidebar from "@/components/common/RightSidebar";
import Alert from "@/components/wabtech/alert/Alert";
import FormikSnippet from "@/components/wabtech/radio/FormikSnippet";
import RadioSnippet from "@/components/wabtech/radio/RadioSnippet";

const Radio = () => {
  const sections = [
    { id: "introduction", title: "Introduction" },
    { id: "example", title: "Radio Example" },
    { id: "formik", title: "With Formik & Yup" },
    { id: "props", title: "Props" },
    { id: "css_customization", title: "Customization" },
  ];
  return (
    <div className="grid grid-cols-1 md:grid-cols-auto-200">
      <div>
        <section id="introduction">
          <h1 className="text-3xl font-semibold mb-4">Radio</h1>
          <div className="my-4">
            <p>
              The Radio component allows users to select a single option from a
              list of choices.
            </p>
          </div>
        </section>
        <section id="example">
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
                  The <span className="code">Radio.tsx</span> has the main code
                  for the component, the rest of the code in{" "}
                  <span className="code">App.tsx</span> shows you how to use the
                  component.
                </p>
              </Alert>
              <h1 className="text-xl mt-3">Basic Radio Button</h1>
              <p className="mt-2">
                You can use the Radio component to create basic radio buttons.
              </p>
            </div>
          </div>
          <div className="mt-8">
            <RadioSnippet />
          </div>
        </section>

        <section id="formik">
          <div className="mt-10">
            <h1 className="text-xl mt-3">
              Radio Buttons Formik & Yup Integration
            </h1>
            <p className="mt-2">
              The Radio component can be integrated with{" "}
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
                    <td>'Male'</td>
                    <td>The label text for the radio button.</td>
                  </tr>
                  <tr>
                    <td className="font-semibold">`value`</td>
                    <td>string</td>
                    <td>'male'</td>
                    <td>The value of the radio button.</td>
                  </tr>
                  <tr>
                    <td className="font-semibold">`name`</td>
                    <td>string</td>
                    <td>'gender'</td>
                    <td>The name attribute for the radio button.</td>
                  </tr>
                  <tr>
                    <td className="font-semibold">`id`</td>
                    <td>string (optional)</td>
                    <td>'male'</td>
                    <td>The id attribute for the radio button.</td>
                  </tr>
                  <tr>
                    <td className="font-semibold">`checked`</td>
                    <td>boolean (optional)</td>
                    <td>true</td>
                    <td>Whether the radio button is checked.</td>
                  </tr>
                  <tr>
                    <td className="font-semibold">`onChange`</td>
                    <td>function (optional)</td>
                    <td>handleRadioChange</td>
                    <td>The function called on change.</td>
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
              You can further customize the appearance of the Radio component
              using CSS classes. These classes can be used to adjust the styles
              of the radio buttons and labels.
            </p>
          </div>
        </section>
        <section id="notes" className="pb-10">
          <div className="mt-10">
            <h1 className="text-2xl mt-3 font-semibold">Notes</h1>
            <div className="mt-4">
              <ul className="list-disc ml-6">
                <li>
                  The Radio component allows users to select a single option
                  from a list of choices.
                </li>
                <li>
                  The <span className="code">`onChange`</span> callback is
                  triggered when the radio button selection changes.
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

export default Radio;
