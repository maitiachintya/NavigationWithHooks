import {View, Platform, TouchableOpacity, Image} from 'react-native';
import {useLinkBuilder, useTheme} from '@react-navigation/native';
import {Text, PlatformPressable} from '@react-navigation/elements';
import {
  BottomTabBarProps,
  createBottomTabNavigator,
} from '@react-navigation/bottom-tabs';
import {FC} from 'react';
import {
  DrawerContentScrollView,
  DrawerItem,
  DrawerItemList,
} from '@react-navigation/drawer';

const CustomDrawerContent = (props: any) => {
  // const {colors} = useTheme();
  // const {buildHref} = useLinkBuilder();

  // function ActiveSymbol({status = false}: {status: boolean}) {
  //   if (status) {
  //     return (
  //       <Image
  //         source={{
  //           uri: 'https://cdn-icons-png.flaticon.com/128/8265/8265301.png',
  //         }}
  //         style={{
  //           resizeMode: 'contain',
  //           tintColor: '#F6C075',
  //           height: 28,
  //           width: 28,
  //           position: 'absolute',
  //           right: 16,
  //           top: 4,
  //         }}
  //       />
  //     );
  //   } else {
  //     return null;
  //   }
  // }

  console.log('props -- ', props);

  return (
    // <View
    //   style={{
    //     flexDirection: 'row',
    //     backgroundColor: 'white',
    //     height: 70,
    //     justifyContent: 'space-evenly',
    //     alignItems: 'center',
    //     shadowColor: 'black',
    //     elevation: 8,
    //     shadowOffset: {
    //       width: 0,
    //       height: 4,
    //     },
    //     shadowOpacity: 1,
    //     shadowRadius: 10,
    //   }}>
    //   {state.routes.map((route, index) => {
    //     const {options} = descriptors[route.key];
    //     const label: any =
    //       options.tabBarLabel !== undefined
    //         ? options.tabBarLabel
    //         : options.title !== undefined
    //         ? options.title
    //         : route.name;

    //     const isFocused = state.index === index;

    //     const onPress = () => {
    //       const event = navigation.emit({
    //         type: 'tabPress',
    //         target: route.key,
    //         canPreventDefault: true,
    //       });

    //       if (!isFocused && !event.defaultPrevented) {
    //         navigation.navigate(route.name, route.params);
    //       }
    //     };

    //     const onLongPress = () => {
    //       navigation.emit({
    //         type: 'tabLongPress',
    //         target: route.key,
    //       });
    //     };

    //     const Icons: any = {
    //       Home: 'https://cdn-icons-png.flaticon.com/128/1946/1946436.png',
    //       Ranking: 'https://cdn-icons-png.flaticon.com/128/15710/15710227.png',
    //       Contests: 'https://cdn-icons-png.flaticon.com/128/3112/3112946.png',
    //       Messages: 'https://cdn-icons-png.flaticon.com/128/542/542689.png',
    //     };

    //     return (
    //       <TouchableOpacity
    //         key={index}
    //         accessibilityState={isFocused ? {selected: true} : {}}
    //         accessibilityLabel={options.tabBarAccessibilityLabel}
    //         testID={options.tabBarButtonTestID}
    //         // href={buildHref(route.name, route.params)}
    //         onPress={onPress}
    //         onLongPress={onLongPress}
    //         style={{
    //           height: '100%',
    //           width: 80,
    //           justifyContent: 'center',
    //           alignItems: 'center',
    //         }}>
    //         <Image
    //           source={{uri: Icons[label]}}
    //           style={{
    //             height: 25,
    //             width: 25,
    //             tintColor: isFocused ? '#41C78F' : '#D7D7D7',
    //             resizeMode: 'contain',
    //             margin: 5,
    //           }}
    //         />

    //         {<ActiveSymbol key={index} status={isFocused} />}
    //         <Text style={{color: isFocused ? '#41C78F' : '#D7D7D7'}}>
    //           {label}
    //         </Text>
    //       </TouchableOpacity>
    //     );
    //   })}
    // </View>

    <DrawerContentScrollView {...props}>
      <DrawerItemList {...props} />
    </DrawerContentScrollView>
  );
};

export default CustomDrawerContent;
