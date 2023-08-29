import { FiLayers, FiSettings, FiUser } from "react-icons/fi";
import { Tab, Tabs } from "./Tabs";

const Icons = () => {
  return (
    <>
      <div className="border border-zinc-300 dark:border-zinc-600 rounded-md p-4 mt-6">
        <Tabs variant="indicator">
          <Tab
            title={
              <div className="flex items-center gap-x-2">
                <FiUser />
                <span>Tab 1</span>
              </div>
            }
          >
            <div>
              <h1 className="text-xl font-semibold mb-3">Content for Tab 1</h1>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Dolorem sequi officiis laborum cum doloribus minus voluptatum
                excepturi expedita, fuga recusandae?
              </p>
            </div>
          </Tab>
          <Tab
            title={
              <div className="flex items-center gap-x-2">
                <FiLayers />
                <span>Tab 1</span>
              </div>
            }
          >
            <div>
              <h1 className="text-xl font-semibold mb-3">Content for Tab 2</h1>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Porro
                nostrum voluptatem ratione perferendis, ullam eaque nam vel est
                iusto, voluptatum tempora quasi cum et ea? Sunt impedit odio cum
                vero!
              </p>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Porro
                nostrum voluptatem ratione perferendis, ullam eaque nam vel est
                iusto, voluptatum tempora quasi cum et ea? Sunt impedit odio cum
                vero!
              </p>
            </div>
          </Tab>
          <Tab
            title={
              <div className="flex items-center gap-x-2">
                <FiSettings />
                <span>Tab 1</span>
              </div>
            }
          >
            <div>
              <h1 className="text-xl font-semibold mb-3">Content for Tab 3</h1>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugiat
                laudantium quibusdam possimus labore eum tenetur perspiciatis
                voluptates velit voluptate. Ullam consectetur perferendis, sunt
                rerum fugiat voluptate error voluptates tempora libero maiores
                debitis modi, voluptas, unde praesentium? Ut, quas quibusdam
                vitae culpa porro deleniti tempora, odit odio eveniet minima
                consequatur aut commodi illo dolore pariatur aliquam optio ex
                cum enim sit!
              </p>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugiat
                laudantium quibusdam possimus labore eum tenetur perspiciatis
                voluptates velit voluptate. Ullam consectetur perferendis, sunt
                rerum fugiat voluptate error voluptates tempora libero maiores
                debitis modi, voluptas, unde praesentium? Ut, quas quibusdam
                vitae culpa porro deleniti tempora, odit odio eveniet minima
                consequatur aut commodi illo dolore pariatur aliquam optio ex
                cum enim sit!
              </p>
            </div>
          </Tab>
        </Tabs>
      </div>
      <div className="border border-zinc-300 dark:border-zinc-600 rounded-md p-4 mt-6">
        <Tabs variant="pills" full>
          <Tab
            title={
              <div className="flex items-center gap-x-2">
                <FiUser />
                <span>Tab 1</span>
              </div>
            }
          >
            <div>
              <h1 className="text-xl font-semibold mb-3">Content for Tab 1</h1>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Dolorem sequi officiis laborum cum doloribus minus voluptatum
                excepturi expedita, fuga recusandae?
              </p>
            </div>
          </Tab>
          <Tab
            title={
              <div className="flex items-center gap-x-2">
                <FiLayers />
                <span>Tab 1</span>
              </div>
            }
          >
            <div>
              <h1 className="text-xl font-semibold mb-3">Content for Tab 2</h1>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Porro
                nostrum voluptatem ratione perferendis, ullam eaque nam vel est
                iusto, voluptatum tempora quasi cum et ea? Sunt impedit odio cum
                vero!
              </p>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Porro
                nostrum voluptatem ratione perferendis, ullam eaque nam vel est
                iusto, voluptatum tempora quasi cum et ea? Sunt impedit odio cum
                vero!
              </p>
            </div>
          </Tab>
          <Tab
            title={
              <div className="flex items-center gap-x-2">
                <FiSettings />
                <span>Tab 1</span>
              </div>
            }
          >
            <div>
              <h1 className="text-xl font-semibold mb-3">Content for Tab 3</h1>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugiat
                laudantium quibusdam possimus labore eum tenetur perspiciatis
                voluptates velit voluptate. Ullam consectetur perferendis, sunt
                rerum fugiat voluptate error voluptates tempora libero maiores
                debitis modi, voluptas, unde praesentium? Ut, quas quibusdam
                vitae culpa porro deleniti tempora, odit odio eveniet minima
                consequatur aut commodi illo dolore pariatur aliquam optio ex
                cum enim sit!
              </p>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugiat
                laudantium quibusdam possimus labore eum tenetur perspiciatis
                voluptates velit voluptate. Ullam consectetur perferendis, sunt
                rerum fugiat voluptate error voluptates tempora libero maiores
                debitis modi, voluptas, unde praesentium? Ut, quas quibusdam
                vitae culpa porro deleniti tempora, odit odio eveniet minima
                consequatur aut commodi illo dolore pariatur aliquam optio ex
                cum enim sit!
              </p>
            </div>
          </Tab>
        </Tabs>
      </div>
    </>
  );
};

export default Icons;
