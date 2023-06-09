import * as React from 'react';
import { Button, View, Text } from 'react-native';

const Signin = () => {
  console.log('Test branch request');
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen</Text>
      <Button title="Go to Details" />
    </View>
  );
}

export default Signin;
