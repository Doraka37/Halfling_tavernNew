/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

 import React from 'react';
 import { Provider } from 'react-redux';
 import {store} from './Store/configureStore';
 import { NavigationContainer } from '@react-navigation/native';
 import { createNativeStackNavigator } from '@react-navigation/native-stack';
 import Race from './src/Pages/Race';
 import Home from './src/Pages/Home';
 import Class from './src/Pages/Class';
 import Stats from './src/Pages/Stats';
 import Background from './src/Pages/Background';
 import Characteristics from './src/Pages/Characteristics';
 import Physics from './src/Pages/Physics';
 import Alignment from './src/Pages/Alignment';
 import Sheet from './src/Pages/Sheet';
 import Spells from './src/Pages/Spells';

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
           <Stack.Screen
             name="Stats"
             component={Stats}
             options={{ title: 'Stats' }}
           />
           <Stack.Screen
             name="Background"
             component={Background}
             options={{ title: 'Background' }}
           />
           <Stack.Screen
             name="Characteristics"
             component={Characteristics}
             options={{ title: 'Characteristics' }}
           />
           <Stack.Screen
             name="Physics"
             component={Physics}
             options={{ title: 'Physics' }}
           />
           <Stack.Screen
             name="Alignment"
             component={Alignment}
             options={{ title: 'Alignment' }}
           />
           <Stack.Screen
             name="Sheet"
             component={Sheet}
             options={{ title: 'Sheet' }}
           />
           <Stack.Screen
             name="Spells"
             component={Spells}
             options={{ title: 'Spells' }}
           />
         </Stack.Navigator>
       </NavigationContainer>
     </Provider>
   );
 };
 
 export default App;
