/* eslint-disable react/no-unescaped-entities */

import BottomLinks from "@/components/common/BottomLinks";
import RightSidebar from "@/components/common/RightSidebar";
import Alert from "@/components/wabtech/alert/Alert";
import BlockSnippet from "@/components/wabtech/button/BlockSnippet";
import ButtonSnippet from "@/components/wabtech/button/ButtonSnippet";
import CustomButtonSnippet from "@/components/wabtech/button/CustomButtonSnippet";
import DisableSnippet from "@/components/wabtech/button/DisableSnippet";
import LoadingSnippet from "@/components/wabtech/button/LoadingSnippet";
import OnClickSnippet from "@/components/wabtech/button/OnClickSnippet";
import SizesSnippet from "@/components/wabtech/button/SizesSnippet";
import VariantsSnippet from "@/components/wabtech/button/VariantsSnippet";
import WithIconSnippet from "@/components/wabtech/button/WithIconSnippet";

const Button = () => {
  const sections = [
    { id: "introduction", title: "Introduction" },
    { id: "default_avatar_group", title: "Default" },
    { id: "variants", title: "Variants" },
    { id: "sizes", title: "Sizes" },
    { id: "icon", title: "With Icon" },
    { id: "loading", title: "Loading" },
    { id: "block", title: "Block" },
    { id: "disabled", title: "Disabled" },
    { id: "onclick", title: "With Onclick Listener" },
    { id: "custom", title: "Custom" },
    { id: "props", title: "Props" },
    { id: "css_customization", title: "Customization" },
  ];
  return (
    <div className="grid grid-cols-1 md:grid-cols-auto-200">
      <div>
        <section id="introduction">
          <h1 className="text-3xl font-semibold mb-4">Button</h1>
          <div className="my-4">
            <p>
              The Button component allows you to create customizable buttons
              with various styles and functionalities.
            </p>
          </div>
        </section>
        <section id="default_avatar_group">
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
                  The <span className="code">Button.tsx</span> has the main code
                  for the component, the rest of the code in{" "}
                  <span className="code">App.tsx</span> shows you how to use the
                  component.
                </p>
              </Alert>
              <h1 className="text-xl mt-3">Default Button</h1>
              <p className="mt-2">
                The default Button component displays a button with a primary
                color.{" "}
              </p>
            </div>
          </div>
          <div className="mt-8">
            <ButtonSnippet />
          </div>
        </section>

        <section id="variants">
          <div className="mt-10">
            <h1 className="text-xl mt-3">Button Variants</h1>
            <p className="mt-2">
              You can choose from different button variants:{" "}
              <span className="code">`default`</span>,{" "}
              <span className="code">`outlined`</span>, and{" "}
              <span className="code">`gradient`</span>.
            </p>
            <div className="mt-8">
              <VariantsSnippet />
            </div>
          </div>
        </section>

        <section id="sizes">
          <div className="mt-10">
            <h1 className="text-xl mt-3">Button Sizes</h1>
            <p className="mt-2">
              You can set the size of the Button using the size prop. Available
              sizes are <span className="code">`small`</span>,{" "}
              <span className="code">`medium`</span>, and{" "}
              <span className="code">`large`</span>.
            </p>
            <div className="mt-8">
              <SizesSnippet />
            </div>
          </div>
        </section>

        <section id="icon">
          <div className="mt-10">
            <h1 className="text-xl mt-3">Button with Icon</h1>
            <p className="mt-2">
              You can include an icon within the Button using the{" "}
              <span className="code">`icon`</span> prop.
            </p>
            <div className="mt-8">
              <WithIconSnippet />
            </div>
          </div>
        </section>

        <section id="loading">
          <div className="mt-10">
            <h1 className="text-xl mt-3">Loading Button</h1>
            <p className="mt-2">
              You can set the <span className="code">`loading`</span> prop to
              display a loading animation within the Button.
            </p>
            <div className="mt-8">
              <LoadingSnippet />
            </div>
          </div>
        </section>

        <section id="block">
          <div className="mt-10">
            <h1 className="text-xl mt-3">Block Button</h1>
            <p className="mt-2">
              You can make the Button span the full width of its container by
              setting the <span className="code">`block`</span> prop.
            </p>
            <div className="mt-8">
              <BlockSnippet />
            </div>
          </div>
        </section>

        <section id="disabled">
          <div className="mt-10">
            <h1 className="text-xl mt-3">Disabled Button</h1>
            <p className="mt-2">
              You can disable the Button using the{" "}
              <span className="code">`disabled`</span> prop.
            </p>
            <div className="mt-8">
              <DisableSnippet />
            </div>
          </div>
        </section>

        <section id="onclick">
          <div className="mt-10">
            <h1 className="text-xl mt-3">Button with Click Listener</h1>
            <p className="mt-2">
              You can provide an <span className="code">`onClick`</span>{" "}
              function to handle button clicks.
            </p>
            <div className="mt-8">
              <OnClickSnippet />
            </div>
          </div>
        </section>

        <section id="custom">
          <div className="mt-10">
            <h1 className="text-xl mt-3">Custom Button</h1>
            <p className="mt-2">
              You can customize the Button further by providing a custom class
              name and content.
            </p>
            <div className="mt-8">
              <CustomButtonSnippet />
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
                    <td className="font-semibold">`children`</td>
                    <td>JSX.Element or string (optional)</td>
                    <td>'Click Me'</td>
                    <td>Content of the button.</td>
                  </tr>
                  <tr>
                    <td className="font-semibold">`icon`</td>
                    <td>JSX.Element (optional)</td>
                    <td>&lt;FiSearch /&gt;</td>
                    <td>Icon to display within the button.</td>
                  </tr>
                  <tr>
                    <td className="font-semibold">`variant`</td>
                    <td>
                      <span className="code">`default`</span>,{" "}
                      <span className="code">`outlined`</span>,{" "}
                      <span className="code">`gradient`</span>
                      (optional)
                    </td>
                    <td>'default'</td>
                    <td>
                      Variant style of the button. Options are{" "}
                      <span className="code">`default`</span>,{" "}
                      <span className="code">`outlined`</span>, and{" "}
                      <span className="code">`gradient`</span>. Default is
                      <span className="code">`default`</span> .
                    </td>
                  </tr>
                  <tr>
                    <td className="font-semibold">`size`</td>
                    <td>
                      <span className="code">`small`</span>,{" "}
                      <span className="code">`medium`</span>,{" "}
                      <span className="code">`large`</span> (optional)
                    </td>
                    <td>medium</td>
                    <td>
                      Size of the button. Options are{" "}
                      <span className="code">`small`</span>,{" "}
                      <span className="code">`medium`</span>, and{" "}
                      <span className="code">`large`</span>. Default is{" "}
                      <span className="code">`medium`</span>.
                    </td>
                  </tr>
                  <tr>
                    <td className="font-semibold">`onClick`</td>
                    <td>function (optional)</td>
                    <td>() =&gt; console.log('Clicked')</td>
                    <td>Click event handler function.</td>
                  </tr>
                  <tr>
                    <td className="font-semibold">`className`</td>
                    <td>string (optional)</td>
                    <td>'bg-red-500'</td>
                    <td>Custom CSS class for the button.</td>
                  </tr>
                  <tr>
                    <td className="font-semibold">`disabled`</td>
                    <td>boolean (optional)</td>
                    <td>true or false</td>
                    <td>Disables the button.</td>
                  </tr>
                  <tr>
                    <td className="font-semibold">`loading`</td>
                    <td>boolean (optional)</td>
                    <td>true or false</td>
                    <td>Displays a loading animation within the button.</td>
                  </tr>
                  <tr>
                    <td className="font-semibold">`block`</td>
                    <td>boolean (optional)</td>
                    <td>true or false</td>
                    <td>
                      Makes the button span the full width of its container.
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
              The Button component's appearance can be further customized using
              Tailwind CSS classes. You can adjust the background color, text
              color, and other properties.
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
          <BottomLinks prevUrl="breadcrumb" nextUrl="card" />
        </div>
      </div>
      <RightSidebar sections={sections} />
    </div>
  );
};

export default Button;
