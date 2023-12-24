import {
  BottomTabBarProps,
  BottomTabNavigationOptions,
  createBottomTabNavigator,
} from '@react-navigation/bottom-tabs';
import {Icon, Text} from '@rneui/themed';
import React, {FunctionComponent, useEffect} from 'react';
import {StyleSheet, View} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from 'react-native-reanimated';

import {routes} from '../../constants';
import {Home, History, Notification, Profile, QR} from '../../screens/main';

const BottomTabs = createBottomTabNavigator();

const screenOptions: BottomTabNavigationOptions = {
  headerShown: false,

  tabBarShowLabel: true,
};

const choseIcon = (route: routes) => {
  switch (route) {
    case routes.HOME:
      return 'home';
    case routes.HISTORY:
      return 'reload-circle';
    case routes.NOTIFICATION:
      return 'notifications';
    case routes.PROFILE:
      return 'person';
    case routes.QR:
      return 'qr-code-outline';
    default:
      return 'home';
  }
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    height: 60,
    borderTopColor: '#FDEBFF',
    borderTopWidth: 0.5,
    backgroundColor: '#FDEBFF',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
 
});

const AnimatedTouch = Animated.createAnimatedComponent(TouchableOpacity);

const BottomNavigator: FunctionComponent = () => {
  const Tab = ({navigation, descriptors, state}: BottomTabBarProps) => {
    const progressGrowth = useSharedValue(0);

    //use effect will call when change tab
    useEffect(() => {
      progressGrowth.value = withSpring(-20, {
        damping: 200,
        stiffness: 400,
      });

      // before change tab, reset progressGrowth
      return () => {
        progressGrowth.value = 0;
      };
    }, [state.index]);

    return (
      <View style={styles.container}>
        {state.routes.map((route, index) => {
          const {options} = descriptors[route.key];
          const isFocused = state.index === index;

          const onPress = () => {
            const event = navigation.emit({
              type: 'tabPress',
              target: route.key,
              canPreventDefault: true,
            });
            if (!isFocused && !event.defaultPrevented) {
              navigation.navigate({
                name: route.name,
                merge: true,
              } as any);
            }
          };

          const onLongPress = () => {
            navigation.emit({
              type: 'tabLongPress',
              target: route.key,
            });
          };

          const animatedStyle = useAnimatedStyle(() => {
            const translateY = isFocused ? progressGrowth.value : 0;
            return {
              transform: [{translateY: translateY}],
            };
          }, []);

          return (
            <AnimatedTouch
              key={index}
              accessibilityRole="button"
              accessibilityState={isFocused ? {selected: true} : {}}
              accessibilityLabel={options.tabBarAccessibilityLabel}
              testID={options.tabBarTestID}
              onPress={onPress}
              onLongPress={onLongPress}>
              <Icon
                name={choseIcon(route.name as routes)}
                type="ionicon"
                color={isFocused ? '#64026D' : 'gray'}
                size={30}
              />
            </AnimatedTouch>
          );
        })}
      </View>
    );
  };

  return (
    <BottomTabs.Navigator
      screenOptions={screenOptions}
      tabBar={(props: BottomTabBarProps) => <Tab {...props} />}>
      <BottomTabs.Screen name={routes.HOME} component={Home} />
      <BottomTabs.Screen name={routes.HISTORY} component={History} />
      <BottomTabs.Screen name={routes.QR} component={QR} />
      <BottomTabs.Screen name={routes.NOTIFICATION} component={Notification} />
      <BottomTabs.Screen name={routes.PROFILE} component={Profile} />
    </BottomTabs.Navigator>
  );
};

export default BottomNavigator;
