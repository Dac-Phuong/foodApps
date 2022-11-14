import {
  NavigationContainer
} from '@react-navigation/native';
import {
  createNativeStackNavigator 
} from '@react-navigation/native-stack';
import React from 'react';
import OnboardingNavigation from './onboardingNavigator';
import QRCodeScreen from './guestNavigation';
import TabNavigator from './tabNavigator';

const Stack = createNativeStackNavigator();

const RootNavigation = ({...props}) => (
  <NavigationContainer >
    <Stack.Navigator
      screenOptions={{
        cardOverlayEnabled: true,
      }}>
      <Stack.Screen
        name={"QRCodeScreen"}
        component={QRCodeScreen}
        options={{
          headerShown: false,
          headerStyle: {backgroundColor: 'transparent'}
        }}
      />
      <Stack.Screen
        name={"OnboardingNavigation"}
        component={OnboardingNavigation}
        options={{
          headerShown: false,
          headerStyle: {backgroundColor: 'transparent'}
        }}
      />
      <Stack.Screen
        {...props}
        name={"TabNavigator"}
        component={TabNavigator}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  </NavigationContainer>
);
export default RootNavigation;
