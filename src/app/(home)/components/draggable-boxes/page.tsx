import CopyIcon from "@/components/common/CopyIcon";
import CodeSnippet from "../installation/CodeSnippet";
import Alert from "@/components/wabtech/alert/Alert";
import DraggableBoxesSnippet from "@/components/wabtech/draggable-box/DraggableBoxesSnippet";
import RightSidebar from "@/components/common/RightSidebar";

const DraggableBoxes = () => {
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
          <h1 className="text-3xl font-semibold mb-4">DraggableBoxes </h1>
          <div className="my-4">
            <p>
              The DraggableBoxes component allows you to create a set of
              draggable boxes using the{" "}
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
              To use the DraggableBoxes component, you need to install the{" "}
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
                  The <span className="code">DraggableBoxes.tsx</span> has the
                  main code for the component, the rest of the code in{" "}
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
            <DraggableBoxesSnippet />
          </div>
        </section>

        <section id="props" className="pb-10">
          <div className="mt-10">
            <h1 className="text-2xl mt-3 font-semibold">Props</h1>
            No props
          </div>
        </section>
        <section id="css_customization">
          <div className="mt-10">
            <h1 className="text-2xl mt-3 font-semibold">CSS Customization</h1>
            <p className="mt-2">
              The appearance of the draggable boxes can be customized using CSS.
              You can modify the styles of the boxes and the container as
              needed. The component provides CSS classes and attributes that you
              can target for customization:
            </p>
          </div>
        </section>
        <section id="notes" className="pb-10">
          <div className="mt-10">
            <h1 className="text-2xl mt-3 font-semibold">Notes</h1>
            <div className="mt-4">
              <ul className="list-disc ml-6">
                <li>
                  This component utilizes the{" "}
                  <a
                    href="https://www.npmjs.com/package/react-beautiful-dnd"
                    className="text-primary hover:underline"
                    target="_blank"
                  >
                    react-beautiful-dnd
                  </a>{" "}
                  library to enable drag-and-drop functionality.
                </li>
                <li>Boxes can be dragged and dropped within the container.</li>
              </ul>
            </div>
          </div>
        </section>
      </div>
      <RightSidebar sections={sections} />
    </div>
  );
};

export default DraggableBoxes;
