import CopyIcon from "@/components/common/CopyIcon";
import CodeSnippet from "../installation/CodeSnippet";
import Alert from "@/components/wabtech/alert/Alert";
import DraggableListSnippet from "@/components/wabtech/draggable-list/DraggableListSnippet";
import RightSidebar from "@/components/common/RightSidebar";
import BottomLinks from "@/components/common/BottomLinks";

const DraggableList = () => {
  const sections = [
    { id: "introduction", title: "Introduction" },
    { id: "example", title: "Example" },
    { id: "props", title: "Props" },
    { id: "css_customization", title: "Customization" },
  ];
  const installDeps = `npm install react-beautiful-dnd`;
  return (
    <div className="grid grid-cols-1 md:grid-cols-auto-200">
      <div>
        <section id="introduction">
          <h1 className="text-3xl font-semibold mb-4">DraggableList </h1>
          <div className="my-4">
            <p>
              The DraggableList component allows you to create a list of items
              that can be reordered using drag-and-drop functionality from the{" "}
              <a
                href="https://www.npmjs.com/package/react-beautiful-dnd"
                className="text-primary hover:underline"
                target="_blank"
              >
                react-beautiful-dnd
              </a>{" "}
              library.
            </p>
          </div>
        </section>
        <section id="example">
          <div className="mt-8">
            <h1 className="text-2xl font-semibold">Installation</h1>
            <p className="mt-2">
              To use the DraggableList component, you need to install the{" "}
              <a
                href="https://www.npmjs.com/package/react-beautiful-dnd"
                className="text-primary hover:underline"
                target="_blank"
              >
                react-beautiful-dnd
              </a>{" "}
              library:
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
                  The <span className="code">DraggableList.tsx</span> &{" "}
                  <span className="code">ListItem.tsx</span> have the main code
                  for the component, the rest of the code in{" "}
                  <span className="code">App.tsx</span> shows you how to use the
                  component.
                </p>
              </Alert>

              <p className="mt-2">
                Below is an example which can be customised to fit your
                application
              </p>
            </div>
          </div>
          <div className="mt-8">
            <DraggableListSnippet />
          </div>
        </section>

        <section id="props" className="pb-10">
          <div className="mt-10">
            <h1 className="text-2xl mt-3 font-semibold">Props</h1>
            <h1 className="text-xl mt-3">DraggableList</h1>
            <div className="mt-4 overflow-auto table-wrapper border dark:border-zinc-600 rounded-lg">
              <table className="w-full rounded-lg overflow-hidden">
                <thead>
                  <tr className="bg-slate-100 dark:bg-zinc-800/60">
                    <th>Prop name</th>
                    <th>Type</th>
                    <th>Sample Value</th>
                    <th>Description</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="font-semibold">`items`</td>
                    <td>React.ReactNode[]</td>
                    <th>See example</th>
                    <td>
                      An array of React nodes representing the list items.
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <h1 className="text-xl mt-3">ListItem</h1>
            <p className="mt-2">
              The ListItem component represents an individual item within the
              DraggableList component. It displays the content of the item along
              with a draggable handle for reordering.
            </p>
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
                    <td className="font-semibold">`id`</td>
                    <td>string</td>
                    <td>The unique ID of the list item.</td>
                  </tr>
                  <tr>
                    <td className="font-semibold">`index`</td>
                    <td>number</td>
                    <td>The index of the list item.</td>
                  </tr>
                  <tr>
                    <td className="font-semibold">`children`</td>
                    <td>React.ReactNode</td>
                    <td>The content of the list item.</td>
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
              The appearance of each list item can be customized using CSS.
            </p>
          </div>
        </section>
        <section id="notes" className="pb-10">
          <div className="mt-10">
            <h1 className="text-2xl mt-3 font-semibold">Notes</h1>
            <div className="mt-4">
              <ul className="list-disc ml-6">
                <li>
                  The DraggableList component utilizes the{" "}
                  <a
                    href="https://www.npmjs.com/package/react-beautiful-dnd"
                    className="text-primary hover:underline"
                    target="_blank"
                  >
                    react-beautiful-dnd
                  </a>
                  library to enable drag-and-drop reordering.
                </li>
                <li>
                  The ListItem component encapsulates each individual item
                  within the draggable list.
                </li>
              </ul>
            </div>
          </div>
        </section>
        <div className="mt-6 mb-10">
          <BottomLinks prevUrl="draggable-boxes" nextUrl="drawer" />
        </div>
      </div>
      <RightSidebar sections={sections} />
    </div>
  );
};

export default DraggableList;
