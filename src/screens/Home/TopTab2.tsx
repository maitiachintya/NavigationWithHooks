import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const TopTab2 = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>This is Top Tab 2</Text>
    </View>
  );
};

export default TopTab2;

const styles = StyleSheet.create({
  container: {
    flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#FEF3E8'
  },
  text: {
    fontSize: 18, fontWeight: 'bold', color: '#333'
  }
});
