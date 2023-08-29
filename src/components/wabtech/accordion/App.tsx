import { Accordion, AccordionItem } from "./Accordion";

const App = () => {
  return (
    <div>
      <Accordion>
        <AccordionItem title="What is React?">
          React is a JavaScript library for building user interfaces.
        </AccordionItem>
        <AccordionItem title="How does React work?">
          React uses a virtual DOM and a reconciliation algorithm to efficiently
          update the user interface.
        </AccordionItem>
        <AccordionItem title="What are components in React?">
          Components are the building blocks of a React application, allowing
          you to create reusable UI elements.
        </AccordionItem>
      </Accordion>
    </div>
  );
};

export default App;
