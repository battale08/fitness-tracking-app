// App.js

import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

// Screens
const HomeScreen = () => (
  <View style={styles.screenContainer}>
    <Text>Home Screen</Text>
  </View>
);

const ChatScreen = () => (
  <View style={styles.screenContainer}>
    <Text>Chat Screen</Text>
  </View>
);

const CartScreen = () => (
  <View style={styles.screenContainer}>
    <Text>Cart Screen</Text>
  </View>
);

const ProfileScreen = () => (
  <View style={styles.screenContainer}>
    <Text>Profile Screen</Text>
  </View>
);

// Custom Circular Button Component
const AddButton = ({onPress}) => (
  <TouchableOpacity style={styles.addButton} onPress={onPress}>
    <Text style={styles.addButtonLabel}>+</Text>
  </TouchableOpacity>
);

// Bottom Tab Navigator
const Tab = createBottomTabNavigator();

const BottomNavigator = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        tabBarOptions={{
          style: styles.tabBar,
          labelStyle: styles.tabLabel
        }}
      >
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Chat" component={ChatScreen} />
        <Tab.Screen
          name="Add"
          component={() => null}
          options={{
            tabBarButton: (props) => (
              <AddButton onPress={() => console.log('Add button pressed')} />
            )
          }}
        />
        <Tab.Screen name="Cart" component={CartScreen} />
        <Tab.Screen name="Profile" component={ProfileScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  screenContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  tabBar: {
    backgroundColor: '#FF4D4D',
    borderTopWidth: 0,
    elevation: 0,

  },
  tabLabel: {
    fontSize: 14,
  },
  addButton: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FF4D4D',
    width: 60,
    height: 60,
    borderRadius: 30,
    bottom: 10,
    elevation: 3,
  },
  addButtonLabel: {
    color: '#ffffff',
    fontSize: 30,
    lineHeight: 30,

  },
});

export default BottomNavigator;
