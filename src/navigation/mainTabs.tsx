import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Image, StyleSheet } from 'react-native';
import { DASHBOARD_ICON, PROGRESS_ICON, RISK_METER, SETTINGS } from '../assets';
import Dashboard from '../../src/screens/dashboard';
import Progress from '../../src/screens/progress';
import RiskDetail from '../../src/screens/riskDetail';
import Settings from '../screens/settings';

const Tab = createBottomTabNavigator();

export default function MainTabs() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconSource;

          if (route.name === 'Dashboard') {
            iconSource = focused ? DASHBOARD_ICON : DASHBOARD_ICON; // Use same icon, tint with color
          } else if (route.name === 'Progress') {
            iconSource = focused ? PROGRESS_ICON : PROGRESS_ICON; // Use same icon, tint with color
          } else if (route.name === 'Risk') {
            iconSource = focused ? RISK_METER : RISK_METER; // Use same icon, tint with color
          } else if (route.name === 'Settings') {
            iconSource = focused ? SETTINGS : SETTINGS;
          }

          return iconSource ? (
            <Image
              source={iconSource}
              style={[styles.icon, { tintColor: color }]} // Apply color based on focused state
              resizeMode="contain"
            />
          ) : null;
        },
        tabBarActiveTintColor: '#2E8B57', // Active tab color
        tabBarInactiveTintColor: '#666', // Inactive tab color
        tabBarStyle: styles.tabBar,
        tabBarLabelStyle: styles.tabLabel,
        headerShown: false,
      })}
    >
      <Tab.Screen name="Dashboard" component={Dashboard} options={{ headerShown: true }}/>
      <Tab.Screen name="Progress" component={Progress} options={{ headerShown: true }}/>
      <Tab.Screen name="Risk" component={RiskDetail} options={{ headerShown: true }}/>
      <Tab.Screen name="Settings" component={Settings} options={{ headerShown: true }}/>
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
  tabBar: {
    backgroundColor: '#fff',
    borderTopWidth: 1,
    borderTopColor: '#eee',
    height: 80,
    paddingBottom: 5,
    paddingTop: 8,
  },
  tabLabel: {
    fontSize: 13,
    marginTop: 4,
    fontWeight: '800',
    marginBottom: 24,
  },
  icon: {
    width: 24, 
    height: 24,
  },
});