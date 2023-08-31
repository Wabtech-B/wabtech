/* eslint-disable react/no-unescaped-entities */

import BottomLinks from "@/components/common/BottomLinks";
import RightSidebar from "@/components/common/RightSidebar";
import Alert from "@/components/wabtech/alert/Alert";
import FloatingInputSnippet from "@/components/wabtech/floating-input/FloatingInputSnippet";
import FormikSnippet from "@/components/wabtech/floating-input/FormikSnippet";
import IconSnippet from "@/components/wabtech/floating-input/IconSnippet";
import InvalidSnippet from "@/components/wabtech/floating-input/InvalidSnippet";
import TypeSnippet from "@/components/wabtech/floating-input/TypeSnippet";

const FloatingInput = () => {
  const sections = [
    { id: "introduction", title: "Introduction" },
    { id: "basic", title: "Basic Floating inputs" },
    { id: "types", title: "Input Types" },
    { id: "icon", title: "With icon" },
    { id: "invalid_feedback", title: "Invalid feedback" },
    { id: "formik", title: "With Formik & Yup" },
    { id: "props", title: "Props" },
    { id: "css_customization", title: "Customization" },
  ];
  return (
    <div className="grid grid-cols-1 md:grid-cols-auto-200">
      <div>
        <section id="introduction">
          <h1 className="text-3xl font-semibold mb-4">FloatingInput</h1>
          <div className="my-4">
            <p>
              The FloatingInput component creates a floating input field with a
              label that animates when the input is focused or has content.
            </p>
          </div>
        </section>
        <section id="basic">
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
                  The <span className="code">FloatingInput.tsx</span> has the
                  main code for the component, the rest of the code in{" "}
                  <span className="code">App.tsx</span> shows you how to use the
                  component.
                </p>
              </Alert>
              <h1 className="text-xl mt-3">Basic FloatingInput</h1>
              <p className="mt-2">
                The FloatingInput component can be used to create a basic input
                field/ textarea with a floating label.
              </p>
            </div>
          </div>
          <div className="mt-8">
            <FloatingInputSnippet />
          </div>
        </section>

        <section id="types">
          <div className="mt-10">
            <h1 className="text-xl mt-3">FloatingInput types</h1>
            <p className="mt-2">
              You can specify the type of the input using the{" "}
              <span className="code">`type`</span> prop. E.g{" "}
              <span className="code">"password"</span>,{" "}
              <span className="code">"number"</span>
            </p>
            <div className="mt-8">
              <TypeSnippet />
            </div>
          </div>
        </section>

        <section id="icon">
          <div className="mt-10">
            <h1 className="text-xl mt-3">FloatingInput with Icon</h1>
            <p className="mt-2">
              You can add an icon to the FloatingInput using the{" "}
              <span className="code">`icon`</span> prop.
            </p>
            <div className="mt-8">
              <IconSnippet />
            </div>
          </div>
        </section>

        <section id="invalid_feedback">
          <div className="mt-10">
            <h1 className="text-xl mt-3">
              FloatingInput with Invalid Feedback & error text
            </h1>
            <p className="mt-2">
              You can provide error validation feedback to the FloatingInput
              using the <span className="code">`invalid`</span> and{" "}
              <span className="code">`errorText`</span> props.
            </p>
            <div className="mt-8">
              <InvalidSnippet />
            </div>
          </div>
        </section>

        <section id="formik">
          <div className="mt-10">
            <h1 className="text-xl mt-3">
              FloatingInput with Formik & Yup Integration
            </h1>
            <p className="mt-2">
              The FloatingInput component can be integrated with{" "}
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
                    <td>"Username"</td>
                    <td>The label for the input field.</td>
                  </tr>
                  <tr>
                    <td className="font-semibold">`value`</td>
                    <td>string</td>
                    <td>"john_doe"</td>
                    <td>The value of the input field.</td>
                  </tr>
                  <tr>
                    <td className="font-semibold">`name`</td>
                    <td>string (optional)</td>
                    <td>"username"</td>
                    <td>The name attribute for the input field.</td>
                  </tr>
                  <tr>
                    <td className="font-semibold">`id`</td>
                    <td>string (optional)</td>
                    <td>"username"</td>
                    <td>The id attribute for the input field.</td>
                  </tr>
                  <tr>
                    <td className="font-semibold">`onChange`</td>
                    <td>function</td>
                    <td>handleChange</td>
                    <td>The function to handle input changes.</td>
                  </tr>
                  <tr>
                    <td className="font-semibold">`onBlur`</td>
                    <td>function (optional)</td>
                    <td>handleBlur</td>
                    <td>The function to handle input blur events.</td>
                  </tr>
                  <tr>
                    <td className="font-semibold">`type`</td>
                    <td>string (optional)</td>
                    <td>"text"</td>
                    <td>
                      The type of the input field (e.g.,{" "}
                      <span className="code">"text"</span>,{" "}
                      <span className="code">"password"</span> ).
                    </td>
                  </tr>
                  <tr>
                    <td className="font-semibold">`icon`</td>
                    <td>React.ReactNode (optional)</td>
                    <td>&lt;FiUser /&gt;</td>
                    <td>An optional icon to display beside the input field.</td>
                  </tr>
                  <tr>
                    <td className="font-semibold">`invalid`</td>
                    <td>boolean (optional)</td>
                    <td>true</td>
                    <td>
                      Indicates if the input field is in an invalid state.
                    </td>
                  </tr>
                  <tr>
                    <td className="font-semibold">`multline`</td>
                    <td>boolean (optional)</td>
                    <td>true</td>
                    <td>Indicates if the input is multiline.</td>
                  </tr>
                  <tr>
                    <td className="font-semibold">`cols`</td>
                    <td>number (optional)</td>
                    <td>40</td>
                    <td>The number of columns for a multiline input.</td>
                  </tr>
                  <tr>
                    <td className="font-semibold">`rows`</td>
                    <td>number (optional)</td>
                    <td>4</td>
                    <td>The number of rows for a multiline input.</td>
                  </tr>
                  <tr>
                    <td className="font-semibold">`errorText`</td>
                    <td>string (optional)</td>
                    <td>"Username is required"</td>
                    <td>
                      The error message to display when the input is in an
                      invalid state.
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
              The FloatingInput component's appearance can be further customized
              using CSS classes. You can adjust the styles, colors, and
              positions to match your design.
            </p>
          </div>
        </section>
        <section id="notes" className="pb-10">
          <div className="mt-10">
            <h1 className="text-2xl mt-3 font-semibold">Notes</h1>
            <div className="mt-4">
              <ul className="list-disc ml-6">
                <li>
                  The FloatingInput component provides a visually appealing
                  input with a floating label.
                </li>
                <li>
                  The component offers built-in validation and error feedback.
                </li>
                <li>
                  Be sure to have the required dependencies, including
                  <span className="code">react-icons</span>, in your project.
                </li>
              </ul>
            </div>
          </div>
        </section>
        <div className="mt-6 mb-10">
          <BottomLinks prevUrl="dropdown" nextUrl="gradient-icons" />
        </div>
      </div>
      <RightSidebar sections={sections} />
    </div>
  );
};

export default FloatingInput;
