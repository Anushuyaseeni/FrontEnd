import React, {useRef} from 'react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import FIcon from 'react-native-vector-icons/Foundation';
import IonIcon from 'react-native-vector-icons/Ionicons';
import Home from '../components/Home';
import CashBook from '../components/bookDisplay/cashBook';
import Expenses from '../components/bookDisplay/expenses';
import Category from '../components/category/category';
import Settings from '../components/settings/Setting';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {View, Text, Animated, Easing} from 'react-native';

const TabNavigation = () => {
  const Tab = createBottomTabNavigator();
  // fadeAnim will be used as the value for opacity. Initial Value: 0
  const fadeAnim = useRef(new Animated.Value(0)).current;
  const animVal = useRef(new Animated.Value(0)).current;

  const fadeIn = () => {
    // console.log('dnewiewqdoiwendio');
    Animated.loop(
      // runs the animation array in sequence
      Animated.sequence([
        // shift element to the left by 2 units
        Animated.timing(fadeAnim, {
          toValue: -10,
          duration: 600,
          useNativeDriver: true,
        }),
        // shift element to the right by 2 units
        Animated.timing(fadeAnim, {
          toValue: 0,
          duration: 600,
          useNativeDriver: true,
        }),
        // bring the element back to its original position
        Animated.timing(fadeAnim, {
          toValue: -10,
          duration: 600,
          useNativeDriver: true,
        }),
      ]),
      // loops the above animation config 2 times
      {iterations: 1},
    ).start();
  };

  const parallelAnim = () => {
    Animated.parallel([
      Animated.timing(animVal,{
        toValue:-1,
        duration:1000,
        useNativeDriver:true
      }),
      Animated.timing(animVal,{
        toValue:0,
        duration:1000,
        useNativeDriver:true
      })
    ]),{iterations:1}
  }

  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        headerShown: false,
        tabBarStyle: {
          backgroundColor: '#7FC4DD',
          borderRadius: 25,
          height: 80,
          width: '100%',
          borderWidth: 7,
          marginBottom: -20,
          borderColor: '#7FC4DD',
        },
        tabBarActiveTintColor: '#0B2947',
        tabBarInactiveTintColor: '#f0eded',
        tabBarShowLabel: true,
        tabBarLabelPosition: 'below-icon',
        tabBarIcon: ({color}) => {
          let icon;
          if (route.name == 'Graph') {
            icon = 'graph-pie';
            return (
              <Animated.View style={{transform: [{translateX: animVal}]}}>
                <FIcon name={icon} color={color} size={27} style={{marginLeft:-20}} />
              </Animated.View>
            );
          } else if (route.name == 'Setting') {
            icon = 'ios-settings-outline';
            return (
              // <Animated.View style={{transform: [{translateX: fadeAnim}]}}>
                <IonIcon name={icon} color={color} size={25} />
              // </Animated.View>
            );
          } else if (route.name == 'Expenses') {
            icon = 'credit-card-plus-outline';
            return (
              <Icon
                name={icon}
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
            );
          } else if(route.name == 'Home'){
            icon = 'home'
            return (
              <Animated.View style={{transform: [{translateX: fadeAnim}]}}>
                <Icon name={icon} color={color} size={25} />
              </Animated.View>
            );
          } else if(route?.name == 'Category') {
            icon = 'view-grid-plus'
            return(
              <Icon name={icon} color={color} size={25}/>
            )
          }
        },
      })}
      initialRouteName="Home">
      <Tab.Screen name="Home" component={Home} listeners={({}) => ({ tabPress: e => { fadeIn(); }, focus: e => { fadeIn(); }, })} />
      <Tab.Screen name="Graph" component={CashBook} listeners={({}) => ({tabPress: e => {parallelAnim()}, focus: e => {parallelAnim()} })}/>
      <Tab.Screen name="Expenses" component={Expenses} />
      <Tab.Screen name="Category" component={Category} />
      <Tab.Screen name="Setting" component={Settings} />
    </Tab.Navigator>
  );
};

export default TabNavigation;
