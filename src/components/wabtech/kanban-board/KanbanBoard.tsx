"use client";

import React, { useState } from "react";
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";
import { FiEdit, FiTrash } from "react-icons/fi";

interface Task {
  id: string;
  content: string;
}

interface Column {
  id: string;
  title: string;
  taskIds: string[];
}

const initialColumns: Column[] = [
  {
    id: "column-1",
    title: "To Do",
    taskIds: ["task-1", "task-2", "task-3"],
  },
  {
    id: "column-2",
    title: "In Progress",
    taskIds: ["task-4", "task-5"],
  },
  {
    id: "column-3",
    title: "Done",
    taskIds: ["task-6", "task-7", "task-8"],
  },
];

const initialTasks: Task[] = [
  { id: "task-1", content: "Task 1" },
  { id: "task-2", content: "Task 2" },
  { id: "task-3", content: "Task 3" },
  { id: "task-4", content: "Task 4" },
  { id: "task-5", content: "Task 5" },
  { id: "task-6", content: "Task 6" },
  { id: "task-7", content: "Task 7" },
  { id: "task-8", content: "Task 8" },
];

const KanbanBoard: React.FC = () => {
  const [columns, setColumns] = useState<{ [key: string]: Column }>(
    initialColumns.reduce((obj, column) => {
      obj[column.id] = column;
      return obj;
    }, {} as { [key: string]: Column })
  );

  const [tasks, setTasks] = useState<Task[]>(initialTasks);

  const [editingBoard, setEditingBoard] = useState<string | null>(null);
  const [newBoardTitle, setNewBoardTitle] = useState("");

  const [editingTask, setEditingTask] = useState<string | null>(null);
  const [newTaskContent, setNewTaskContent] = useState("");

  const [addingBoard, setAddingBoard] = useState(false);
  const [addingTask, setAddingTask] = useState<{ columnId: string } | null>(
    null
  );

  // ------------------------------------------------------------DRAG FUNCTIONALITY--------------------------------------------
  const onDragEnd = (result: any) => {
    const { destination, source, draggableId, type } = result;

    if (!destination) {
      // If there's no valid destination, the drag event is cancelled
      return;
    }

    if (type === "COLUMN") {
      // Dragging a board (column)
      if (destination.index === source.index) {
        // If the board is dropped in the same position, no update is needed
        return;
      }

      // Reorder the columns based on the drag and drop
      const newColumnOrder = Array.from(Object.values(columns));
      const [removedColumn] = newColumnOrder.splice(source.index, 1);
      newColumnOrder.splice(destination.index, 0, removedColumn);

      // Create a new object with updated column order
      const newColumns: Record<string, Column> = {};
      newColumnOrder.forEach((column) => {
        newColumns[column.id] = column;
      });

      // Update the state with the new column order
      setColumns(newColumns);
      return;
    }

    const startColumn = columns[source.droppableId];
    const finishColumn = columns[destination.droppableId];

    if (startColumn === finishColumn) {
      // If the task is moved within the same column
      const newTaskIds = Array.from(startColumn.taskIds);
      newTaskIds.splice(source.index, 1);
      newTaskIds.splice(destination.index, 0, draggableId);

      // Create a new column with the updated task order
      const newColumn: Column = {
        ...startColumn,
        taskIds: newTaskIds,
      };

      // Update the state with the new column
      setColumns({
        ...columns,
        [newColumn.id]: newColumn,
      });
    } else {
      // If the task is moved to a different column
      const startTaskIds = Array.from(startColumn.taskIds);
      startTaskIds.splice(source.index, 1);

      const finishTaskIds = Array.from(finishColumn.taskIds);
      finishTaskIds.splice(destination.index, 0, draggableId);

      // Create new start and finish columns with updated task orders
      const newStartColumn: Column = {
        ...startColumn,
        taskIds: startTaskIds,
      };

      const newFinishColumn: Column = {
        ...finishColumn,
        taskIds: finishTaskIds,
      };

      // Update the state with the new start and finish columns
      setColumns({
        ...columns,
        [newStartColumn.id]: newStartColumn,
        [newFinishColumn.id]: newFinishColumn,
      });
    }
  };

  // ----------------------------------------------------------------BOARDS---------------------------------------------------
  // Function to handle adding a new board (column)
  const handleAddBoard = () => {
    setAddingBoard(true);
    setNewBoardTitle("");
  };

  // Function to handle changes in the new board title input field
  const handleBoardInputChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setNewBoardTitle(event.target.value);
  };

  // Function to handle key events (e.g., Enter, Escape) in the new board title input field
  const handleBoardInputKeyDown = (
    event: React.KeyboardEvent<HTMLInputElement>
  ) => {
    // If Enter key is pressed, check if it's an update or new board creation
    if (event.key === "Enter") {
      // Editing an existing board (column)
      if (editingBoard) {
        const updatedColumns = { ...columns };
        updatedColumns[editingBoard].title = newBoardTitle.trim();
        setColumns(updatedColumns);
        setEditingBoard(null);
      } else if (newBoardTitle.trim() !== "") {
        // Adding a new board (column)
        const newColumnId = `column-${Date.now()}`;
        const newColumn: Column = {
          id: newColumnId,
          title: newBoardTitle.trim(),
          taskIds: [],
        };
        setColumns((prevColumns) => ({
          ...prevColumns,
          [newColumnId]: newColumn,
        }));
        setAddingBoard(false);
        setNewBoardTitle("");
      }
      // If Escape key is pressed, cancel adding/editing a board
    } else if (event.key === "Escape") {
      setAddingBoard(false);
      setNewBoardTitle("");
    }
  };

  // Function to handle editing an existing board (column)
  const handleEditBoard = (columnId: string) => {
    setEditingBoard(columnId);
    setNewBoardTitle(columns[columnId].title);
  };

  // ----------------------------------------------------------------TASKS---------------------------------------------------
  // Function to handle adding a new task to a column
  const handleAddTask = (columnId: string) => {
    setAddingTask({ columnId });
  };

  // Function to handle changes in the new task content input field
  const handleTaskInputChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setNewTaskContent(event.target.value);
  };

  // Function to handle key events (e.g., Enter, Escape) in the new task content input field
  const handleTaskInputKeyDown = (
    event: React.KeyboardEvent<HTMLInputElement>,
    taskId?: string
  ) => {
    // If Enter key is pressed and there's an edited task, update the task content
    if (event.key === "Enter") {
      if (editingTask && newTaskContent.trim() !== "") {
        const updatedTasks = tasks.map((task) =>
          task.id === editingTask ? { ...task, content: newTaskContent } : task
        );
        setTasks(updatedTasks);
        setEditingTask(null);
      } else if (newTaskContent.trim() !== "") {
        // If Enter key is pressed and it's a new task, add the task to the column
        const newTaskId = `task-${Date.now()}`;
        const newTask: Task = {
          id: newTaskId,
          content: newTaskContent.trim(),
        };
        const updatedColumns = { ...columns };
        console.log(updatedColumns);
        updatedColumns[addingTask!.columnId].taskIds.push(newTaskId);
        setColumns(updatedColumns);
        setTasks((prevTasks) => [...prevTasks, newTask]);
        setAddingTask(null);
        setNewTaskContent("");
      }
      setNewTaskContent("");
      // If Escape key is pressed, cancel adding/editing a task
    } else if (event.key === "Escape") {
      setAddingTask(null);
      setNewTaskContent("");
    }
  };

  // Function to handle editing an existing task
  const handleEditTask = (taskId: string) => {
    setEditingTask(taskId);
    setNewTaskContent(tasks.find((task) => task.id === taskId)?.content || "");
  };

  // Function to handle deleting a task from all columns it's in
  const handleDeleteTask = (taskId: string) => {
    setTasks((prevTasks) => prevTasks.filter((task) => task.id !== taskId));
    setColumns((prevColumns) => {
      const updatedColumns = { ...prevColumns };
      Object.keys(updatedColumns).forEach((colId) => {
        const column = updatedColumns[colId];
        column.taskIds = column.taskIds.filter((id) => id !== taskId);
      });
      return updatedColumns;
    });
  };

  // Function to handle deleting a board (column) and its tasks
  const handleDeleteBoard = (boardId: string) => {
    setColumns((prevColumns) => {
      const updatedColumns = { ...prevColumns };
      delete updatedColumns[boardId];
      return updatedColumns;
    });
  };

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <Droppable droppableId="board" type="COLUMN" direction="horizontal">
        {(provided) => (
          <div
            {...provided.droppableProps}
            ref={provided.innerRef}
            className="flex justify-center md:justify-start mt-8 bg-white border dark:border-0 dark:bg-zinc-700 p-8 flex-wrap gap-y-4 overflow-hidden rounded-lg"
          >
            {Object.values(columns).map((column, columnIndex) => (
              <div className="flex flex-col w-[350px] mx-4" key={column.id}>
                <Draggable draggableId={column.id} index={columnIndex}>
                  {(provided) => (
                    <div
                      {...provided.draggableProps}
                      ref={provided.innerRef}
                      className="rounded-lg p-4 bg-white border dark:border-0 dark:bg-zinc-800 shadow min-h-[400px]"
                    >
                      <div
                        {...provided.dragHandleProps}
                        className="text-xl font-semibold mb-4 cursor-move text-zinc-400"
                      >
                        {editingBoard === column.id ? (
                          <input
                            autoFocus
                            value={newBoardTitle}
                            onChange={handleBoardInputChange}
                            onKeyDown={handleBoardInputKeyDown}
                            placeholder="Board title"
                            className="rounded-lg p-2 mt-2 w-full bg-white shadow-sm border dark:border-0 dark:bg-zinc-600 outline-none focus:ring-2 focus:!border-transparent focus:ring-indigo-500"
                            onBlur={() => setEditingBoard(null)}
                          />
                        ) : (
                          <div
                            className="flex items-center justify-between"
                            {...provided.dragHandleProps}
                          >
                            <div className="text-xl font-semibold">
                              {column.title}
                            </div>
                            <div className="flex items-center">
                              <div className="p-2 group cursor-pointer">
                                <FiEdit
                                  className="text-zinc-500 dark:text-zinc-400 group-hover:text-zinc-600 dark:group-hover:text-white"
                                  onClick={() => handleEditBoard(column.id)}
                                />
                              </div>
                              <div className="p-2 group cursor-pointer">
                                <FiTrash
                                  className="text-zinc-500 dark:text-zinc-400 group-hover:text-zinc-600 dark:group-hover:text-white"
                                  onClick={() => handleDeleteBoard(column.id)}
                                />
                              </div>
                            </div>
                          </div>
                        )}
                      </div>
                      <Droppable droppableId={column.id} type="TASK">
                        {(provided, snapshot) => (
                          <div
                            ref={provided.innerRef}
                            className={`flex flex-col space-y-2 ${
                              snapshot.isDraggingOver
                                ? "border border-dashed border-zinc-400 rounded-md"
                                : ""
                            }`}
                          >
                            {column.taskIds.map((taskId, index) => {
                              const task = tasks.find(
                                (task) => task.id === taskId
                              );
                              return (
                                <Draggable
                                  key={task!.id}
                                  draggableId={task!.id}
                                  index={index}
                                >
                                  {(provided) => (
                                    <div
                                      {...provided.draggableProps}
                                      ref={provided.innerRef}
                                      className="bg-white border dark:border-0 dark:bg-zinc-700 p-4 rounded-md shadow"
                                    >
                                      {editingTask === task!.id ? (
                                        <input
                                          type="text"
                                          value={newTaskContent}
                                          onChange={handleTaskInputChange}
                                          onKeyDown={(event) =>
                                            handleTaskInputKeyDown(
                                              event,
                                              task!.id
                                            )
                                          }
                                          onBlur={() => {
                                            setEditingTask(null);
                                            setNewTaskContent("");
                                          }}
                                          autoFocus
                                          placeholder="Add new task..."
                                          className="rounded-lg p-2 w-full bg-white border dark:border-0 shadow-sm dark:bg-zinc-600 outline-none focus:ring-2 focus:!border-transparent focus:ring-indigo-500"
                                        />
                                      ) : (
                                        <div
                                          className="flex items-center justify-between"
                                          {...provided.dragHandleProps}
                                        >
                                          {task!.content}
                                          <div className="flex items-center gap-x-2">
                                            <div className="cursor-pointer p-1 group">
                                              <FiEdit
                                                className=" text-zinc-500 dark:text-zinc-400 group-hover:text-zinc-600  dark:group-hover:text-zinc-100"
                                                onClick={() =>
                                                  handleEditTask(task!.id)
                                                }
                                              />
                                            </div>
                                            <div className="cursor-pointer p-1 group">
                                              <FiTrash
                                                className=" text-zinc-500 dark:text-zinc-400 group-hover:text-zinc-600  dark:group-hover:text-zinc-100"
                                                onClick={() =>
                                                  handleDeleteTask(task!.id)
                                                }
                                              />
                                            </div>
                                          </div>
                                        </div>
                                      )}
                                    </div>
                                  )}
                                </Draggable>
                              );
                            })}
                            {provided.placeholder}
                          </div>
                        )}
                      </Droppable>

                      {addingTask && addingTask.columnId === column.id ? (
                        <input
                          type="text"
                          value={newTaskContent}
                          onChange={handleTaskInputChange}
                          onKeyDown={handleTaskInputKeyDown}
                          onBlur={() => setAddingTask(null)}
                          autoFocus
                          placeholder="Add new task..."
                          className="rounded-lg p-2 mt-2 w-full bg-white shadow-sm border dark:bg-zinc-600 outline-none focus:!border-transparent focus:ring-2 focus:ring-indigo-500"
                        />
                      ) : (
                        <button
                          onClick={() => handleAddTask(column.id)}
                          className="py-2 w-full mt-3 rounded-lg text-gray-500 dark:text-gray-300 hover:text-gray-600 dark:hover:text-gray-100 border border-zinc-300 dark:border-zinc-500 border-dashed"
                        >
                          + Add a task
                        </button>
                      )}
                    </div>
                  )}
                </Draggable>
              </div>
            ))}

            {addingBoard ? (
              <div className="flex flex-col w-[350px] mx-4">
                <div className="rounded-lg p-4 bg-white dark:bg-zinc-800 shadow">
                  <input
                    autoFocus
                    value={newBoardTitle}
                    onChange={(e) => setNewBoardTitle(e.target.value)}
                    onKeyDown={handleBoardInputKeyDown}
                    placeholder="Board title"
                    className="rounded-lg p-2 mt-2 w-full dark:bg-zinc-600 outline-none focus:ring-2 focus:ring-indigo-500"
                    onBlur={() => setAddingBoard(false)}
                  />
                </div>
              </div>
            ) : (
              <button
                onClick={handleAddBoard}
                className="rounded-lg bg-[#0bab7c] text-white shadow-lg shadow-[#0bab7c]/50 p-2 mx-4 h-fit w-fit"
              >
                + Add board
              </button>
            )}

            {provided.placeholder}
          </div>
        )}
      </Droppable>
    </DragDropContext>
  );
};

export default KanbanBoard;
