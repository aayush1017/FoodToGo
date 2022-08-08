/* eslint-disable prettier/prettier */

import React from 'react';
import { SafeAreaView, ScrollView, StatusBar, StyleSheet, Text, useColorScheme, View, } from 'react-native';
import { Searchbar } from 'react-native-paper';
import { RestaurantInfoCard } from '../components/restInfoCard';
import styled from "styled-components/native";

const SafeArea = styled(SafeAreaView)`
  flex: 1;
  background-color: ${(props) => props.theme.colors.bg.primary};
  /* margin-top: ${StatusBar.currentHeight}px; */
`;

const SearchContainer = styled.View`
  padding: ${(props) => props.theme.space[3]};
`;

const RestaurantListContainer = styled.View`
  flex: 1;
  padding: ${(props) => props.theme.space[3]};
  background-color: ${(props) => props.theme.colors.brand.muted} ;
`;

export const RestaurantsScreen = () => {
    return (
        <>
            <SafeArea>
                <SearchContainer>
                    <Searchbar />
                </SearchContainer>
                <RestaurantListContainer>
                    <RestaurantInfoCard />
                </RestaurantListContainer>
            </SafeArea>
        </>
    )
}
