import { Tab, Tabs } from "./Tabs";

const FullWidth = () => {
  return (
    <>
      <div className="border border-zinc-300 dark:border-zinc-600 rounded-md p-4 mt-6">
        <Tabs full>
          <Tab title="Tab 1">
            <p>This is the content of the first tab</p>
          </Tab>
          <Tab title="Tab 2">
            <p>This is the content of the second tab</p>
          </Tab>
          <Tab title="Tab 3">
            <p>This is the content of the third tab</p>
          </Tab>
        </Tabs>
      </div>
      <div className="border border-zinc-300 dark:border-zinc-600 rounded-md p-4 mt-6">
        <Tabs variant="pills" full>
          <Tab title="Tab 1">
            <p>This is the content of the first tab</p>
          </Tab>
          <Tab title="Tab 2">
            <p>This is the content of the second tab</p>
          </Tab>
          <Tab title="Tab 3">
            <p>This is the content of the third tab</p>
          </Tab>
        </Tabs>
      </div>
    </>
  );
};

export default FullWidth;
