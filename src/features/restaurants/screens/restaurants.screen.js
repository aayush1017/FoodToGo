/* eslint-disable prettier/prettier */

import React from 'react';
import { FlatList, SafeAreaView, ScrollView, StatusBar, StyleSheet, Text, useColorScheme, View, } from 'react-native';
import { Searchbar } from 'react-native-paper';
import { RestaurantInfoCard } from '../components/restInfoCard';
import styled from "styled-components/native";
import { Spacer } from '../../../components/spacer/spacerComponent';
import { SafeArea } from '../../../components/utility/safe-area.component';

const SearchContainer = styled.View`
  padding: ${(props) => props.theme.space[3]};
`;

const RestaurantList = styled(FlatList).attrs({
  contentContainerStyle: {
    padding: 16,
  },
})``;

export const RestaurantsScreen = () => {
  return (
    <>
      <SafeArea>
        <SearchContainer>
          <Searchbar />
        </SearchContainer>
        <RestaurantList
          data={[{ name: 1 },
          { name: 2 },
          { name: 3 },
          { name: 4 },
          { name: 5 },
          { name: 6 },
          { name: 7 },
          { name: 8 },
          { name: 9 },
          { name: 10 }]}
          renderItem={() => (
            <Spacer position="bottom" size="large"><RestaurantInfoCard /></Spacer>)}
          keyExtractor={(item) => item.name}
        />
      </SafeArea>
    </>
  )
}
