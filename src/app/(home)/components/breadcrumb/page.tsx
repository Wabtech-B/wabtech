/* eslint-disable react/no-unescaped-entities */
import CopyIcon from "@/components/common/CopyIcon";
import Alert from "@/components/wabtech/alert/Alert";
import BreadcrumbSnippet from "@/components/wabtech/breadcrumb/BreadcrumbSnippet";
import CustomSeparatorSnippet from "@/components/wabtech/breadcrumb/CustomSeparatorSnippet";
import WithIconsSnippet from "@/components/wabtech/breadcrumb/WithIconsSnippet";
import CodeSnippet from "../installation/CodeSnippet";
import WithReactRouterDomSnippet from "@/components/wabtech/breadcrumb/WithReactRouterDomSnippet";
import RightSidebar from "@/components/common/RightSidebar";

const Breadcrumb = () => {
  const arrowIcon = `<FiChevronRight />`;
  const installDeps = `npm install react-router-dom`;
  const sections = [
    { id: "introduction", title: "Introduction" },
    { id: "default_breadcrumb", title: "Default" },
    { id: "with_icons", title: "With Icons" },
    { id: "custom_separator", title: "Custom Separator" },
    { id: "with_rrd", title: "React Router Dom" },
    { id: "props", title: "Props" },
    { id: "css_customization", title: "Customization" },
  ];
  return (
    <div className="grid grid-cols-1 md:grid-cols-auto-200">
      <div>
        <section id="introduction">
          <h1 className="text-3xl font-semibold mb-4">Breadcrumb</h1>
          <div className="my-4">
            <p>
              The Breadcrumb component displays a navigation trail with
              customizable items and separators.
            </p>
          </div>
        </section>
        <section id="default_breadcrumb">
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
                  The <span className="code">Breadcrumb.tsx</span> has the main
                  code for the component, the rest of the code in{" "}
                  <span className="code">App.tsx</span> shows you how to use the
                  component.
                </p>
              </Alert>
              <h1 className="text-xl mt-3">Default Breadcrumb</h1>
              <p className="mt-2">
                The default Breadcrumb component displays a simple navigation
                trail.
              </p>
            </div>
          </div>
          <div className="mt-8">
            <BreadcrumbSnippet />
          </div>
        </section>

        <section id="with_icons">
          <div className="mt-10">
            <h1 className="text-xl mt-3">Breadcrumb with Icons</h1>
            <p className="mt-2">
              You can include icons within the Breadcrumb items using the
              <span className="code">`icon`</span> prop.
            </p>
            <div className="mt-8">
              <WithIconsSnippet />
            </div>
          </div>
        </section>

        <section id="custom_separator">
          <div className="mt-10">
            <h1 className="text-xl mt-3">Breadcrumb with Custom Separator</h1>
            <p className="mt-2">
              You can customize the separator between Breadcrumb items by
              providing a custom separator element or string.
            </p>
            <div className="mt-8">
              <CustomSeparatorSnippet />
            </div>
          </div>
        </section>

        <section id="with_rrd">
          <div className="mt-10">
            <h1 className="text-xl mt-3">Breadcrumb with React Router DOM</h1>
            <p className="mt-2">
              This is an independent component from the Breadcrumb above which
              uses{" "}
              <a
                href="https://reactrouter.com/en/main"
                className="text-primary underline"
                target="_blank"
              >
                react router dom
              </a>
              . When using this component, you don't need any of the above code.
              Just copy the code in{" "}
              <span className="code">RouterBreadcrumb.tsx</span> and{" "}
              <span className="code">App.tsx</span> only. Make sure to install
              react router dom.
            </p>
            <div className="bg-zinc-950 border border-zinc-700 p-2 rounded-lg my-4 relative">
              <CodeSnippet snippet={installDeps} />

              <div className="absolute top-5 right-4">
                <CopyIcon text={installDeps} />
              </div>
            </div>
            <div className="mt-8">
              <WithReactRouterDomSnippet />
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
                    <td className="font-semibold">`items`</td>
                    <td>BreadcrumbItem[]</td>
                    <td> See example above</td>
                    <td>An array of breadcrumb items.</td>
                  </tr>
                  <tr>
                    <td className="font-semibold">`separator`</td>
                    <td>string or React.ReactNode (optional)</td>
                    <td>See example</td>
                    <td>
                      The separator between breadcrumb items. Default is{" "}
                      <span className="font-bold">{arrowIcon}</span>.
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
              The Breadcrumb component's appearance can be further customized
              using Tailwind CSS classes. You can adjust the spacing, alignment,
              and other properties.
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
                  your project, including React and React Router DOM.
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

export default Breadcrumb;
