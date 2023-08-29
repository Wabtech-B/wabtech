"use client";

import React from "react";
import { Draggable } from "react-beautiful-dnd";
import { CgLayoutGridSmall } from "react-icons/cg";

interface ListItemProps {
  id: string;
  index: number;
  children: React.ReactNode;
}

const ListItem: React.FC<ListItemProps> = ({ id, index, children }) => {
  return (
    <Draggable draggableId={id} index={index}>
      {(provided, snapshot) => (
        <div
          className={`bg-white border dark:border-0 shadow dark:bg-zinc-800 rounded-md my-2 flex items-center ${
            snapshot.isDragging ? "shadow-md" : ""
          }`}
          ref={provided.innerRef}
          {...provided.draggableProps}
        >
          <div
            {...provided.dragHandleProps}
            style={{
              cursor: "move",
              display: "inline-block",
              marginRight: "8px",
            }}
            className="p-3"
          >
            <span>
              <CgLayoutGridSmall className="text-2xl text-zinc-400 cursor-move" />
            </span>
          </div>
          <div>{children}</div>
        </div>
      )}
    </Draggable>
  );
};

export default ListItem;
