// taskReducer.ts

// Task type definition
type Task = {
  id: number;
  title: string;
  completed: boolean;
};

// State type definition
type State = {
  tasks: Task[];
  taskCount: number;
};

// Action type definition
type Action =
  | { type: 'ADD_TASK'; payload: Task }
  | { type: 'DELETE_TASK'; payload: number }  // Assuming payload is the task ID
  | { type: 'TOGGLE_TASK'; payload: number }; // Assuming payload is the task ID

export const taskReducer = (state: State, action: Action): State => {
  switch (action.type) {
    case 'ADD_TASK':
      return {
        ...state,
        tasks: [...state.tasks, action.payload],
        taskCount: state.taskCount + 1,
      };
    case 'DELETE_TASK':
      return {
        ...state,
        tasks: state.tasks.filter((task: Task) => task.id !== action.payload),
        taskCount: state.taskCount - 1,
      };
    case 'TOGGLE_TASK':
      return {
        ...state,
        tasks: state.tasks.map((task: Task) =>
          task.id === action.payload ? { ...task, completed: !task.completed } : task
        ),
      };
    default:
      return state;
  }
};
