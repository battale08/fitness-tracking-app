import React from 'react';
import Welcome from '../../src/screens/onboarding/welcome';
import UserInfo from '../../src/screens/onboarding/userInfo';
import Confirmation from '../../src/screens/onboarding/confirmation';
import {createStackNavigator} from '@react-navigation/stack';


const Stack = createStackNavigator();

export default function OnboardingStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Welcome" component={Welcome} options={{ headerShown: false }} />
      <Stack.Screen name="UserInfo" component={UserInfo} options={{ title: 'Your Info' }} />
      <Stack.Screen name="Confirmation" component={Confirmation} options={{ headerShown: false, gestureEnabled: false }} />
    </Stack.Navigator>
  );
}
