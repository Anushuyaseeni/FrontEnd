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
import {appColors} from '../theme/appColors';


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
          duration: 400,
          useNativeDriver: true,
        }),
        // shift element to the right by 2 units
        Animated.timing(fadeAnim, {
          toValue: 0,
          duration: 400,
          useNativeDriver: true,
        }),
        // bring the element back to its original position
        Animated.timing(fadeAnim, {
          toValue: -10,
          duration: 400,
          useNativeDriver: true,
        }),
      ]),
      // loops the above animation config 2 times
      {iterations: 1},
    ).start();
  };

  const parallelAnim = () => {
    Animated.loop(
      Animated.sequence([
        Animated.timing(animVal,{
          toValue:-10,
          duration:400,
          useNativeDriver:true
        }),
        Animated.timing(animVal,{
          toValue:0,
          duration:400,
          useNativeDriver:true
        }),
        Animated.timing(animVal,{
          toValue:-10,
          duration:400,
          useNativeDriver:true
        })
      ]),{iterations:1}
    ).start()
  }

  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        headerShown: false,
        tabBarStyle: {
          backgroundColor: appColors.primary,
          borderRadius: 25,
          height: 80,
          width: '100%',
          borderWidth: 7,
          marginBottom: -20,
          borderColor: appColors.primary,
        },
        tabBarActiveTintColor: appColors.secondary,
        tabBarInactiveTintColor: appColors.inactiveTintColor,
        tabBarShowLabel: true,
        tabBarLabelPosition: 'below-icon',
        tabBarIcon: ({color, focused}) => {
          let icon;
          if (route.name == 'Graph') {
            icon = focused ? 'ios-pie-chart' :   'ios-pie-chart-outline';
            return (
              <Animated.View style={{transform: [{translateX: animVal}]}}>
                <IonIcon name={icon} color={color} size={27} style={{marginLeft:-20}} />
              </Animated.View>
            );
          } else if (route.name == 'Setting') {
            icon = focused ? 'ios-settings' : 'ios-settings-outline';
            return (
              // <Animated.View style={{transform: [{translateX: fadeAnim}]}}>
                <IonIcon name={icon} color={color} size={25} />
              // </Animated.View>
            );
          } else if (route.name == 'Expenses') {
            icon = 'plus';
            return (
              <Icon
                name={icon}
                color={focused ? 'white' : color}
                size={27}
                style={{
                  borderRadius: 90,
                  height: 60,
                  width: 60,
                  backgroundColor: focused ? '#0B2947': '#7FC4DD',
                  textAlign: 'center',
                  marginBottom: 50,
                  paddingTop: 16,
                  shadowColor: 'black',
                  borderWidth: 5,
                  borderColor: '#ffffff',
                  position: 'relative',
                }}
              />
            );
          } else if(route.name == 'Home'){
            icon = focused ? 'home' : 'home-outline';
            return (
              <Animated.View style={{transform: [{translateX: fadeAnim}]}}>
                <IonIcon name={icon} color={color} size={25} />
              </Animated.View>
            );
          } else if(route?.name == 'Category') {
            icon = focused ? 'view-grid-plus' : 'view-grid-plus-outline'
            return(
              <Icon name={icon} color={color} size={25}/>
            )
          }
        },
      })}
      initialRouteName="Home">
      <Tab.Screen name="Home" component={Home}/>
      <Tab.Screen name="Graph" component={CashBook}/>
      <Tab.Screen name="Expenses" component={Expenses} />
      <Tab.Screen name="Category" component={Category} />
      <Tab.Screen name="Setting" component={Settings} />
    </Tab.Navigator>
  );
};

export default TabNavigation;

//Backup
{/* <Tab.Screen name="Graph" component={CashBook} listeners={({}) => ({tabPress: e => {parallelAnim()}, focus: e => {parallelAnim()} })}/> */}
{/* <Tab.Screen name="Home" component={Home} listeners={({}) => ({ tabPress: e => { fadeIn(); }, focus: e => { fadeIn(); }, })} /> */}
