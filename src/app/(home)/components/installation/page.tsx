/* eslint-disable react/no-unescaped-entities */
import CopyIcon from "@/components/common/CopyIcon";
import RightSidebar from "@/components/common/RightSidebar";
import Alert from "@/components/wabtech/alert/Alert";
import { Tab, Tabs } from "@/components/wabtech/tabs/Tabs";
import { tabsComponentCodeTS, tabsPreviewCodeTS } from "@/data/codeSnippets";
import CodeSnippet from "./CodeSnippet";

const InstallationGuide = () => {
  const installCodeReactjs = `npx create-react-app my-app 
  
cd my-app`;
  const installCodeNextjs = `npx create-next-app@latest my-app 
  
cd my-app`;

  const installDeps = `npm install react-icons framer-motion react-transition-group`;

  const sections = [
    { id: "deps", title: "Intro & Dependencies" },
    { id: "guide", title: "Step guide" },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-auto-200">
      <div>
        <section id="deps">
          <h2 className="text-4xl font-semibold mb-4">
            Installation & Usage Guide
          </h2>
          <p className="text-lg mb-6">
            To start using our components in your React/Next.js project, follow
            these simple steps to install the required dependencies and set up
            the library. Since our components are built with Tailwind CSS, make
            sure it's installed. You can follow the installation guide on their{" "}
            <a
              href="https://www.tailwindcss.com/install"
              target="_blank"
              className="underline text-primary"
            >
              official website.
            </a>
          </p>
          <div className="bg-zinc-100 dark:bg-zinc-800 rounded-md p-6 mb-6">
            <h2 className="text-2xl font-semibold mb-4">Dependencies</h2>
            <p className="text-lg mb-4">
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
        </section>
        <div className="my-5">
          <Alert>
            Please when using the components in Next.js 13.4 or later, use{" "}
            <span className="code">"use client"</span> for components that rely
            on browser APIs and react hooks
          </Alert>
        </div>
        <section id="guide">
          <div>
            <h3 className="text-xl font-semibold mb-4">Installation</h3>
            <div className="my-2">
              <h1 className="text-xl mb-4">Create a React.js/Next.js App:</h1>
              <div className="bg-zinc-950 border border-zinc-700 p-2 rounded-lg">
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
              <p className="text-lg mb-4">
                Replace my-app with your preferred project name.
              </p>
            </div>
            <div className="my-4">
              <h1 className="text-xl mb-4">
                Install Required Dependencies (Optional):
              </h1>
              <div className="bg-zinc-950 border border-zinc-700 p-2 rounded-lg relative">
                <CodeSnippet snippet={installDeps} />
                <div className="absolute top-5 right-4">
                  <CopyIcon text={installDeps} />
                </div>
              </div>
              <p className="text-lg mb-4">
                These dependencies are used by some of our components
              </p>
            </div>
            <div className="my-2">
              <h1 className="text-xl mb-4">Copy Component Code:</h1>
              <p className="text-lg mb-4">
                Browse the official documentation to find the components you
                want to use. Copy the component code snippets provided in the
                documentation.
              </p>
            </div>
            <div className="my-2">
              <h1 className="text-xl mb-4">Paste and Customize:</h1>
              <p className="text-lg mb-4">
                Inside your React components, paste the copied code snippets.
                Customize the code as needed to match your project's design and
                requirements. You can adjust labels, styles, and other
                attributes. e.g
              </p>
              <h1 className="text-2xl">
                Tab Component <span className="code tsx-lg">Tabs.tsx</span>
              </h1>
              <div className="mt-4">
                <div className="bg-zinc-950 border border-zinc-700 p-2 rounded-lg relative">
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
              <h1 className="text-xl mb-4">
                Import Component: <span className="code tsx-lg">App.tsx</span>
              </h1>
              <p className="text-lg mb-4">
                Make sure to import the necessary components at the beginning of
                your file using:
              </p>
              <div className="mt-4">
                <div className="bg-zinc-950 border border-zinc-700 p-2 rounded-lg relative">
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
              <h1 className="text-xl mb-4">Start the Development Server:</h1>
              <div className="bg-zinc-950 border border-zinc-700 p-2 rounded-lg">
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
        <p className="text-lg mb-6">
          For more detailed information, usage examples, and customization
          options, refer to the official documentation. If you encounter any
          issues or have questions, feel free to email us at{" "}
          <a
            href="mailto:wabtech.tech@gmail.com"
            className="text-primary underline"
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
      </div>
      <RightSidebar sections={sections} />
    </div>
  );
};

export default InstallationGuide;
