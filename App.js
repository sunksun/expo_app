import { View, Text } from 'react-native'
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react'
import Splash from './screens/Splash'
import Home from './screens/Home';
import About from './screens/About';

const Stack = createNativeStackNavigator();

const App = () => {
 return (
  <NavigationContainer>
  <Stack.Navigator>
  <Stack.Screen
      name="Splash"
      component={Splash}
      options={{title: 'ยินดีต้อนรับ8iy'}}
    />
    <Stack.Screen
      name="Home"
      component={Home}
      options={{title: 'หน้าแรก'}}
    />
    <Stack.Screen
      name="About"
      component={About}
      options={{title: 'เกี่ยวกับเรา'}}
    />
  </Stack.Navigator>
</NavigationContainer>
 )
}


export default App