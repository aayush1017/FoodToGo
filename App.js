/* eslint-disable prettier/prettier */

import React from 'react';
import { StyleSheet } from 'react-native';
import { ThemeProvider } from 'styled-components/native';
import { RestaurantsScreen } from './src/features/restaurants/screens/rest.screen';
import { theme } from './src/infrastructure/theme'

const App = () => {

  return (
    <>
      <ThemeProvider theme={theme}>
        <RestaurantsScreen />
      </ThemeProvider>
    </>
  );
};

export default App;
