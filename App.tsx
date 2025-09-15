import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { AppProvider } from './src/contexts/appProvider';
import RootNavigator from './src/navigation/rootNavigator';


const App = () => {
  return (
    <AppProvider>
      <NavigationContainer>
        <RootNavigator />
      </NavigationContainer>
    </AppProvider>
  );
};

export default App;
