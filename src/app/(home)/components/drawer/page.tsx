/* eslint-disable react/no-unescaped-entities */

import CopyIcon from "@/components/common/CopyIcon";
import CodeSnippet from "../installation/CodeSnippet";
import Alert from "@/components/wabtech/alert/Alert";
import DrawerSnippet from "@/components/wabtech/drawer/DrawerSnippet";
import CustomStateSnippet from "@/components/wabtech/drawer/CustomStateSnippet";
import PositionSnippet from "@/components/wabtech/drawer/PositionSnippet";
import SizesSnippet from "@/components/wabtech/drawer/SizesSnippet";
import RightSidebar from "@/components/common/RightSidebar";
import BottomLinks from "@/components/common/BottomLinks";

const Drawer = () => {
  const sections = [
    { id: "introduction", title: "Introduction" },
    { id: "default", title: "Default Drawer" },
    { id: "custom_state", title: "Managing your own state" },
    { id: "positions", title: "Positions" },
    { id: "sizes", title: "Sizes" },
    { id: "props", title: "Props" },
    { id: "css_customization", title: "Customization" },
  ];
  const installDeps = `npm install framer-motion`;
  return (
    <div className="grid grid-cols-1 md:grid-cols-auto-200">
      <div>
        <section id="introduction">
          <h1 className="text-3xl font-semibold mb-4">Drawer</h1>
          <div className="my-4">
            <p>
              The Drawer component is used to create slide-in panels or drawers
              that can contain additional content, options, or navigation.
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
                  The <span className="code">Drawer.tsx</span> has the main code
                  for the component, the rest of the code in{" "}
                  <span className="code">App.tsx</span> shows you how to use the
                  component.
                </p>
              </Alert>
              <h1 className="text-xl mt-3">
                Default Drawer with Custom Trigger
              </h1>
              <p className="mt-2">
                The Drawer component can be used to create a default drawer that
                opens from the left side of the screen and uses a custom trigger{" "}
                <span className="code"> `openTrigger`</span> passed as a prop to
                open the drawer. You can also close the drawer using the{" "}
                <span className="code">escape</span> key
              </p>
            </div>
          </div>
          <div className="mt-8">
            <DrawerSnippet />
          </div>
        </section>

        <section id="custom_state">
          <div className="mt-10">
            <h1 className="text-xl mt-3">Managing Your Own State</h1>
            <p className="mt-2">
              You can also manage your own state for the drawer by using{" "}
              <span className="code">``useState</span> hook and passing{" "}
              <span className="code">`isOpen`</span> and{" "}
              <span className="code">`onClose`</span> props to the Drawer
            </p>
            <div className="mt-8">
              <CustomStateSnippet />
            </div>
          </div>
        </section>

        <section id="positions">
          <div className="mt-10">
            <h1 className="text-xl mt-3">Drawer with Different Positions</h1>
            <p className="mt-2">
              You can configure the drawer's{" "}
              <span className="code">`position`</span> using the
              <span className="code">`position`</span> prop. The available
              positions are <span className="code">`left`</span>,{" "}
              <span className="code">`right` </span>,{" "}
              <span className="code">`top`</span> and{" "}
              <span className="code">`bottom`</span>
            </p>
            <div className="mt-8">
              <PositionSnippet />
            </div>
          </div>
        </section>

        <section id="sizes">
          <div className="mt-10">
            <h1 className="text-xl mt-3">Drawer with Different Sizes</h1>
            <p className="mt-2">
              You can also configure the drawer's{" "}
              <span className="code">`size`</span> using the
              <span className="code">`size`</span> prop.The available sizes are{" "}
              <span className="code">`small`</span>,{" "}
              <span className="code">`medium` </span> and{" "}
              <span className="code">`large`</span>. The default is
              <span className="code">`medium`</span>
            </p>
            <div className="mt-8">
              <SizesSnippet />
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
                    <td>true or false</td>
                    <td>Whether the drawer is open.</td>
                  </tr>
                  <tr>
                    <td className="font-semibold">`onClose`</td>
                    <td>function (optional)</td>
                    <td>() =&gt; {}</td>
                    <td>Function to close the drawer.</td>
                  </tr>
                  <tr>
                    <td className="font-semibold">`position`</td>
                    <td>
                      <span className="code">`left`</span> |{" "}
                      <span className="code">`right` </span>|{" "}
                      <span className="code">`top`</span> |{" "}
                      <span className="code">`bottom`</span> (optional)
                    </td>
                    <td>"left"</td>
                    <td>The position from which the drawer should slide in.</td>
                  </tr>
                  <tr>
                    <td className="font-semibold">`size`</td>
                    <td>
                      <span className="code">`small`</span> |{" "}
                      <span className="code">`medium`</span> |{" "}
                      <span className="code">`large`</span>
                      (optional)
                    </td>
                    <td>"medium"</td>
                    <td>The size of the drawer.</td>
                  </tr>
                  <tr>
                    <td className="font-semibold">`openTrigger`</td>
                    <td>JSX.Element (optional)</td>
                    <td>&lt;button&gt;Open Drawer&lt;/button&gt;</td>
                    <td>A custom trigger that opens the drawer.</td>
                  </tr>
                  <tr>
                    <td className="font-semibold">`children`</td>
                    <td>React.ReactNode</td>
                    <td>&lt;p&gt;Drawer content&lt;/p&gt;</td>
                    <td>The content to be displayed inside the drawer.</td>
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
              The Drawer component's appearance can be further customized using
              Tailwind CSS classes. You can adjust the position, size, colors,
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
                  your project, including Framer Motion if not already
                  installed.
                </li>
                <li>
                  The drawer uses Framer Motion for animations and motion
                  effects.
                </li>
              </ul>
            </div>
          </div>
        </section>
        <div className="mt-6 mb-10">
          <BottomLinks prevUrl="draggable-list" nextUrl="dropdown" />
        </div>
      </div>
      <RightSidebar sections={sections} />
    </div>
  );
};

export default Drawer;
