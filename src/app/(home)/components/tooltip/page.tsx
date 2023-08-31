/* eslint-disable react/no-unescaped-entities */

import BottomLinks from "@/components/common/BottomLinks";
import RightSidebar from "@/components/common/RightSidebar";
import Alert from "@/components/wabtech/alert/Alert";
import PositionsSnippet from "@/components/wabtech/tooltip/PositionsSnippet";
import TooltipSnippet from "@/components/wabtech/tooltip/TooltipSnippet";

const Tooltip = () => {
  const sections = [
    { id: "introduction", title: "Introduction" },
    { id: "default", title: "Default" },
    { id: "positions", title: "Positions" },
    { id: "props", title: "Props" },
    { id: "css_customization", title: "Customization" },
  ];
  return (
    <div className="grid grid-cols-1 md:grid-cols-auto-200">
      <div>
        <section id="introduction">
          <h1 className="text-3xl font-semibold mb-4">Tooltip</h1>
          <div className="my-4">
            <p>
              The Tooltip component allows you to add tooltips to your UI
              elements that appear when the user hovers over them.
            </p>
          </div>
        </section>
        <section id="default">
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
                  The <span className="code">Tooltip.tsx</span> has the main
                  code for the component, the rest of the code in{" "}
                  <span className="code">App.tsx</span> shows you how to use the
                  component.
                </p>
              </Alert>
              <h1 className="text-xl mt-3">Default Tooltip</h1>
              <p className="mt-2">The default Tooltip has a top position</p>
            </div>
          </div>
          <div className="mt-8">
            <TooltipSnippet />
          </div>
        </section>

        <section id="positions">
          <div className="mt-10">
            <h1 className="text-xl mt-3">Different positions</h1>
            You can change the position of the Tooltip component by using the{" "}
            <span className="code">`position`</span> prop.Possible values are
            <span className="code">`top`</span>,{" "}
            <span className="code">`bottom`</span>,{" "}
            <span className="code">`left`</span>,{" "}
            <span className="code">`right`</span>.
            <div className="mt-8">
              <PositionsSnippet />
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
                    <td className="font-semibold">`children`</td>
                    <td>ReactNode</td>
                    <td>The element to which the tooltip is attached.</td>
                  </tr>
                  <tr>
                    <td className="font-semibold">`position`</td>
                    <td>
                      <span className="code">`left`</span> |{" "}
                      <span className="code">`right`</span> |{" "}
                      <span className="code">`top`</span> |{" "}
                      <span className="code">`bottom`</span> (optional)
                    </td>
                    <td>"bottom"</td>
                  </tr>
                  <tr>
                    <td className="font-semibold">`text`</td>
                    <td>string</td>
                    <td>The content of the tooltip.</td>
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
              You can further customise the component by adding your own CSS
              classes to the component.
            </p>
          </div>
        </section>
        <section id="notes" className="pb-10">
          <div className="mt-10">
            <h1 className="text-2xl mt-3 font-semibold">Notes</h1>
            <div className="mt-4">
              <ul className="list-disc ml-6">
                <li>
                  The Tooltip component displays a tooltip when the user hovers
                  over the element.
                </li>
                <li>
                  You can customize the position of the tooltip using the
                  <span className="code">`position`</span> prop.
                </li>
              </ul>
            </div>
          </div>
        </section>
        <div className="mt-6 mb-10">
          <BottomLinks prevUrl="toggle" nextUrl="trello-cards" />
        </div>
      </div>
      <RightSidebar sections={sections} />
    </div>
  );
};

export default Tooltip;
