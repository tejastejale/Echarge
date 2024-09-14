import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import Login from './src/Screens/Login';
const App = () => {
  const Stack = createStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Login"
        screenOptions={{headerShown: false}}>
        <Stack.Screen name="Login" component={Login} />
        {/* <Stack.Screen name="Notifications" component={'Notifications'} />
          <Stack.Screen name="Profile" component={'Profile'} />
          <Stack.Screen name="Settings" component={'Settings'} /> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
