import BottomLinks from "@/components/common/BottomLinks";
import RightSidebar from "@/components/common/RightSidebar";
import Alert from "@/components/wabtech/alert/Alert";
import ExampleThreeSnippet from "@/components/wabtech/toggle/ExampleThreeSnippet";
import ExampleTwoSnippet from "@/components/wabtech/toggle/ExampleTwoSnippet";
import ToggleSnippet from "@/components/wabtech/toggle/ToggleSnippet";

const Toggle = () => {
  const sections = [
    { id: "introduction", title: "Introduction" },
    { id: "example", title: "Example" },
    { id: "example_two", title: "Example Two" },
    { id: "example_three", title: "Example Three" },
    { id: "props", title: "Props" },
    { id: "css_customization", title: "Customization" },
  ];
  return (
    <div className="grid grid-cols-1 md:grid-cols-auto-200">
      <div>
        <section id="introduction">
          <h1 className="text-3xl font-semibold mb-4">Toggle</h1>
          <div className="my-4">
            <p>
              The Toggle component helps manage a list of items with an active
              state, allowing you to easily toggle the active state of items.
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
                  The <span className="code">Toggle.tsx</span> has the main code
                  for the component, the rest of the code in{" "}
                  <span className="code">App.tsx</span> shows you how to use the
                  component.
                </p>
              </Alert>
              <h1 className="text-xl mt-3">Example One</h1>
              <p className="mt-2">This is an example of a toggle component</p>
            </div>
          </div>
          <div className="mt-8">
            <ToggleSnippet />
          </div>
        </section>

        <section id="example_two">
          <div className="mt-10">
            <h1 className="text-xl mt-3">Example Two</h1>
            <p className="mt-2">This is a second example</p>
            <div className="mt-8">
              <ExampleTwoSnippet />
            </div>
          </div>
        </section>

        <section id="example_three">
          <div className="mt-10">
            <h1 className="text-xl mt-3">Example Three with two items</h1>
            <p className="mt-2">This is another example with two items</p>
            <div className="mt-8">
              <ExampleThreeSnippet />
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
                    <th>Default</th>
                    <th>Description</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="font-semibold">`list`</td>
                    <td>T[]</td>
                    <td></td>
                    <td>The list of items to manage.</td>
                  </tr>
                  <tr>
                    <td className="font-semibold">`initialValue`</td>
                    <td>T | null</td>
                    <td>null</td>
                    <td>The initially active item.</td>
                  </tr>
                  <tr>
                    <td className="font-semibold">`children`</td>
                    <td>
                      (items, toggleActive, selectedItem) =&gt; JSX.Element
                    </td>
                    <td></td>
                    <td>Function to render content with toggling behavior.</td>
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
              You can create customised versions of the Toggle component by
              using Tailwind CSS classes.
            </p>
          </div>
        </section>
        <section id="notes" className="pb-10">
          <div className="mt-10">
            <h1 className="text-2xl mt-3 font-semibold">Notes</h1>
            <div className="mt-4">
              <ul className="list-disc ml-6">
                <li>
                  The Toggle component manages a list of items with an active
                  state.
                </li>
                <li>
                  It provides a way to toggle the active state of items and
                  provides information about the currently selected item
                </li>
              </ul>
            </div>
          </div>
        </section>
        <div className="mt-6 mb-10">
          <BottomLinks prevUrl="toast" nextUrl="tooltip" />
        </div>
      </div>
      <RightSidebar sections={sections} />
    </div>
  );
};

export default Toggle;
