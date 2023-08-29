/* eslint-disable react/jsx-key */
/* eslint-disable @next/next/no-img-element */
import { FiHome } from "react-icons/fi";
import DraggableList from "./DraggableList";

const App = () => {
  const items = [
    <div className="flex items-center gap-2">
      <img src="/user.jpg" alt="" className="w-8 h-8 rounded-md" />
      <p>Wabweni Brian</p>
    </div>,
    <div className="flex items-center gap-2">
      <FiHome />
      <p>With icons also</p>
    </div>,
    <div className="flex items-center gap-2">
      <img src="/photo (65).jpg" alt="" className="w-8 h-8 rounded-md" />
      <p>Image 2</p>
    </div>,
    <div className="flex items-center gap-2">
      <img src="/photo (66).jpg" alt="" className="w-8 h-8 rounded-md" />
      <p>Image 3</p>
    </div>,
    <div className="flex items-center gap-2">
      <img src="/photo (67).jpg" alt="" className="w-8 h-8 rounded-md" />
      <p>Image 4</p>
    </div>,
  ];

  return (
    <>
      <DraggableList items={items} />
    </>
  );
};

export default App;
