"use client";
import React, { useState } from "react";
import { DragDropContext, DropResult } from "react-beautiful-dnd";
import TrelloColumn from "./TrelloColumn";
import { FiBook } from "react-icons/fi";
import Link from "next/link";

interface CardData {
  id: string;
  content: React.ReactNode;
}

interface ColumnData {
  id: string;
  title: string;
  cards: CardData[];
}

const initialColumns: ColumnData[] = [
  {
    id: "column-1",
    title: "Todo",
    cards: [
      {
        id: "card-1",
        content: (
          <div className="flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-indigo-500"></span>
            <span>Buy groceries</span>
          </div>
        ),
      },
      {
        id: "card-2",
        content: (
          <div className="flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-indigo-500"></span>
            <span>Finish homework</span>
          </div>
        ),
      },
      {
        id: "card-3",
        content: (
          <div className="flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-indigo-500"></span>
            <span>Eat food</span>
          </div>
        ),
      },
      {
        id: "card-4",
        content: (
          <div className="flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-indigo-500"></span>
            <span>Do workouts</span>
          </div>
        ),
      },
    ],
  },
  {
    id: "column-2",
    title: "In Progress",
    cards: [
      {
        id: "card-5",
        content: (
          <div className="flex items-center gap-2">
            <FiBook />
            <Link href="/">Hello</Link>
          </div>
        ),
      },
      { id: "card-6", content: <div>Write an article</div> },
    ],
  },
  {
    id: "column-3",
    title: "Completed",
    cards: [
      { id: "card-7", content: <div>Go shopping</div> },
      { id: "card-8", content: <div>Watch a movie</div> },
    ],
  },
];

const Trello: React.FC = () => {
  const [columns, setColumns] = useState<ColumnData[]>(initialColumns);

  const handleDragEnd = (result: DropResult) => {
    const { source, destination, draggableId } = result;

    if (!destination) return;

    if (
      destination.droppableId === source.droppableId &&
      destination.index === source.index
    ) {
      // Card was not moved
      return;
    }

    const sourceColumn = columns.find((col) => col.id === source.droppableId);
    const destinationColumn = columns.find(
      (col) => col.id === destination.droppableId
    );

    if (!sourceColumn || !destinationColumn) return;

    if (source.droppableId === destination.droppableId) {
      // Card is moved within the same column
      const newCards = Array.from(sourceColumn.cards);
      const [removed] = newCards.splice(source.index, 1);
      newCards.splice(destination.index, 0, removed);

      const newColumn = {
        ...sourceColumn,
        cards: newCards,
      };

      const newColumns = columns.map((col) =>
        col.id === newColumn.id ? newColumn : col
      );
      setColumns(newColumns);
    } else {
      // Card is moved to a different column
      const sourceCards = Array.from(sourceColumn.cards);
      const destCards = Array.from(destinationColumn.cards);

      const [removed] = sourceCards.splice(source.index, 1);
      destCards.splice(destination.index, 0, removed);

      const newSourceColumn = {
        ...sourceColumn,
        cards: sourceCards,
      };

      const newDestColumn = {
        ...destinationColumn,
        cards: destCards,
      };

      const newColumns = columns.map((col) =>
        col.id === newSourceColumn.id
          ? newSourceColumn
          : col.id === newDestColumn.id
          ? newDestColumn
          : col
      );
      setColumns(newColumns);
    }
  };

  return (
    <DragDropContext onDragEnd={handleDragEnd}>
      <div className="flex flex-col md:flex-row bg-white border dark:border-0 dark:bg-zinc-700/80 gap-4 justify-center p-8 rounded-md">
        {columns.map((column, index) => (
          <TrelloColumn
            key={column.id}
            id={column.id}
            index={index}
            title={column.title}
            cards={column.cards}
          />
        ))}
      </div>
    </DragDropContext>
  );
};

export default Trello;
