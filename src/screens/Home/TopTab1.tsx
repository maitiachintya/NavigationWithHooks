import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const TopTab1 = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>This is Top Tab 1</Text>
    </View>
  );
};

export default TopTab1;

const styles = StyleSheet.create({
  container: {
    flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#E8F0FE'
  },
  text: {
    fontSize: 18, fontWeight: 'bold', color: '#333'
  }
});
