/* eslint-disable react/no-unescaped-entities */

import RightSidebar from "@/components/common/RightSidebar";
import Alert from "@/components/wabtech/alert/Alert";
import BadgeSnippet from "@/components/wabtech/badge/BadgeSnippet";
import CustomBadgeSnippet from "@/components/wabtech/badge/CustomBadgeSnippet";
import VariantsSnippet from "@/components/wabtech/badge/VariantsSnippet";
import WithAvatarSnippet from "@/components/wabtech/badge/WithAvatarSnippet";

const Badge = () => {
  const sections = [
    { id: "introduction", title: "Introduction" },
    { id: "default_badge", title: "Default" },
    { id: "variants", title: "Variants" },
    { id: "with_avatar", title: "With Avatar" },
    { id: "custom", title: "Custom" },
    { id: "props", title: "Props" },
    { id: "css_customization", title: "Customization" },
  ];
  return (
    <div className="grid grid-cols-1 md:grid-cols-auto-200">
      <div>
        <section id="introduction">
          <h1 className="text-3xl font-semibold mb-4">Badge</h1>
          <div className="my-4">
            <p>
              The Badge component displays a label with customizable styles and
              options.
            </p>
          </div>
        </section>
        <section id="default_badge">
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
                  The <span className="code">Badge.tsx</span> has the main code
                  for the component, the rest of the code in{" "}
                  <span className="code">App.tsx</span> shows you how to use the
                  component.
                </p>
              </Alert>
              <h1 className="text-xl mt-3">Default Badge</h1>
              <p className="mt-2">
                The default Badge component displays a label with neutral
                styling.
              </p>
            </div>
          </div>
          <div className="mt-8">
            <BadgeSnippet />
          </div>
        </section>

        <section id="variants">
          <div className="mt-10">
            <h1 className="text-xl mt-3">Badge Variants</h1>
            <p className="mt-2">
              You can use different variants to convey different meanings using
              the <span className="code">`variants`</span> prop. Available
              variants are <span className="code">`default`</span>,{" "}
              <span className="code">`primary`</span>,{" "}
              <span className="code">`success`</span>,{" "}
              <span className="code">`warning`</span>, and{" "}
              <span className="code">`danger`</span>.
            </p>
            <div className="mt-8">
              <VariantsSnippet />
            </div>
          </div>
        </section>

        <section id="with_avatar">
          <div className="mt-10">
            <h1 className="text-xl mt-3">Badge with Avatar</h1>
            <p className="mt-2">
              You can include an avatar within the Badge using the{" "}
              <span className="code">`avatar `</span> prop.
            </p>
            <div className="mt-8">
              <WithAvatarSnippet />
            </div>
          </div>
        </section>

        <section id="custom">
          <div className="mt-10">
            <h1 className="text-xl mt-3">Custom Badge</h1>
            <p className="mt-2">
              You can customize the Badge further by providing a custom class
              name.
            </p>
            <div className="mt-8">
              <CustomBadgeSnippet />
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
                    <td className="font-semibold">`label`</td>
                    <td>string </td>
                    <td>Badge Text</td>
                    <td>The label text for the badge.</td>
                  </tr>
                  <tr>
                    <td className="font-semibold">`variant`</td>
                    <td>
                      <span className="code">`default`</span> |{" "}
                      <span className="code">`primary`</span> |{" "}
                      <span className="code">`success`</span> |{" "}
                      <span className="code">`warning`</span> |{" "}
                      <span className="code">`danger`</span>. (optional)
                    </td>
                    <td>default (optional)</td>
                    <td>
                      The variant style of the badge. Options are{" "}
                      <span className="code">`default`</span>,{" "}
                      <span className="code">`primary`</span>,{" "}
                      <span className="code">`success`</span>,{" "}
                      <span className="code">`warning`</span>, and{" "}
                      <span className="code">`danger`</span>. Default is{" "}
                      <span className="code">`default`</span>.
                    </td>
                  </tr>
                  <tr>
                    <td className="font-semibold">`avatar`</td>
                    <td>JSX.Element (optional)</td>
                    <td>See example</td>
                    <td>Avatar to display within the badge.</td>
                  </tr>
                  <tr>
                    <td className="font-semibold">`className`</td>
                    <td>string (optional)</td>
                    <td>bg-purple-500</td>
                    <td>Custom CSS class for the badge container.</td>
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
              The Badge component's appearance can be further customized using
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
                  The Badge component's appearance can be further customized
                  using Tailwind CSS classes. You can adjust the background
                  color, text color, and other properties.
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

export default Badge;
