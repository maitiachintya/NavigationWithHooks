// Home.tsx
import React from 'react';
import { View, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack'; // adjust path as needed
import { RootStackParamList } from '../../types';

type HomeScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Home'>;

const Home = () => {
  const navigation = useNavigation<HomeScreenNavigationProp>();

  const navigateToProfile = () => {
    navigation.navigate('Profile', { userId: 123 }); // ✅ Now properly typed
  };

  return (
    <View>
      <Button title="Go to Profile" onPress={navigateToProfile} />
    </View>
  );
};

export default Home;
