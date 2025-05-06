// Profile.tsx
import React from 'react';
import {Text, SafeAreaView} from 'react-native';
import {useRoute, RouteProp} from '@react-navigation/native';
import {RootStackParamList} from '../../types';
import {styles} from './styles';

type ProfileRouteProp = RouteProp<RootStackParamList, 'Profile'>;

const Profile = () => {
  const route = useRoute<ProfileRouteProp>();
  const userId = route.params?.userId ?? 'Guest';

  return (
    <SafeAreaView style={styles.fullScreen}>
      <Text style={styles.title}>Profile Screen</Text>
      <Text style={styles.value}>User ID: {userId}</Text>
    </SafeAreaView>
  );
};

export default Profile;
