import React, { useState, useRef, useCallback } from 'react';
import { TextInput, Button, View } from 'react-native';
import { useTaskContext } from '../context/TaskContext';

const TaskInput = () => {
  const [task, setTask] = useState('');
  // Explicitly type the ref to TextInput | null
  const inputRef = useRef<TextInput | null>(null);
  const { dispatch } = useTaskContext();

  const handleAddTask = useCallback(() => {
    if (task.trim()) {
      const newTask = { id: Date.now(), title: task, completed: false };
      dispatch({ type: 'ADD_TASK', payload: newTask });
      setTask('');
      // Check if inputRef.current is not null before calling clear
      if (inputRef.current) {
        inputRef.current.clear();
      }
    }
  }, [task, dispatch]);

  return (
    <View>
      <TextInput
        ref={inputRef}
        value={task}
        onChangeText={setTask}
        placeholder="Add a new task"
        style={{ borderBottomWidth: 1, marginBottom: 10 }}
      />
      <Button title="Add Task" onPress={handleAddTask} />
    </View>
  );
};

export default TaskInput;
