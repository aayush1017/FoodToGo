/* eslint-disable prettier/prettier */

import React, { useContext, useState } from 'react';
import { FlatList, SafeAreaView, ScrollView, StatusBar, StyleSheet, Text, TouchableOpacity, useColorScheme, View, } from 'react-native';
import { RestaurantInfoCard } from '../components/restInfoCard';
import styled from "styled-components/native";
import { Spacer } from '../../../components/spacer/spacerComponent';
import { SafeArea } from '../../../components/utility/safe-area.component';
import { RestaurantsContext } from '../../../services/restaurants/mock/restaurants.context';
import { ActivityIndicator, Colors } from 'react-native-paper';
import { Search } from '../components/search.component';
import { FavouritesContext } from '../../../services/favourites/favourites.context';
import { FavouritesBar } from '../../../components/favourites/favourites-bar.component';
import { RestaurantList } from '../components/restaurant-list.styles';
import { FadeInView } from '../../../components/animations/fade.animation';

const LoadingContainer = styled.View`
  position: absolute; 
  top: 50%;
  left: 50%;
`;

const Loading = styled(ActivityIndicator)`
  margin-left: -25px;
`

export const RestaurantsScreen = ({ navigation }) => {
  const { isLoading, restaurants } = useContext(RestaurantsContext);
  const { favourites } = useContext(FavouritesContext)
  const [isToggled, setIsToggled] = useState(false);

  // console.log(error);
  return (
    <SafeArea>
      {isLoading &&
        <LoadingContainer>
          <Loading animating={true}
            size={50}
            color={Colors.blue300}
          />
        </LoadingContainer>
      }
      <Search
        isFavouritesToggled={isToggled}
        onFavouritesToggle={() => setIsToggled(!isToggled)}
      />
      {isToggled && (
        <FavouritesBar favourites={favourites} onNavigate={navigation.navigate} />
      )}
      <RestaurantList
        data={restaurants}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity delayPressIn={1000} onPress={() => navigation.navigate("RestaurantDetail", { restaurant: item })}>
              <Spacer position="bottom" size="large">
                <FadeInView>
                  <RestaurantInfoCard restaurant={item} />
                </FadeInView>
              </Spacer>
            </TouchableOpacity>
          );
        }}
        keyExtractor={(item) => item.name}
      />
    </SafeArea>
  );
};