import React, { useContext } from "react";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { RestaurantsNavigator } from './restaurants.navigator'
import { Ionicons } from '@expo/vector-icons';
import { SafeArea } from "../../components/utility/safe-area.component";
import { Button, StyleSheet, Text } from 'react-native';
import { MapScreen } from "../../features/map/screens/map.screen";
import { AuthenticationContext } from "../../services/authentication/authentication.context";
import { FavouritesContextProvider } from "../../services/favourites/favourites.context";
import { LocationContextProvider } from "../../services/location/location.context";
import { RestaurantsContextProvider } from "../../services/restaurants/mock/restaurants.context";
import { SettingsNavigator } from "./settings.navigator";

const Tab = createBottomTabNavigator()

const TAB_ICON = {
    Restaurants: 'md-restaurant',
    Map: 'md-map',
    Settings: 'md-settings'
}

const createScreenOptions = ({ route }) => {
    const iconName = TAB_ICON[route.name];
    return {
        tabBarIcon: ({ size, color }) => (
            <Ionicons name={iconName} size={size} color={color} />
        ),
    };
};

export const AppNavigator = () => {
    return (
        // <NavigationContainer independent={true}>
        <FavouritesContextProvider>
            <LocationContextProvider>
                <RestaurantsContextProvider>
                    <Tab.Navigator
                        screenOptions={createScreenOptions}
                        tabBarOptions={{
                            activeTintColor: "tomato",
                            inactiveTintColor: "gray",
                        }}
                    >
                        <Tab.Screen options={{ headerShown: false }} name="Restaurants" component={RestaurantsNavigator} />
                        <Tab.Screen options={{ headerShown: false }} name="Map" component={MapScreen} />
                        <Tab.Screen options={{ headerShown: false }} name="Settings" component={SettingsNavigator} />
                    </Tab.Navigator>
                </RestaurantsContextProvider>
            </LocationContextProvider>
        </FavouritesContextProvider>
        // </NavigationContainer>
    )
}