"use client";

import React from "react";
import { Draggable } from "react-beautiful-dnd";

interface CardProps {
  id: string;
  index: number;
  children: React.ReactNode;
}

const TrelloCard: React.FC<CardProps> = ({ id, index, children }) => {
  return (
    <Draggable draggableId={id} index={index}>
      {(provided, snapshot) => (
        <div
          className={`bg-white shadow border dark:border-0 dark:bg-zinc-700 p-4 rounded-md mb-2 ${
            snapshot.isDragging ? "shadow-md" : ""
          }`}
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
        >
          {children}
        </div>
      )}
    </Draggable>
  );
};

export default TrelloCard;
