"use client";

import React, { useState } from "react";
import {
  DragDropContext,
  Draggable,
  Droppable,
  DropResult,
} from "react-beautiful-dnd";

interface Box {
  id: string;
  content: React.ReactNode;
}

const initialBoxes: Box[] = [
  { id: "box-1", content: <div>Box 1</div> },
  { id: "box-2", content: <div>Box 2</div> },
  { id: "box-3", content: <div>Box 3</div> },
  { id: "box-4", content: <div>Box 4</div> },
];

const DragDrop: React.FC = () => {
  const [boxes, setBoxes] = useState(initialBoxes);
  const [isDraggingOver, setIsDraggingOver] = useState(false);

  const handleDragEnd = (result: DropResult) => {
    setIsDraggingOver(false);

    if (!result.destination) return;

    const updatedBoxes = Array.from(boxes);
    const draggedBox = updatedBoxes[result.source.index];
    const destinationBox = updatedBoxes[result.destination.index];

    // Swap the positions of the dragged item and the destination item
    updatedBoxes[result.source.index] = destinationBox;
    updatedBoxes[result.destination.index] = draggedBox;

    setBoxes(updatedBoxes);
  };

  const handleDragOver = () => {
    setIsDraggingOver(true);
  };

  const handleDragLeave = () => {
    setIsDraggingOver(false);
  };

  return (
    <div className="max-w-7xl mx-auto px-4">
      <DragDropContext onDragEnd={handleDragEnd}>
        <Droppable droppableId="boxes" direction="horizontal">
          {(provided) => (
            <div
              className="grid grid-cols-4 gap-4 p-4 bg-white dark:bg-zinc-800 border dark:border-0 shadow rounded-lg relative overflow-hidden"
              ref={provided.innerRef}
              {...provided.droppableProps}
              onMouseOver={handleDragOver}
              onMouseLeave={handleDragLeave}
            >
              {boxes.map((box, index) => (
                <Draggable key={box.id} draggableId={box.id} index={index}>
                  {(provided) => (
                    <div
                      className="bg-white shadow-lg border dark:border-0 dark:bg-zinc-700 p-4 rounded-md h-[200px]"
                      ref={provided.innerRef}
                      {...provided.draggableProps}
                      {...provided.dragHandleProps}
                    >
                      {box.content}
                    </div>
                  )}
                </Draggable>
              ))}
              {isDraggingOver && (
                <div
                  className="absolute inset-0 border-2 border-dashed border-slate-300 dark:border-slate-500 rounded-lg pointer-events-none"
                  style={{ zIndex: 9999 }}
                ></div>
              )}
            </div>
          )}
        </Droppable>
      </DragDropContext>
    </div>
  );
};

export default DragDrop;
