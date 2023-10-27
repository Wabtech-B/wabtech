/* eslint-disable react/no-unescaped-entities */
import CopyIcon from "@/components/common/CopyIcon";
import RightSidebar from "@/components/common/RightSidebar";
import Alert from "@/components/wabtech/alert/Alert";
import { Tab, Tabs } from "@/components/wabtech/tabs/Tabs";
import { tabsComponentCodeTS, tabsPreviewCodeTS } from "@/data/codeSnippets";
import CodeSnippet from "./CodeSnippet";
import BottomLinks from "@/components/common/BottomLinks";

const InstallationGuide = () => {
  const installCodeReactjs = `npx create-react-app my-app 
  
cd my-app`;
  const installCodeNextjs = `npx create-next-app@latest my-app 
  
cd my-app`;
  const extraPackages = `npm install classnames @types/react-beautiful-dnd @types/react-transition-group`;

  const installDeps = `npm install react-icons framer-motion react-transition-group`;

  const sections = [
    { id: "deps", title: "Intro & Dependencies" },
    { id: "guide", title: "Step guide" },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-auto-200">
      <div>
        <section id="deps">
          <h2 className="mb-4 text-4xl font-semibold">
            Installation & Usage Guide
          </h2>
          <p className="mb-6 text-lg">
            To start using our components in your React/Next.js project, follow
            these simple steps to install the required dependencies and set up
            the library. Since our components are built with Tailwind CSS, make
            sure it's installed. You can follow the installation guide on their{" "}
            <a
              href="https://tailwindcss.com/"
              target="_blank"
              className="underline text-primary"
            >
              official website.
            </a>
          </p>
          <div className="p-6 mb-6 rounded-md bg-zinc-100 dark:bg-zinc-800">
            <h2 className="mb-4 text-2xl font-semibold">Dependencies</h2>
            <p className="mb-4 text-lg">
              While our components do not require any installation, some
              components do rely on external libraries for specific
              functionality. Here are the only dependency installations
              required:
            </p>
            <ul className="my-4 ml-8">
              <li>
                <a
                  href="https://react-icons.github.io/react-icons/"
                  target="_blank"
                  className="underline text-primary"
                >
                  react-icons
                </a>
                : Used to include icons within some components.
              </li>
              <li>
                <a
                  href="https://www.framer.com/api/motion/"
                  target="_blank"
                  className="underline text-primary"
                >
                  framer-motion
                </a>
                : Used for animations in certain components.
              </li>
              <li>
                <a
                  href="http://reactcommunity.org/react-transition-group/"
                  target="_blank"
                  className="underline text-primary"
                >
                  react-transition-group
                </a>
                : Required for tooltips' transition effects.
              </li>
            </ul>
            <p className="text-lg">
              Make sure to include these dependencies in your project if you
              intend to use the relevant components.
            </p>
          </div>

          <div className="mt-4">
            <h2 className="mb-4 text-xl font-semibold">Note:</h2>
            <p className="mt-3 text-lg">
              If you are using Next.js and Typescript, add the following
              packages, they are light-weight so no need to worry. Only add them
              if your using <span className="code">Tooltip</span>,{" "}
              <span className="code">Switch</span>,{" "}
              <span className="code">Badge</span>,{" "}
              <span className="code">GradientIcon</span> components and any
              other component that uses drag and drop.
            </p>

            <div className="relative p-2 mt-3 border rounded-lg bg-zinc-950 border-zinc-700">
              <CodeSnippet snippet={extraPackages} />
              <div className="absolute top-5 right-4">
                <CopyIcon text={extraPackages} />
              </div>
            </div>
          </div>
        </section>
        <div className="my-5">
          <Alert title="For Next.js">
            Please note that we use Nextjs 13.4 so most components are marked
            with <span className="code">"use client"</span> directive to support
            hooks and browser APIs
          </Alert>
        </div>
        <section id="guide">
          <div>
            <h3 className="mb-4 text-xl font-semibold">Installation</h3>
            <div className="my-2">
              <h1 className="mb-4 text-xl">Create a React.js/Next.js App:</h1>
              <div className="p-2 border rounded-lg bg-zinc-950 border-zinc-700">
                <Tabs>
                  <Tab title="React.js">
                    <CodeSnippet snippet={installCodeReactjs} />

                    <div className="absolute top-2 right-4">
                      <CopyIcon text={installCodeReactjs} />
                    </div>
                  </Tab>
                  <Tab title="Next.js">
                    <CodeSnippet snippet={installCodeNextjs} />
                    <div className="absolute top-2 right-4">
                      <CopyIcon text={installCodeNextjs} />
                    </div>
                  </Tab>
                </Tabs>
              </div>
              <p className="mb-4 text-lg">
                Replace my-app with your preferred project name.
              </p>
            </div>
            <div className="my-4">
              <h1 className="mb-4 text-xl">
                Install Required Dependencies (Optional):
              </h1>
              <div className="relative p-2 border rounded-lg bg-zinc-950 border-zinc-700">
                <CodeSnippet snippet={installDeps} />
                <div className="absolute top-5 right-4">
                  <CopyIcon text={installDeps} />
                </div>
              </div>
              <p className="mb-4 text-lg">
                These dependencies are used by some of our components
              </p>
            </div>
            <div className="my-2">
              <h1 className="mb-4 text-xl">Copy Component Code:</h1>
              <p className="mb-4 text-lg">
                Browse the official documentation to find the components you
                want to use. Copy the component code snippets provided in the
                documentation.
              </p>
            </div>
            <div className="my-2">
              <h1 className="mb-4 text-xl">Paste and Customize:</h1>
              <p className="mb-4 text-lg">
                Inside your React components, paste the copied code snippets.
                Customize the code as needed to match your project's design and
                requirements. You can adjust labels, styles, and other
                attributes. e.g
              </p>
              <h1 className="text-2xl">
                Tab Component <span className="code tsx-lg">Tabs.tsx</span>
              </h1>
              <div className="mt-4">
                <div className="relative p-2 border rounded-lg bg-zinc-950 border-zinc-700">
                  <CodeSnippet
                    snippet={tabsComponentCodeTS}
                    showLines
                    language="jsx"
                  />
                  <div className="absolute top-5 right-4">
                    <CopyIcon text={tabsComponentCodeTS} />
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-5">
              <h1 className="mb-4 text-xl">
                Import Component: <span className="code tsx-lg">App.tsx</span>
              </h1>
              <p className="mb-4 text-lg">
                Make sure to import the necessary components at the beginning of
                your file using:
              </p>
              <div className="mt-4">
                <div className="relative p-2 border rounded-lg bg-zinc-950 border-zinc-700">
                  <CodeSnippet
                    snippet={tabsPreviewCodeTS}
                    showLines
                    language="jsx"
                  />
                  <div className="absolute top-5 right-4">
                    <CopyIcon text={tabsPreviewCodeTS} />
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-4">
              <h1 className="mb-4 text-xl">Start the Development Server:</h1>
              <div className="p-2 border rounded-lg bg-zinc-950 border-zinc-700">
                <Tabs>
                  <Tab title="React.js">
                    <CodeSnippet snippet="npm start" />
                    <div className="absolute top-2 right-4">
                      <CopyIcon text="npm start" />
                    </div>
                  </Tab>
                  <Tab title="Next.js">
                    <CodeSnippet snippet="npm run dev" />

                    <div className="absolute top-2 right-4">
                      <CopyIcon text="npm run dev" />
                    </div>
                  </Tab>
                </Tabs>
              </div>
            </div>
            <div className="mt-4">
              <p className="text-lg">
                Your application will be available at{" "}
                <a
                  href="http://localhost:3000"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 hover:underline"
                >
                  http://localhost:3000
                </a>{" "}
                by default.
              </p>
            </div>
          </div>
        </section>
        <p className="mb-6 text-lg">
          For more detailed information, usage examples, and customization
          options, refer to the official documentation. If you encounter any
          issues or have questions, feel free to email us at{" "}
          <a
            href="mailto:wabtech.tech@gmail.com"
            className="underline text-primary"
          >
            wabtech.tech@gmail.com
          </a>{" "}
          or check the documentation for troubleshooting.
        </p>
        <p className="text-lg">
          You have successfully installed and integrated our component into your
          React project. Enjoy building elegant and feature-rich user interfaces
          with ease.
        </p>

        <div className="mt-6 mb-10">
          <BottomLinks prevUrl="getting-started" nextUrl="accordion" />
        </div>
      </div>
      <RightSidebar sections={sections} />
    </div>
  );
};

export default InstallationGuide;
