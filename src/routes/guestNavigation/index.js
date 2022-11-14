import {
  createNativeStackNavigator 
} from '@react-navigation/native-stack';
import React from 'react';
import qrCodeScan from '../../screens/guest/qrCodeScan';
import Account from '../../screens/Account'

const Stack = createNativeStackNavigator();

const GuestNavigation = ({...props}) => (
    <Stack.Navigator >
      <Stack.Screen
        name={"QRCodeScan"}
        component={qrCodeScan}
        options={{
          headerShown: false,
          headerStyle: {backgroundColor: 'transparent'}
        }}
      />
      <Stack.Screen
        name={"Account"}
        component={Account}
        options={{
          headerShown: false,
          headerStyle: {backgroundColor: 'transparent'}
        }}
      />
    </Stack.Navigator>
);
export default GuestNavigation;