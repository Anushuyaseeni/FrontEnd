import 'react-native-gesture-handler';
import React from 'react';
import {View, Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {ThemeProvider} from 'react-native-elements';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import DrawerStackScreen from './src/stack/DrawerStack';
import TabNavigation from './src/stack/TabNavigator';



const App = () => {

  const RootStack = createNativeStackNavigator()
  return (
    <ThemeProvider>
      <NavigationContainer>
        <TabNavigation/>
      </NavigationContainer>
    </ThemeProvider>
  );
};

export default App;

