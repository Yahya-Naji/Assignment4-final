import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import AppNavigation from './src/navigation/AppNavigation';
import { NotesProvider } from './src/context/NotesContext';

export default function App() {
  return (
    <NotesProvider>
      <NavigationContainer>
        <AppNavigation />
      </NavigationContainer>
    </NotesProvider>
  );
}
