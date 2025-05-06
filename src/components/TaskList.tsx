import React from 'react';
import { FlatList } from 'react-native';
import TaskItem from './TaskItem';
import { useTaskContext } from '../context/TaskContext';

const TaskList = () => {
  const { state, dispatch } = useTaskContext();

  const handleToggle = (id: number) => {
    dispatch({ type: 'TOGGLE_TASK', payload: id });
  };

  const handleDelete = (id: number) => {
    dispatch({ type: 'DELETE_TASK', payload: id });
  };

  return (
    <FlatList
      data={state.tasks}
      renderItem={({ item }) => (
        <TaskItem task={item} onToggle={handleToggle} onDelete={handleDelete} />
      )}
      keyExtractor={item => item.id.toString()}
    />
  );
};

export default TaskList;
