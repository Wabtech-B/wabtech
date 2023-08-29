/* eslint-disable react/no-unescaped-entities */

import RightSidebar from "@/components/common/RightSidebar";
import Alert from "@/components/wabtech/alert/Alert";
import ControlIconsSnippet from "@/components/wabtech/pagination/ControlIconsSnippet";
import DataFetchingSnippet from "@/components/wabtech/pagination/DataFetchingSnippet";
import PaginationSnippet from "@/components/wabtech/pagination/PaginationSnippet";
import RoundedSnippet from "@/components/wabtech/pagination/RoundedSnippet";
import SimpleSnippet from "@/components/wabtech/pagination/SimpleSnippet";

const Pagination = () => {
  const sections = [
    { id: "introduction", title: "Introduction" },
    { id: "default", title: "Default Pagination" },
    { id: "rounded", title: "Rounded buttons" },
    { id: "icon_controls", title: "With icon controls" },
    { id: "simple", title: "Simple pagination" },
    { id: "data_fetching", title: "With Data fetching" },
    { id: "props", title: "Props" },
    { id: "css_customization", title: "Customization" },
  ];
  return (
    <div className="grid grid-cols-1 md:grid-cols-auto-200">
      <div>
        <section id="introduction">
          <h1 className="mb-4 text-3xl font-semibold">Pagination</h1>
          <div className="my-4">
            <p>
              The Pagination component allows users to navigate through a list
              of pages. It supports various customization options such as simple
              pagination, rounded buttons, and icon controls.
            </p>
          </div>
        </section>
        <section id="default">
          <div className="mt-8">
            <h1 className="text-2xl font-semibold">Installation</h1>
            <p className="mt-2">
              No installation required, just copy and paste the component code
            </p>
            <h1 className="mt-6 text-2xl font-semibold">Usage</h1>
            <div className="my-4">
              <Alert variant="warning">
                <h1 className="text-2xl">Please Note:</h1>
                <p className="mt-2">
                  The <span className="code">Pagination.tsx</span> has the main
                  code for the component, the rest of the code in{" "}
                  <span className="code">App.tsx</span> shows you how to use the
                  component.
                </p>
              </Alert>
              <h1 className="mt-3 text-xl">Default Pagination</h1>
              <p className="mt-2">
                You can use the Pagination component to create basic pagination
                controls.
              </p>
            </div>
          </div>
          <div className="mt-8">
            <PaginationSnippet />
          </div>
        </section>

        <section id="rounded">
          <div className="mt-10">
            <h1 className="mt-3 text-xl">Rounded Pagination</h1>
            <p className="mt-2">
              You can use the Pagination component with rounded buttons by using
              the <span className="code">`rounded`</span> prop.
            </p>
            <div className="mt-8">
              <RoundedSnippet />
            </div>
          </div>
        </section>

        <section id="icon_controls">
          <div className="mt-10">
            <h1 className="mt-3 text-xl">Icon Controls Pagination</h1>
            <p className="mt-2">
              You can use the Pagination component with icon controls by passing
              the <span className="code">`icons`</span> prop.
            </p>
            <div className="mt-8">
              <ControlIconsSnippet />
            </div>
          </div>
        </section>

        <section id="simple">
          <div className="mt-10">
            <h1 className="mt-3 text-xl">Simple Pagination</h1>
            <p className="mt-2">
              You can enable simple pagination to show only controls by passing
              the <span className="code">`simple`</span> prop.
            </p>
            <div className="mt-8">
              <SimpleSnippet />
            </div>
          </div>
        </section>

        <section id="data_fetching">
          <div className="mt-10">
            <h1 className="mt-3 text-xl">Pagination with Data Fetching</h1>
            <p className="mt-2">
              This example shows you how to use the Pagination component when
              fetching data from an external API.
            </p>
            <div className="mt-8">
              <DataFetchingSnippet />
            </div>
          </div>
        </section>

        <section id="props" className="pb-10">
          <div className="mt-10">
            <h1 className="mt-3 text-2xl font-semibold">Props</h1>
            <div className="mt-4 overflow-auto border rounded-lg table-wrapper dark:border-zinc-600">
              <table className="w-full overflow-hidden rounded-lg">
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
                    <td className="font-semibold">`currentPage`</td>
                    <td>number</td>
                    <td>1</td>
                    <td>The current active page.</td>
                  </tr>
                  <tr>
                    <td className="font-semibold">`totalPages`</td>
                    <td>number</td>
                    <td>10</td>
                    <td>The total number of pages.</td>
                  </tr>
                  <tr>
                    <td className="font-semibold">`onPageChange`</td>
                    <td>function</td>
                    <td>handlePageChange</td>
                    <td>The function called when a page is changed.</td>
                  </tr>
                  <tr>
                    <td className="font-semibold">`simple`</td>
                    <td>boolean (optional)</td>
                    <td>true</td>
                    <td>Determines whether to use simple pagination.</td>
                  </tr>
                  <tr>
                    <td className="font-semibold">`rounded`</td>
                    <td>boolean (optional)</td>
                    <td>true</td>
                    <td>Determines whether to use rounded buttons.</td>
                  </tr>
                  <tr>
                    <td className="font-semibold">`icons`</td>
                    <td>boolean (optional)</td>
                    <td>true</td>
                    <td>Determines whether to use icon controls.</td>
                  </tr>
                  <tr>
                    <td className="font-semibold">`className`</td>
                    <td>string (optional)</td>
                    <td>'custom-class'</td>
                    <td>Custom class name for additional styling.</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>
        <section id="css_customization">
          <div className="mt-10">
            <h1 className="mt-3 text-2xl font-semibold">CSS Customization</h1>
            <p className="mt-2">
              You can further customize the appearance of the Pagination
              component using CSS classes. These classes can be used to adjust
              the styles of the pagination buttons and controls.
            </p>
          </div>
        </section>
        <section id="notes" className="pb-10">
          <div className="mt-10">
            <h1 className="mt-3 text-2xl font-semibold">Notes</h1>
            <div className="mt-4">
              <ul className="ml-6 list-disc">
                <li>
                  The Pagination component allows users to navigate through
                  pages.
                </li>
                <li>
                  You can customize the appearance of pagination using options
                  like simple pagination, rounded buttons, and icon controls.
                </li>
                <li>
                  The <span className="code">`onPageChange`</span> callback is
                  triggered when the active page is changed.
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

export default Pagination;
