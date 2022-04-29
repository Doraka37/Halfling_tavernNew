/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

 import React from 'react';
 import type {Node} from 'react';
 import { Provider } from 'react-redux';
 import {store, persistor} from './Store/configureStore';
 import {
   SafeAreaView,
   Text,
   View,
   StyleSheet,
   Image,
   TouchableOpacity,
 } from 'react-native';
 import { SquircleView } from 'react-native-figma-squircle'
 import { NavigationContainer } from '@react-navigation/native';
 import { createNativeStackNavigator } from '@react-navigation/native-stack';
 import Race from './src/Pages/Race';
 import Home from './src/Pages/Home';
 import Class from './src/Pages/Class';
 
 const Stack = createNativeStackNavigator();
 
 const App: () => Node = () => {
 
   return (
     <Provider store={store}>
       <NavigationContainer>
         <Stack.Navigator
         screenOptions={{
           headerShown: false
         }}>
         <Stack.Screen
             name="Home"
             component={Home}
             options={{ title: 'Home' }}
           />
           <Stack.Screen
             name="Race"
             component={Race}
             options={{ title: 'Race' }}
           />
           <Stack.Screen
             name="Class"
             component={Class}
             options={{ title: 'Class' }}
           />
         </Stack.Navigator>
       </NavigationContainer>
     </Provider>
   );
 };
 
 export default App;
