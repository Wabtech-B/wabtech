import CopyIcon from "@/components/common/CopyIcon";
import CodeSnippet from "../installation/CodeSnippet";
import Alert from "@/components/wabtech/alert/Alert";
import MultiSelectSnippet from "@/components/wabtech/multiselect/MultiSelectSnippet";
import CheckboxSnippet from "@/components/wabtech/multiselect/CheckboxSnippet";
import IconsSnippet from "@/components/wabtech/multiselect/IconsSnippet";
import ImagesSnippet from "@/components/wabtech/multiselect/ImagesSnippet";
import FormikSnippet from "@/components/wabtech/multiselect/FormikSnippet";
import RightSidebar from "@/components/common/RightSidebar";

const MultiSelect = () => {
  const sections = [
    { id: "introduction", title: "Introduction" },
    { id: "default", title: "Default MultiSelect" },
    { id: "checkbox", title: "With Checkboxes" },
    { id: "icons", title: "With Icons" },
    { id: "images", title: "With Images" },
    { id: "formik", title: "With Formik & Yup" },
    { id: "props", title: "Props" },
    { id: "css_customization", title: "Customization" },
  ];
  const installDeps = `npm install framer-motion`;
  return (
    <div className="grid grid-cols-1 md:grid-cols-auto-200">
      <div>
        <section id="introduction">
          <h1 className="text-3xl font-semibold mb-4">MultiSelect</h1>
          <div className="my-4">
            <p>
              The MultiSelect component allows users to select multiple options
              from a list. It provides various customization options such as
              checkboxes, icons, and images for each option.
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
                  The <span className="code">MultiSelect.tsx</span> has the main
                  code for the component, the rest of the code in{" "}
                  <span className="code">App.tsx</span> shows you how to use the
                  component.
                </p>
              </Alert>
              <h1 className="text-xl mt-3">Default MultiSelect</h1>
              <p className="mt-2">
                You can use the MultiSelect component to create a basic multiple
                selection dropdown. You can also close the multiSelect using the{" "}
                <span className="code">escape</span> key
              </p>
            </div>
          </div>
          <div className="mt-8">
            <MultiSelectSnippet />
          </div>
        </section>

        <section id="checkbox">
          <div className="mt-10">
            <h1 className="text-xl mt-3">MultiSelect with Checkboxes</h1>
            <p className="mt-2">
              You can use the MultiSelect component with checkboxes for each
              option by passing the <span className="code">`checkbox`</span>{" "}
              prop.
            </p>
            <div className="mt-8">
              <CheckboxSnippet />
            </div>
          </div>
        </section>

        <section id="icons">
          <div className="mt-10">
            <h1 className="text-xl mt-3">MultiSelect with Icons</h1>
            <p className="mt-2">
              You can use the MultiSelect component with icons for each option.
            </p>
            <div className="mt-8">
              <IconsSnippet />
            </div>
          </div>
        </section>

        <section id="images">
          <div className="mt-10">
            <h1 className="text-xl mt-3">MultiSelect with Images</h1>
            <p className="mt-2">
              You can use the MultiSelect component with images for each option.
            </p>
            <div className="mt-8">
              <ImagesSnippet />
            </div>
          </div>
        </section>

        <section id="formik">
          <div className="mt-10">
            <h1 className="text-xl mt-3">
              MultiSelect with Formik & Yup Integration
            </h1>
            <p className="mt-2">
              The MultiSelect component can be integrated with{" "}
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
                    <td className="font-semibold">`checkbox`</td>
                    <td>boolean (optional)</td>
                    <td>true</td>
                    <td>
                      Determines whether checkboxes are shown for each option.
                    </td>
                  </tr>
                  <tr>
                    <td className="font-semibold">`options`</td>
                    <td>Option[]</td>
                    <td>See example</td>
                    <td>
                      An array of option objects with value, label, and optional
                      icon.
                    </td>
                  </tr>
                  <tr>
                    <td className="font-semibold">`onSelect`</td>
                    <td>function</td>
                    <td>handleSelect</td>
                    <td>
                      The function called when options are selected or
                      deselected.
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
              You can further customize the appearance of the MultiSelect
              component using CSS classes. These classes can be used to adjust
              the styles and positions of the dropdown.
            </p>
          </div>
        </section>
        <section id="notes" className="pb-10">
          <div className="mt-10">
            <h1 className="text-2xl mt-3 font-semibold">Notes</h1>
            <div className="mt-4">
              <ul className="list-disc ml-6">
                <li>
                  The MultiSelect component allows users to select multiple
                  options from a list.
                </li>
                <li>
                  You can customize the appearance of options using checkboxes,
                  icons, or images.
                </li>
                <li>
                  The <span className="code">`onSelect`</span> callback is
                  triggered when options are selected or deselected.
                </li>
                <li>
                  The <span className="code">`checkbox`</span> prop determines
                  whether checkboxes are shown for each option.
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

export default MultiSelect;
