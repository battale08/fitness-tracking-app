import React from 'react';
import OnboardingStack from './onboardingStack';
import { createStackNavigator } from '@react-navigation/stack';
import MainTabs from '../navigation/mainTabs';
import { useApp } from '../contexts/appProvider';

const Stack = createStackNavigator();

export default function RootNavigator() {
  const { state } = useApp();

  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      {!state?.onboarded ? (
        <Stack.Screen name="Onboarding" component={OnboardingStack} />
      ) : (
        <Stack.Screen name="Main" component={MainTabs} />
      )}
    </Stack.Navigator>
  );
}
