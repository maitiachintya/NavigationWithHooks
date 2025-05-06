import {View, Text, SafeAreaView} from 'react-native';
import React from 'react';
import {Fonts} from '../../themes/Fonts';

const index = () => {
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: 'blue'}}>
      <Text
        style={{
          fontSize: 16,
          textAlign: 'center',
          fontFamily: Fonts.Poppins_Bold,
          color: 'white',
          marginTop: 30,
        }}>
        Settings Page
      </Text>
    </SafeAreaView>
  );
};

export default index;
