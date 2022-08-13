import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import NewsCar from './components/newsCar';
import TheCar from './components/theCar';
import Splash from './components/splash';
import About from './components/about';
import Web from './components/web';
import FristTime from './components/frist time';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer >
      <Stack.Navigator >

        <Stack.Screen name="splash"   component={Splash} options={{headerShown:false }} /> 
        <Stack.Screen name="newsCar"  component={NewsCar} options={{headerShown:false }}/>
        <Stack.Screen name="theCar"   component={TheCar} options={{headerShown:false }}/>
        <Stack.Screen name="about"    component={About}   options={{headerShown:false }}/>
        <Stack.Screen name="web"      component={Web}   options={{headerShown:false }}/>
        <Stack.Screen name="frist"    component={FristTime} options={{headerShown:false }}/>

      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;