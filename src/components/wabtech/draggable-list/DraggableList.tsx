"use client";

import React from "react";
import { useState } from "react";
import { DragDropContext, Droppable } from "react-beautiful-dnd";
import ListItem from "./ListItem";

interface DraggableListProps {
  items: React.ReactNode[];
}

const DraggableList: React.FC<DraggableListProps> = ({ items }) => {
  const [stateItems, setItems] = useState(items);

  const handleDragEnd = (result: any) => {
    if (!result.destination) return;

    const updatedItems = Array.from(stateItems);
    const [removed] = updatedItems.splice(result.source.index, 1);
    updatedItems.splice(result.destination.index, 0, removed);

    setItems(updatedItems);
  };

  return (
    <DragDropContext onDragEnd={handleDragEnd}>
      <Droppable droppableId="items">
        {(provided) => (
          <div ref={provided.innerRef} {...provided.droppableProps}>
            {stateItems.map((item, index) => (
              <ListItem key={index} id={index.toString()} index={index}>
                {item}
              </ListItem>
            ))}
            {provided.placeholder}
          </div>
        )}
      </Droppable>
    </DragDropContext>
  );
};

export default DraggableList;
