import {View, Platform, TouchableOpacity, Image} from 'react-native';
import {useLinkBuilder, useTheme} from '@react-navigation/native';
import {Text, PlatformPressable} from '@react-navigation/elements';
import {
  BottomTabBarProps,
  createBottomTabNavigator,
} from '@react-navigation/bottom-tabs';
import {FC} from 'react';
import { Colors } from '../../themes/Colors';

const TabBar: FC<BottomTabBarProps> = ({state, descriptors, navigation}) => {
  const {colors} = useTheme();
  const {buildHref} = useLinkBuilder();

  return (
    <View
      style={{
        flexDirection: 'row',
        backgroundColor: Colors.whitegrey,
        height: 70,
        justifyContent: 'space-evenly',
        alignItems: 'center',
        shadowColor: 'black',
        elevation: 8,
        shadowOffset: {
          width: 0,
          height: 4,
        },
        shadowOpacity: 1,
        shadowRadius: 10,
      }}>
      {state.routes.map((route, index) => {
        const {options} = descriptors[route.key];
        const label: any =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name;

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name, route.params);
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: 'tabLongPress',
            target: route.key,
          });
        };

        const Icons: any = {
          Home: 'https://cdn-icons-png.flaticon.com/128/11658/11658161.png',
          History: 'https://cdn-icons-png.flaticon.com/128/11664/11664210.png',
          Cards: 'https://cdn-icons-png.flaticon.com/128/2169/2169874.png',
          Profile: 'https://cdn-icons-png.flaticon.com/128/15181/15181400.png',
        };

        return (
          <TouchableOpacity
            key={index}
            accessibilityState={isFocused ? {selected: true} : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarButtonTestID}
            // href={buildHref(route.name, route.params)}
            onPress={onPress}
            onLongPress={onLongPress}
            style={{
              height: '100%',
              width: 80,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Image
              source={{uri: Icons[label]}}
              style={{
                height: 25,
                width: 25,
                tintColor: isFocused ? '#3357A2' : '#94A7BB',
                resizeMode: 'contain',
                margin: 5,
              }}
            />

            <Text style={{color: isFocused ? '#3357A2' : '#94A7BB'}}>
              {label}
            </Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

export default TabBar;
