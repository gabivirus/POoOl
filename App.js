import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';

import Navbar from './components/Navbar/Navbar';

export default function App() {
  return (
    <NavigationContainer>
      <Navbar />
    </NavigationContainer>
  );
}
