import CopyIcon from "@/components/common/CopyIcon";
import CodeSnippet from "../installation/CodeSnippet";
import Alert from "@/components/wabtech/alert/Alert";
import ToastSnippet from "@/components/wabtech/toast/ToastSnippet";
import VariantsSnippet from "@/components/wabtech/toast/VariantsSnippet";
import RightSidebar from "@/components/common/RightSidebar";
import BottomLinks from "@/components/common/BottomLinks";

const Toast = () => {
  const sections = [
    { id: "introduction", title: "Introduction" },
    { id: "basic_toast", title: "Basic Toast" },
    { id: "variants", title: "Variants" },
    { id: "props", title: "Props" },
    { id: "css_customization", title: "Customization" },
  ];
  const installDeps = `npm install framer-motion`;
  return (
    <div className="grid grid-cols-1 md:grid-cols-auto-200">
      <div>
        <section id="introduction">
          <h1 className="text-3xl font-semibold mb-4">Toast</h1>
          <div className="my-4">
            <p>
              The Toast component displays short-lived notifications to provide
              users with important information or feedback.
            </p>
          </div>
        </section>
        <section id="basic_toast">
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
                  The <span className="code">Toast.tsx</span> has the main code
                  for the component, the rest of the code in{" "}
                  <span className="code">App.tsx</span> shows you how to use the
                  component.
                </p>
              </Alert>
              <h1 className="text-xl mt-3">Basic Toast</h1>
              <p className="mt-2">This is an example of a success toast</p>
            </div>
          </div>
          <div className="mt-8">
            <ToastSnippet />
          </div>
        </section>

        <section id="variants">
          <div className="mt-10">
            <h1 className="text-xl mt-3">Variants</h1>
            <p className="mt-2">
              You can use the Toast component to display notifications with
              different variants. i.e <span className="code">`success`</span>,{" "}
              <span className="code">`danger`</span>,{" "}
              <span className="code">`info`</span>,{" "}
              <span className="code">`warning`</span>
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
                    <th>Prop</th>
                    <th>Type</th>
                    <th>Description</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="font-semibold">`message`</td>
                    <td>string</td>
                    <td>The message to display in the toast.</td>
                  </tr>
                  <tr>
                    <td className="font-semibold">`variant`</td>
                    <td>
                      <span className="code">`success`</span> |{" "}
                      <span className="code">`danger`</span> |{" "}
                      <span className="code">`info`</span> |{" "}
                      <span className="code">`warning`</span>
                    </td>
                    <td>The variant of the toast.</td>
                  </tr>
                  <tr>
                    <td className="font-semibold">`trigger`</td>
                    <td>JSX.Element (optional)</td>
                    <td>The element triggering the toast visibility.</td>
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
              You can further customize the appearance of the Toast component
              using CSS classes.
            </p>
          </div>
        </section>
        <section id="notes" className="pb-10">
          <div className="mt-10">
            <h1 className="text-2xl mt-3 font-semibold">Notes</h1>
            <div className="mt-4">
              <ul className="list-disc ml-6">
                <li>
                  The Toast component displays short-lived notifications with
                  different variants: <span className="code">`success`</span>,
                  <span className="code">`danger`</span>,{" "}
                  <span className="code">`info`</span>, and{" "}
                  <span className="code">`warning`</span>.
                </li>
              </ul>
            </div>
          </div>
        </section>
        <div className="mt-6 mb-10">
          <BottomLinks prevUrl="tabs" nextUrl="toggle" />
        </div>
      </div>
      <RightSidebar sections={sections} />
    </div>
  );
};

export default Toast;
