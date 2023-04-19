import React, {useRef} from 'react';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import FIcon from 'react-native-vector-icons/Foundation';
import IonIcon from 'react-native-vector-icons/Ionicons';
import Home from '../components/Home';
import CashBook from '../components/bookDisplay/cashBook';
import Expenses from '../components/bookDisplay/expenses';
import Category from '../components/category/category';
import Settings from '../components/settings/Setting';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {View, Text, Animated} from 'react-native';

const Tab = createBottomTabNavigator();

const TabNavigation = () => {
  // fadeAnim will be used as the value for opacity. Initial Value: 0
  const fadeAnim = useRef(new Animated.Value(0)).current;

  const fadeIn = () => {
    console.log('hiiiiiiiiiiiiiiiiii');
    // Will change fadeAnim value to 1 in 5 seconds
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 100,
      useNativeDriver: true,
    }).start();
  };

  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          backgroundColor: '#7FC4DD',
          borderRadius: 30,
          height: 80,
          width: '100%',
          borderWidth: 7,
          marginBottom: -19,
          borderColor: '#7FC4DD',
        },
        tabBarActiveTintColor: '#0B2947',
        tabBarInactiveTintColor: '#f0eded',
        tabBarShowLabel: true,
        tabBarLabelPosition: 'below-icon',
      }}
      initialRouteName="Home">
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarLabel: ({focused}) =>
            focused ? (
              <Text
                style={{marginBottom: 20, fontSize: 12, fontWeight: 'bold'}}>
                Home
              </Text>
            ) : (
              ''
            ),
          tabBarLabelStyle: {marginBottom: 20, fontWeight: 'bold'},
          tabBarIconStyle: {marginTop: 15},
          tabBarIcon: ({color, focused}) =>
            focused ? (
                <Icon
                  name="home"
                  color={color}
                  size={25}
                  style={{
                    borderRadius: 90,
                    height: 60,
                    width: 60,
                    backgroundColor: '#7FC4DD',
                    textAlign: 'center',
                    marginBottom:50,
                    paddingTop: 16,
                    shadowColor: 'black',
                    borderWidth: 8,
                    borderColor: '#ffffff',
                    position: 'relative',
                  }}
                />
            ) : (
              <Icon
                name="home"
                color={color}
                size={25}
                style={{marginTop: -30}}
                // onPress={fadeIn}
              />
            ),
        }}
      />
      <Tab.Screen
        name="Graph"
        component={CashBook}
        options={{
          tabBarLabel: ({focused}) =>
            focused ? (
              <Text
                style={{marginBottom: 20, fontSize: 12, fontWeight: 'bold'}}>
                Graph
              </Text>
            ) : (
              ''
            ),
          tabBarLabelStyle: {marginBottom: 20, fontWeight: 'bold'},
          tabBarIconStyle: {marginTop: 15},
          tabBarIcon: ({color, focused}) =>
            focused ? (
              <FIcon
                name="graph-pie"
                color={color}
                size={27}
                style={{
                  borderRadius: 90,
                  height: 60,
                  width: 60,
                  backgroundColor: '#7FC4DD',
                  textAlign: 'center',
                  marginBottom: 50,
                  paddingTop: 16,
                  shadowColor: 'black',
                  borderWidth: 8,
                  borderColor: '#ffffff',
                  position: 'relative',
                }}
              />
            ) : (
              <FIcon
                name="graph-pie"
                color={color}
                size={27}
                style={{marginTop: -30}}
              />
            ),
        }}
      />
      <Tab.Screen
        name="Expenses"
        component={Expenses}
        options={{
          tabBarLabel: ({focused}) =>
            focused ? (
              <Text
                style={{marginBottom: 20, fontSize: 12, fontWeight: 'bold'}}>
                Expenses
              </Text>
            ) : (
              ''
            ),
          tabBarIconStyle: {marginTop: 15},
          tabBarLabelStyle: {marginBottom: 20, fontWeight: 'bold'},
          tabBarIcon: ({color, focused}) =>
            focused ? (
              <Icon
                name="credit-card-plus-outline"
                color={color}
                size={25}
                style={{
                  borderRadius: 90,
                  height: 60,
                  width: 60,
                  backgroundColor: '#7FC4DD',
                  textAlign: 'center',
                  marginBottom: 50,
                  paddingTop: 16,
                  shadowColor: 'black',
                  borderWidth: 8,
                  borderColor: '#ffffff',
                  position: 'relative',
                }}
              />
            ) : (
              <Icon
                name="credit-card-plus-outline"
                color={color}
                size={25}
                style={{
                  marginTop: -30,
                }}
              />
            ),
        }}
      />
      <Tab.Screen
        name="Category"
        component={Category}
        options={{
          tabBarLabel: 'Category',
          tabBarLabel: ({focused}) =>
            focused ? (
              <Text
                style={{marginBottom: 20, fontSize: 12, fontWeight: 'bold'}}>
                Category
              </Text>
            ) : (
              ''
            ),
          tabBarLabelStyle: {marginBottom: 20, fontWeight: 'bold'},
          tabBarIconStyle: {marginTop: 15},
          tabBarIcon: ({color, focused}) =>
            focused ? (
              <Icon
                name="view-grid-plus"
                color={color}
                size={25}
                style={{
                  borderRadius: 90,
                  height: 60,
                  width: 60,
                  backgroundColor: '#7FC4DD',
                  textAlign: 'center',
                  marginBottom: 50,
                  paddingTop: 16,
                  shadowColor: 'black',
                  borderWidth: 8,
                  borderColor: '#ffffff',
                  position: 'relative',
                }}
              />
            ) : (
              <Icon
                name="view-grid-plus"
                color={color}
                size={25}
                style={{
                  marginTop: -30,
                }}
              />
            ),
        }}
      />
      <Tab.Screen
        name="Setting"
        component={Settings}
        options={{
          tabBarLabel: 'Setting',
          tabBarLabel: ({focused}) =>
            focused ? (
              <Text
                style={{marginBottom: 20, fontSize: 12, fontWeight: 'bold'}}>
                Setting
              </Text>
            ) : (
              ''
            ),
          tabBarLabelStyle: {marginBottom: 19, fontWeight: 'bold'},
          tabBarIconStyle: {marginTop: 15},
          tabBarIcon: ({color, focused}) =>
            focused ? (
              <IonIcon
                name="ios-settings-outline"
                color={color}
                size={25}
                style={{
                  borderRadius: 90,
                  height: 60,
                  width: 60,
                  backgroundColor: '#7FC4DD',
                  textAlign: 'center',
                  marginBottom: 50,
                  paddingTop: 16,
                  shadowColor: 'black',
                  borderWidth: 8,
                  borderColor: '#ffffff',
                  position: 'relative',
                }}
              />
            ) : (
              <IonIcon
                name="ios-settings-outline"
                color={color}
                size={25}
                style={{
                  marginTop: -30,
                }}
              />
            ),
        }}
      />
    </Tab.Navigator>
  );
};

export default TabNavigation;