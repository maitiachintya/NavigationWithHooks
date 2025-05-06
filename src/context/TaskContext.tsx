import React, { createContext, useReducer, useContext, ReactNode } from 'react';
import { taskReducer } from '../recuder/taskReducer';

// Define types for the context
type Task = {
  id: number;
  title: string;
  completed: boolean;
};

type State = {
  tasks: Task[];
  taskCount: number;
};

type Action =
  | { type: 'ADD_TASK'; payload: Task }
  | { type: 'DELETE_TASK'; payload: number }
  | { type: 'TOGGLE_TASK'; payload: number };

// Define the context type
type TaskContextType = {
  state: State;
  dispatch: React.Dispatch<Action>;
};

// Create the TaskContext with a default value (it should match the context type)
const TaskContext = createContext<TaskContextType | undefined>(undefined);

interface TaskProviderProps {
  children: ReactNode;
}

export const TaskProvider = ({ children }: TaskProviderProps) => {
  const [state, dispatch] = useReducer(taskReducer, { tasks: [], taskCount: 0 });

  return (
    <TaskContext.Provider value={{ state, dispatch }}>
      {children}
    </TaskContext.Provider>
  );
};

// Custom hook to use TaskContext
export const useTaskContext = (): TaskContextType => {
  const context = useContext(TaskContext);
  if (!context) {
    throw new Error('useTaskContext must be used within a TaskProvider');
  }
  return context;
};
