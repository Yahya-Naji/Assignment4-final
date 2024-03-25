import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { NotesProvider } from './src/context/NoteContext';
import AppNavigation from './src/navigations/AppNavigation';

export default function App() {
  return (
    <NotesProvider>
      <NavigationContainer>
        <AppNavigation />
      </NavigationContainer>
    </NotesProvider>
  );
}
