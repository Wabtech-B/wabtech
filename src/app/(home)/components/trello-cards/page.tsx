import CopyIcon from "@/components/common/CopyIcon";
import CodeSnippet from "../installation/CodeSnippet";
import Alert from "@/components/wabtech/alert/Alert";
import TrelloSnippet from "@/components/wabtech/trello-board/TrelloSnippet";
import RightSidebar from "@/components/common/RightSidebar";
import BottomLinks from "@/components/common/BottomLinks";

const TrelloBoards = () => {
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
          <h1 className="text-3xl font-semibold mb-4">Trello Cards</h1>
          <div className="my-4">
            <p>
              The Trello component represents a Trello board with multiple
              columns, each containing cards. It uses the{" "}
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
                The Trello board consists of multiple columns, each represented
                by a <span className="code">TrelloColumn</span> component.
              </li>
              <li>
                Each column contains cards, represented by{" "}
                <span className="code">TrelloCard</span> components.
              </li>
            </ul>
          </div>
        </section>
        <section id="example">
          <div className="mt-8">
            <h1 className="text-2xl font-semibold">Installation</h1>
            <p className="mt-2">
              To use the Trello component, you need to install the{" "}
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
                  The <span className="code">Trello.tsx</span>,{" "}
                  <span className="code">TrelloColumn.tsx</span> &{" "}
                  <span className="code">TrelloCard.tsx</span> have the main
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
            <TrelloSnippet />
          </div>
        </section>

        <section id="props" className="pb-10">
          <div className="mt-10">
            <h1 className="text-2xl mt-3 font-semibold">Props</h1>
            <h1 className="text-xl mt-3">Trello</h1>
            <div className="mt-4 overflow-auto table-wrapper border dark:border-zinc-600 rounded-lg">
              <table className="w-full rounded-lg overflow-hidden">
                <thead>
                  <tr className="bg-slate-100 dark:bg-zinc-800/60">
                    <th>Property</th>
                    <th>Type</th>
                    <th>Description</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="font-semibold">`id`</td>
                    <td>string</td>
                    <td>Unique identifier for the card</td>
                  </tr>
                  <tr>
                    <td className="font-semibold">`content`</td>
                    <td>React.ReactNode</td>
                    <td>Content of the card (JSX content)</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <h1 className="text-xl mt-3">TrelloColumn</h1>
            <p className="mt-2">
              The TrelloColumn component represents a column within the Trello
              board, which holds multiple TrelloCard components.
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
                    <td>Unique identifier for the column</td>
                  </tr>
                  <tr>
                    <td className="font-semibold">`index`</td>
                    <td>number</td>
                    <td>Index of the column</td>
                  </tr>
                  <tr>
                    <td className="font-semibold">`title`</td>
                    <td>string</td>
                    <td>Title of the column</td>
                  </tr>
                  <tr>
                    <td className="font-semibold">`cards`</td>
                    <td>CardData[]</td>
                    <td>Array of cards in the column</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <h1 className="text-xl mt-3">TrelloCard </h1>
            <p className="mt-2">
              The TrelloCard component represents a card within a TrelloColumn
              on the Trello board.
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
                    <td>Unique identifier for the card</td>
                  </tr>
                  <tr>
                    <td className="font-semibold">`index`</td>
                    <td>number</td>
                    <td>Index of the card</td>
                  </tr>
                  <tr>
                    <td className="font-semibold">`children`</td>
                    <td>React.ReactNode</td>
                    <td>Content of the card (JSX content)</td>
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
              The appearance of the Trello board, columns, and cards can be
              customized using CSS. The components provide CSS classes and
              attributes that you can target for customization.
            </p>
          </div>
        </section>
        <section id="notes" className="pb-10">
          <div className="mt-10">
            <h1 className="text-2xl mt-3 font-semibold">Notes</h1>
            <div className="mt-4">
              <ul className="list-disc ml-6">
                <li>
                  The Trello board allows you to create columns and add cards to
                  each column.
                </li>
                <li>
                  Columns can be collapsed to save space and expanded to view
                  the contained cards.
                </li>
                <li>
                  Cards can be dragged and dropped within and between columns
                  for reordering.
                </li>
                <li>
                  These components can serve as a foundation for creating
                  interactive task management interfaces.
                </li>
              </ul>
            </div>
          </div>
        </section>
        <div className="mt-6 mb-10">
          <BottomLinks prevUrl="tooltip" />
        </div>
      </div>
      <RightSidebar sections={sections} />
    </div>
  );
};

export default TrelloBoards;
