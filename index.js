import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import AppNavigation from './src/navigations/AppNavigation';
import { NotesProvider } from './src/context/NoteContext';

export default function App() {
  return (
    <NotesProvider>
      <NavigationContainer>
        <AppNavigation />
      </NavigationContainer>
    </NotesProvider>
  );
}
