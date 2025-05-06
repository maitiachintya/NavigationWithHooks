import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

// Define types for the props
type Task = {
  id: number;
  title: string;
  completed: boolean;
};

type TaskItemProps = {
  task: Task;
  onToggle: (taskId: number) => void;
  onDelete: (taskId: number) => void;
};

const TaskItem: React.FC<TaskItemProps> = ({ task, onToggle, onDelete }) => {
  return (
    <View style={{ flexDirection: 'row', justifyContent: 'space-between', padding: 10 }}>
      <TouchableOpacity onPress={() => onToggle(task.id)}>
        <Text style={{ textDecorationLine: task.completed ? 'line-through' : 'none' }}>
          {task.title}
        </Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => onDelete(task.id)}>
        <Text>Delete</Text>
      </TouchableOpacity>
    </View>
  );
};

export default TaskItem;
