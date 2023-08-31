/* eslint-disable react/no-unescaped-entities */

import CopyIcon from "@/components/common/CopyIcon";
import CodeSnippet from "../installation/CodeSnippet";
import Alert from "@/components/wabtech/alert/Alert";
import KanbanBoardSnippet from "@/components/wabtech/kanban-board/KanbanBoardSnippet";
import RightSidebar from "@/components/common/RightSidebar";
import BottomLinks from "@/components/common/BottomLinks";

const KanbanBoard = () => {
  const sections = [
    { id: "introduction", title: "Introduction" },
    { id: "example", title: "Example" },
    { id: "logic", title: "Component Logic" },
    { id: "props", title: "Props" },
    { id: "css_customization", title: "Customization" },
  ];
  const installDeps = `npm install react-beautiful-dnd`;
  return (
    <div className="grid grid-cols-1 md:grid-cols-auto-200">
      <div>
        <section id="introduction">
          <h1 className="text-3xl font-semibold mb-4">Kanban Board</h1>
          <div className="my-4">
            <p>
              The KanbanBoard component represents a Kanban-style task
              management board with columns and tasks. It uses the{" "}
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
          <h1 className="text-2xl font-semibold mb-4">Structure</h1>
          <div className="my-4 ml-8">
            <ul className="list-disc">
              <li>
                The Kanban board is a collection of columns, each containing
                tasks.
              </li>
              <li>Users can add, edit, and delete columns and tasks.</li>
              <li>
                Tasks within a column can be reordered and moved between columns
                using drag and drop.
              </li>
            </ul>
          </div>
        </section>
        <section id="example">
          <div className="mt-8">
            <h1 className="text-2xl font-semibold">Installation</h1>
            <p className="mt-2">
              To use the KanbanBoard component, you need to install the{" "}
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
                  The <span className="code">KanbanBoard.tsx</span> has the main
                  code for the component, the rest of the code in{" "}
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
            <KanbanBoardSnippet />
          </div>
        </section>

        <section id="logic" className="mt-8">
          <h1 className="text-2xl font-semibold mb-4">Component Logic</h1>
          <p className="mt-3">
            The KanbanBoard component features extensive logic for managing
            columns, tasks, and interactions:
          </p>
          <div className="my-4 ml-8">
            <ul className="list-decimal">
              <li className="text-xl">Columns</li>
              <ul className="list-disc ml-6 mt-3">
                <li>
                  Initial columns are defined using{" "}
                  <span className="code">`initialColumns`</span>.
                </li>
                <li>
                  Columns can be edited, deleted, and added through various
                  functions.
                </li>
                <li>
                  Column titles can be edited using input fields or toggled
                  directly.
                </li>
              </ul>
              <li className="text-xl mt-5">Tasks</li>
              <ul className="list-disc ml-6 mt-3">
                <li>
                  Initial tasks are defined using{" "}
                  <span className="code">`initialTasks`</span>.
                </li>
                <li>Tasks can be edited, deleted, and added within columns.</li>
                <li>
                  Task content can be edited using input fields or toggled
                  directly.
                </li>
              </ul>
              <li className="text-xl mt-5">Drag and Drop Functionality</li>
              <ul className="list-disc ml-6 mt-3">
                <li>
                  The <span className="code">`onDragEnd`</span> function handles
                  task and column reordering/moving logic.
                </li>
                <li>
                  Columns and tasks can be reordered within their respective
                  groups.
                </li>
                <li>Tasks can be moved between columns.</li>
              </ul>
            </ul>
          </div>
        </section>

        <section id="props" className="pb-10">
          <div className="mt-10">
            <h1 className="text-2xl mt-3 font-semibold">Props</h1>
            <p>No Props</p>
          </div>
        </section>
        <section id="css_customization">
          <div className="mt-10">
            <h1 className="text-2xl mt-3 font-semibold">CSS Customization</h1>
            <p className="mt-2">
              The component provides CSS classes and attributes that can be
              targeted for customization. Styling, including board, column, and
              task appearance, can be adapted to match your design.
            </p>
          </div>
        </section>
        <section id="notes" className="pb-10">
          <div className="mt-10">
            <h1 className="text-2xl mt-3 font-semibold">Notes</h1>
            <div className="mt-4">
              <ul className="list-disc ml-6">
                <li>
                  The KanbanBoard component creates a flexible and interactive
                  task management interface.
                </li>
                <li>
                  It's essential to ensure that you have the necessary import
                  paths and dependencies set up correctly in your project.
                </li>
              </ul>
            </div>
          </div>
        </section>
        <div className="mt-6 mb-10">
          <BottomLinks prevUrl="input" nextUrl="modal" />
        </div>
      </div>
      <RightSidebar sections={sections} />
    </div>
  );
};

export default KanbanBoard;
