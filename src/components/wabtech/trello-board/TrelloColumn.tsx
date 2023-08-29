"use client";

import React, { useState } from "react";
import { Droppable } from "react-beautiful-dnd";
import TrelloCard from "./TrelloCard";
import { RxCardStackPlus } from "react-icons/rx";
import { FiChevronLeft } from "react-icons/fi";

interface CardData {
  id: string;
  content: React.ReactNode;
}

interface ColumnProps {
  id: string;
  index: number;
  title: string;
  cards: CardData[];
}

const TrelloColumn: React.FC<ColumnProps> = ({ id, index, title, cards }) => {
  const [isCollapsed, setIsCollapsed] = useState(false);

  const handleCollapseToggle = () => {
    setIsCollapsed((prevState) => !prevState);
  };

  return (
    <div
      className={`max-w-xs bg-white shadow border dark:border-0 dark:bg-zinc-800 rounded-md px-4 py-2 relative tran-all`}
      style={{
        width: isCollapsed ? "50px" : "100%",
        height: isCollapsed ? "350px" : "auto",
      }}
    >
      <div className="flex items-center justify-between mb-2">
        <h3 className="text-xl font-semibold text-zinc-400">
          {!isCollapsed && title}
        </h3>
        {isCollapsed && (
          <div className=" -rotate-90 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
            <h3 className="text-zinc-400 text-xl font-semibold whitespace-nowrap">
              {title}
            </h3>
          </div>
        )}
        <button
          className={`absolute top-2 right-4 bg-transparent hover:bg-slate-200 dark:hover:bg-zinc-600 p-2 rounded-full ${
            isCollapsed && "!right-1 bg-slate-100 dark:bg-zinc-600"
          }`}
          onClick={handleCollapseToggle}
        >
          <span className="text-slate-500 dark:text-slate-200 opacity-70">
            <FiChevronLeft
              className={`text-2xl ${isCollapsed ? "rotate-180" : ""}`}
            />
          </span>
        </button>
      </div>
      {!isCollapsed && (
        <Droppable droppableId={id}>
          {(provided, snapshot) => (
            <div
              ref={provided.innerRef}
              {...provided.droppableProps}
              className={`min-h-40 ${
                snapshot.isDraggingOver
                  ? "border border-dashed border-zinc-300 dark:border-zinc-400 rounded-md"
                  : ""
              }`}
            >
              <div className="mt-8">
                {cards.map((card, index) => (
                  <TrelloCard key={card.id} id={card.id} index={index}>
                    {card.content}
                  </TrelloCard>
                ))}
              </div>
              {provided.placeholder}
              {cards.length === 0 && !snapshot.isDraggingOver && (
                <div className="mt-20 text-center flex flex-col gap-y-2 items-center justify-center">
                  <h1 className="text-zinc-200 text-2xl opacity-50">
                    Drop cards here
                  </h1>
                  <span>
                    <RxCardStackPlus className="text-5xl text-zinc-200 opacity-40" />
                  </span>
                </div>
              )}
            </div>
          )}
        </Droppable>
      )}
    </div>
  );
};

export default TrelloColumn;
