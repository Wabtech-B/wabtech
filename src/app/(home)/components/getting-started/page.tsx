/* eslint-disable react/no-unescaped-entities */

import RightSidebar from "@/components/common/RightSidebar";
import Alert from "@/components/wabtech/alert/Alert";

const GettingStarted = () => {
  const sections = [
    { id: "getting_started", title: "Intro & Featured" },
    { id: "deps", title: "Dependencies" },
    { id: "how_to_use", title: "How to use" },
  ];
  return (
    <div className="grid grid-cols-1 md:grid-cols-auto-200">
      <div>
        <section id="getting_started">
          <h1 className="text-4xl font-semibold mb-4">
            Getting Started with our components
          </h1>
          <p className="text-lg mb-6">
            Welcome to our components, a collection of reusable and customizable
            UI components designed to make your web development process smoother
            and more efficient. These components are responsive, support dark
            mode, and are built with accessibility and customization in mind.
            Whether you're building a personal project or a professional
            application, our components have you covered. They are mainly built
            with{" "}
            <a
              href="https://tailwindcss.com/"
              className="text-primary underline"
              target="_blank"
            >
              tailwindcss
            </a>
          </p>
          <div className="bg-zinc-100 dark:bg-zinc-800 border dark:border-zinc-700 rounded-md p-6 mb-6">
            <h2 className="text-2xl font-semibold mb-4">Features</h2>
            <ul className="list-disc ml-6">
              <li className="mb-2">
                <span className="font-semibold">Reusability:</span> Each
                component is designed to be easily reused across your
                application, helping you save time and effort in development.
              </li>
              <li className="mb-2">
                <span className="font-semibold">Responsive:</span> The
                components are responsive by default, ensuring a consistent
                experience across different screen sizes and devices.
              </li>
              <li className="mb-2">
                <span className="font-semibold"> Dark Mode Support:</span> the
                components components seamlessly adapt to dark mode
                environments, enhancing user experience.
              </li>
              <li className="mb-2">
                <span className="font-semibold">Customizable:</span> Customize
                the appearance and behavior of the components to match your
                project's design and branding.
              </li>
              <li className="mb-2">
                <span className="font-semibold">Minimal Dependencies:</span> Our
                components are designed to be lightweight and do not rely
                heavily on external dependencies.
              </li>
              <li className="mb-2">
                <span className="font-semibold">Built with TypeScript:</span>{" "}
                The components are built using TypeScript, providing type safety
                and improved developer experience.
              </li>
              <li className="mb-2">
                <span className="font-semibold">Next.js Compatible:</span> If
                you're using Next.js, you'll find it easy to integrate the
                components into your projects.
              </li>
            </ul>
          </div>
        </section>
        <section id="deps">
          <div className="my-8">
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
        <section id="how_to_use">
          <div className="gradient-box p-4 rounded-lg mb-6">
            <h2 className="text-2xl font-semibold mb-4">How to Use</h2>
            <p className="text-lg mb-4">
              Using the components is as simple as copying and pasting code
              snippets into your React application. Here's how to get started:
            </p>
            <ol className="list-decimal ml-6">
              <li className="mb-2">
                <strong>Explore Components:</strong> Browse through the
                documentation to discover the available components and their
                usage examples.
              </li>
              <li className="mb-2">
                <strong>Copy and Paste:</strong> To use a component, find the
                code snippet provided in the documentation. Copy the snippet and
                paste it into your React application's codebase.
              </li>
              <li className="mb-2">
                <strong>Customize:</strong> Customize the copied code to match
                your project's requirements. You can adjust styles, labels, and
                other attributes to fit your design.
              </li>
              <li className="mb-2">
                <strong>Repeat:</strong> Repeat the process for each component
                you want to include in your project.
              </li>
            </ol>
          </div>
        </section>
        <p className="text-lg mb-6">
          For detailed information about each component, usage examples,
          customization options, and more, refer to the components' official
          documentation.
        </p>
        <div className="bg-zinc-100 dark:bg-zinc-800 rounded-md p-6 mb-6">
          <h2 className="text-2xl font-semibold mb-4">
            Contributions and Support
          </h2>
          <p className="text-lg mb-4">
            For the time being, no contributions are allowed since it's not a
            fully fledged library. But we intend to make it open source for
            other developers to contribute.
          </p>
        </div>
        <p className="text-lg">
          Now that you have a brief understanding of what our components offers,
          you're ready to start building your projects with powerful and
          customizable UI components. Whether you're creating a simple webpage
          or a complex web application, the components will help you create
          elegant and consistent user interfaces with ease.
        </p>
        <div className="pb-8">
          <Alert>
            <p className="text-lg">
              If you have any questions, feel free to email us at{" "}
              <a
                href="mailto:wabtech.tech@gmail.com"
                className="text-slate-500 dark:text-white underline"
              >
                wabtech.tech@gmail.com
              </a>{" "}
              or browse through the documentation for more information. Happy
              coding!
            </p>
          </Alert>
        </div>
      </div>
      <RightSidebar sections={sections} />
    </div>
  );
};

export default GettingStarted;
