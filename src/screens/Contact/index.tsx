import {View, Text} from 'react-native';
import React from 'react';
import {Fonts} from '../../themes/Fonts';

const index = () => {
  return (
    <View style={{flex: 1, backgroundColor: 'brown'}}>
      <Text
        style={{fontSize: 16, textAlign: 'center', fontFamily: Fonts.Poppins_Bold, color: 'white'}}>
        Contact Page
      </Text>
    </View>
  );
};

export default index;
