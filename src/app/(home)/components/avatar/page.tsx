/* eslint-disable react/no-unescaped-entities */

import RightSidebar from "@/components/common/RightSidebar";
import Alert from "@/components/wabtech/alert/Alert";
import AvatarSnippet from "@/components/wabtech/avatar/AvatarSnippet";
import CustomAvatarSnippet from "@/components/wabtech/avatar/CustomAvatarSnippet";
import SizesSnippet from "@/components/wabtech/avatar/SizesSnippet";

const Avatar = () => {
  const sections = [
    { id: "introduction", title: "Introduction" },
    { id: "default_avatar", title: "Default" },
    { id: "sizes", title: "Sizes" },
    { id: "custom", title: "Custom" },
    { id: "props", title: "Props" },
    { id: "css_customization", title: "Customization" },
  ];
  return (
    <div className="grid grid-cols-1 md:grid-cols-auto-200">
      <div>
        <section id="introduction">
          <h1 className="text-3xl font-semibold mb-4">Avatar</h1>
          <div className="my-4">
            <p>
              The Avatar component displays user profile images with
              customizable options for size, background, and initials.
            </p>
          </div>
        </section>
        <section id="default_avatar">
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
                  The <span className="code">Avatar.tsx</span> has the main code
                  for the component, the rest of the code in{" "}
                  <span className="code">App.tsx</span> shows you how to use the
                  component.
                </p>
              </Alert>
              <h1 className="text-xl mt-3">Default Avatar</h1>
              <p className="mt-2">
                The default Avatar component displays the user avatar icon.
              </p>
            </div>
          </div>
          <div className="mt-8">
            <AvatarSnippet />
          </div>
        </section>

        <section id="sizes">
          <div className="mt-10">
            <h1 className="text-xl mt-3">Avatar Sizes</h1>
            <p className="mt-2">
              You can specify the size of the Avatar using the{" "}
              <span className="code">`size`</span> prop. Available sizes are{" "}
              <span className="code">`small`</span>,{" "}
              <span className="code">`medium`</span>, and{" "}
              <span className="code">`large`</span>.
            </p>
            <div className="mt-8">
              <SizesSnippet />
            </div>
          </div>
        </section>

        <section id="custom">
          <div className="mt-10">
            <h1 className="text-xl mt-3">Custom Background Color</h1>
            <p className="mt-2">
              You can also customize the background color of the Avatar by
              providing a <span className="code">`className`</span> prop..
            </p>
            <div className="mt-8">
              <CustomAvatarSnippet />
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
                    <th>Example value</th>
                    <th>Description</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="font-semibold">`src`</td>
                    <td>string (optional)</td>
                    <td>path-to-image</td>
                    <td>Image source URL for the avatar.</td>
                  </tr>
                  <tr>
                    <td className="font-semibold">`name`</td>
                    <td>string (optional)</td>
                    <td>John Doe</td>
                    <td>User's name for generating initials.</td>
                  </tr>
                  <tr>
                    <td className="font-semibold">`size`</td>
                    <td>
                      <span className="code">`small`</span> |{" "}
                      <span className="code">`medium`</span> |{" "}
                      <span className="code">`large`</span>
                      (optional)
                    </td>
                    <td>medium</td>
                    <td>
                      Size of the avatar. Options are{" "}
                      <span className="code">`small`</span>,{" "}
                      <span className="code">`medium`</span>,{" "}
                      <span className="code">`large`</span>. Default is{" "}
                      <span className="code">`medium`</span>.
                    </td>
                  </tr>
                  <tr>
                    <td className="font-semibold">`className`</td>
                    <td>string (optional)</td>
                    <td>bg-red-500</td>
                    <td>Custom CSS class for the avatar container.</td>
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
              The Avatar component's appearance can be further customized using
              Tailwind CSS classes. You can adjust the size, font size,
              background color, and other properties.
            </p>
          </div>
        </section>
        <section id="notes" className="pb-10">
          <div className="mt-10">
            <h1 className="text-2xl mt-3 font-semibold">Notes</h1>
            <div className="mt-4">
              <ul className="list-disc ml-6">
                <li>
                  Ensure that you have the necessary dependencies installed in
                  your project, including React and Tailwind CSS.
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

export default Avatar;
