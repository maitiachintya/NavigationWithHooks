// App.tsx
import React from 'react';
import { NavigationContainer } from '@react-navigation/native'; // Adjust path as needed
import StackNavigator from './src/navigators/StackNavigator';

const App = () => {
  return (
    <NavigationContainer>
      <StackNavigator />
    </NavigationContainer>
  );
};

export default App;

// import React, {useEffect} from 'react';
// import {View, Text, SafeAreaView} from 'react-native';
// import TaskInput from './src/components/TaskInput';
// import TaskCount from './src/components/ TaskCount';
// import TaskList from './src/components/TaskList';
// import {TaskProvider, useTaskContext} from './src/context/TaskContext';

// const App = () => {
//   const {state} = useTaskContext();

//   useEffect(() => {
//     console.log('Task List Updated:', state.tasks);
//   }, [state.tasks]);

//   return (
//     <SafeAreaView style={{flex: 1, backgroundColor: "yellow", padding: 20}}>
//       <Text style={{fontSize: 24, textAlign: 'center', marginBottom: 20}}>Smart Task Manager</Text>
//       <TaskInput />
//       <TaskCount />
//       <TaskList />
//     </SafeAreaView>
//   );
// };

// export default () => (
//   <TaskProvider>
//     <App />
//   </TaskProvider>
// );
