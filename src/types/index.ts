// export type RootStackParamList = {
//   Home: undefined; // No params for Home screen
//   History: undefined;
//   Cards: undefined;
//   Profile: { userId: number }; // Profile screen requires 'userId' param
// };


// // types.ts or wherever your param list is defined
// export type RootStackParamList = {
//   Home: undefined;
//   Details: { userId: number };  // Define the parameter for Details screen
// };

// export type RootStackParamList = {
//   MainTabs: undefined;
//   Detail: { userId: number };
// };

// export type RootStackParamList = {
//   MainTabs: undefined;
//   Detail: { userId: number };
// }

export type TopTabParamList = {
  Home: undefined;
  Details: { userId: number };
};

// types.ts or navigation/types.ts
export type RootStackParamList = {
  Home: undefined;
  Profile: { userId: number };
  Settings: undefined;
  Drawer: undefined; 
  TopTab: undefined;
};

export type RootTabParamList = {
  Home: undefined; // Home screen does not need parameters
  Profile: { userId: number }; // Profile screen expects a `userId` parameter
  Settings: undefined; // Settings screen does not need parameters
};
