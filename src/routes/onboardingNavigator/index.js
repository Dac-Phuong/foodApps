import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import Auth0Screen from "../../screens/onboarding/auth0Screen";
import UserProfileScreen from "../../screens/onboarding/userProfileScreen";

const Stack = createNativeStackNavigator();

const OnboardingNavigation = ({ ...props }) => (
  <Stack.Navigator>
    <Stack.Screen
      name={"Auth0Screen"}
      component={Auth0Screen}
      options={{
        headerShown: false,
        headerStyle: { backgroundColor: "transparent" },
      }}
    />
    <Stack.Screen
      {...props}
      name={"UserProfileScreen"}
      component={UserProfileScreen}
      options={{
        headerShown: false,
        gestureEnabled: false,
      }}
    />
  </Stack.Navigator>
);
export default OnboardingNavigation;
