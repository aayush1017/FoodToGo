/* eslint-disable prettier/prettier */

import React, { useState } from 'react';
import { StyleSheet, Text } from 'react-native';
import { ThemeProvider } from 'styled-components/native';
import { theme } from './src/infrastructure/theme';
import { SafeArea } from './src/components/utility/safe-area.component';
import { RestaurantsContextProvider } from './src/services/restaurants/mock/restaurants.context';
import { LocationContextProvider } from './src/services/location/location.context';
import {
  useFonts as useOswald,
  Oswald_400Regular,
} from "@expo-google-fonts/oswald";
import { useFonts as useLato, Lato_400Regular } from "@expo-google-fonts/lato";
import { Navigation } from './src/infrastructure/navigation';
import { FavouritesContextProvider } from './src/services/favourites/favourites.context';
import { AuthenticationContextProvider } from './src/services/authentication/authentication.context';
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCMuYigD0wsyCupHTU40X5ZcPNmp9le63s",
  authDomain: "foodtogo-3e098.firebaseapp.com",
  projectId: "foodtogo-3e098",
  storageBucket: "foodtogo-3e098.appspot.com",
  messagingSenderId: "199557284499",
  appId: "1:199557284499:web:0fc542af95c4e4bfc10366",
  measurementId: "G-BEMJB1LYYV"
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}


const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [oswaldLoaded] = useOswald({
    Oswald_400Regular,
  });

  const [latoLoaded] = useLato({
    Lato_400Regular,
  });

  if (!oswaldLoaded || !latoLoaded) {
    return null;
  }

  return (
    <>
      <ThemeProvider theme={theme}>
        <AuthenticationContextProvider>
          <FavouritesContextProvider>
            <LocationContextProvider>
              <RestaurantsContextProvider>
                <Navigation />
              </RestaurantsContextProvider>
            </LocationContextProvider>
          </FavouritesContextProvider>
        </AuthenticationContextProvider>
      </ThemeProvider>
    </>
  );
};

export default App;
