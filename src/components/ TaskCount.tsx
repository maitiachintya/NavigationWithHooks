import React, { useMemo } from 'react';
import { Text, View } from 'react-native';
import { useTaskContext } from '../context/TaskContext';


const TaskCount = () => {
  const { state } = useTaskContext();
  const taskCount = useMemo(() => state.taskCount, [state.taskCount]);

  return (
    <View>
      <Text>Total Tasks: {taskCount}</Text>
    </View>
  );
};

export default TaskCount;
