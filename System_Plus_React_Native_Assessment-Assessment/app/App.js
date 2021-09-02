// In App.js in a new project

import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import BottomTabs from '../app/App/Src/Design/BottomTabs/index'
import CalenderScreen from '../app/App/Src/Design/CalenderScreen/index'
import ListingScreen from '../app/App/Src/Design/ListingScreen/index'

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="BottomTabs" >
        <Stack.Screen options={{ headerShown: false, gestureEnabled: true }} name="BottomTabs" component={BottomTabs} />
        <Stack.Screen
          name="CalenderScreen"
          component={CalenderScreen}
          options={{
            title: 'Calendar',
            headerStyle: {
              backgroundColor: 'white',
            },
            headerTintColor: 'black',
            headerTitleAlign: 'center',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
          }}
        />
        <Stack.Screen
          name="ListingScreen"
          component={ListingScreen}
          options={{
            title: 'Listing',
            headerStyle: {
              backgroundColor: 'white',
            },
            headerTintColor: 'black',
            headerTitleAlign: 'center',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;