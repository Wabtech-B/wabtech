/* eslint-disable react/no-unescaped-entities */

import BottomLinks from "@/components/common/BottomLinks";
import RightSidebar from "@/components/common/RightSidebar";
import Alert from "@/components/wabtech/alert/Alert";
import AvatarGroupSnippet from "@/components/wabtech/avatar-group/AvatarGroupSnippet";
import MaxToShowSnippet from "@/components/wabtech/avatar-group/MaxToShowSnippet";
import SizesSnippet from "@/components/wabtech/avatar-group/SizesSnippet";

const AvatarGroup = () => {
  const sections = [
    { id: "introduction", title: "Introduction" },
    { id: "default_avatar_group", title: "Default" },
    { id: "sizes", title: "Sizes" },
    { id: "max", title: "Max number of avatars" },
    { id: "props", title: "Props" },
    { id: "css_customization", title: "Customization" },
  ];
  return (
    <div className="grid grid-cols-1 md:grid-cols-auto-200">
      <div>
        <section id="introduction">
          <h1 className="text-3xl font-semibold mb-4">AvatarGroup</h1>
          <div className="my-4">
            <p>
              The AvatarGroup component displays a group of avatars with options
              for size, maximum avatars to show, and a "plus" indicator when the
              number of avatars exceeds the maximum.
            </p>
          </div>
        </section>
        <section id="default_avatar_group">
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
                  The <span className="code">AvatarGroup.tsx</span> has the main
                  code for the component, the rest of the code in{" "}
                  <span className="code">App.tsx</span> shows you how to use the
                  component.
                </p>
              </Alert>
              <h1 className="text-xl mt-3">Default AvatarGroup</h1>
              <p className="mt-2">
                The default AvatarGroup component displays a group of avatars.
              </p>
            </div>
          </div>
          <div className="mt-8">
            <AvatarGroupSnippet />
          </div>
        </section>

        <section id="sizes">
          <div className="mt-10">
            <h1 className="text-xl mt-3">AvatarGroup Sizes</h1>
            <p className="mt-2">
              You can specify the size of the avatars within the AvatarGroup
              using the <span className="code">`size`</span> prop. Available
              sizes are <span className="code">`small`</span>,{" "}
              <span className="code">`medium`</span>, and{" "}
              <span className="code">`large`</span>.
            </p>
            <div className="mt-8">
              <SizesSnippet />
            </div>
          </div>
        </section>

        <section id="max">
          <div className="mt-10">
            <h1 className="text-xl mt-3">Maximum Avatars to Show</h1>
            <p className="mt-2">
              You can limit the number of avatars displayed within the
              AvatarGroup using the <span className="code">`max`</span> prop.
              When the number of avatars exceeds the maximum, a "plus" indicator
              will be shown.
            </p>
            <div className="mt-8">
              <MaxToShowSnippet />
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
                    <td className="font-semibold">`size`</td>
                    <td>
                      <span className="code">`small`</span> |{" "}
                      <span className="code">`medium`</span> |{" "}
                      <span className="code">`large`</span> (optional)
                    </td>
                    <td>medium</td>
                    <td>
                      Size of the avatars within the AvatarGroup. Options are{" "}
                      <span className="code">`small`</span>,{" "}
                      <span className="code">`medium`</span>,{" "}
                      <span className="code">`large`</span>. Default is{" "}
                      <span className="code">`medium`</span>.
                    </td>
                  </tr>
                  <tr>
                    <td className="font-semibold">`max`</td>
                    <td>number (optional)</td>
                    <td>3</td>
                    <td>Maximum number of avatars to show.</td>
                  </tr>
                  <tr>
                    <td className="font-semibold">`children`</td>
                    <td>React.ReactNode</td>
                    <td>See example</td>
                    <td>Avatars to display within the AvatarGroup.</td>
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
              The AvatarGroup component's appearance can be further customized
              using Tailwind CSS classes. You can adjust the spacing, alignment,
              and other properties.
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
        <div className="mt-6 mb-10">
          <BottomLinks prevUrl="avatar" nextUrl="badge" />
        </div>
      </div>
      <RightSidebar sections={sections} />
    </div>
  );
};

export default AvatarGroup;
