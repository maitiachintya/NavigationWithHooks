// import React from 'react';
// import { View, Text } from 'react-native';
// import { RouteProp } from '@react-navigation/native';
// import { StackNavigationProp } from '@react-navigation/stack';
// import { RootStackParamList } from '../../types'; // Ensure the correct path to your types

// // Type for the route prop and navigation prop
// type DetailsScreenRouteProp = RouteProp<RootStackParamList, 'Details'>;
// type DetailsScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Details'>;

// type Props = {
//   route: DetailsScreenRouteProp;
//   navigation: DetailsScreenNavigationProp;
// };

// const Details: React.FC<Props> = ({ route, navigation }) => {
//   // Access route.params here
//   const { userId } = route.params;
  
//   return (
//     <View>
//       <Text>Details Screen</Text>
//       <Text>User ID: {userId}</Text>
//     </View>
//   );
// };

// export default Details;
