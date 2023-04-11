import React from 'react';
import {View, Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {ThemeProvider} from 'react-native-elements';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {DrawerStack} from './src/stack/DrawerStack';


const App = () => {

  const RootStack = createNativeStackNavigator()
  return (
    <ThemeProvider>
      <NavigationContainer>
          <RootStack.Navigator>
              <RootStack.Screen name='Cashbook' component={DrawerStack}/>
          </RootStack.Navigator>
      </NavigationContainer>
    </ThemeProvider>
  );
};

export default App;
