import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

//Caminhos Telas
import Splash from './src/screens/Splash';
import Login from './src/screens/LoginScreen';
import PasswordRecovery from './src/screens/PasswordRecovery';
import Register from './src/screens/Register'; 
import Home from './src/screens/Home'; 

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Splash"
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="Splash" component={Splash} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Recovery" component={PasswordRecovery} />
        <Stack.Screen name="Register" component={Register} />
        <Stack.Screen name="Home" component={Home}/>
     

      </Stack.Navigator>
    </NavigationContainer>
  );
}
