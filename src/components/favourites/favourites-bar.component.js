import React from "react";
import { ScrollView, Touchable, TouchableOpacity } from "react-native";
import styled from "styled-components";
import { CompactRestaurantInfo } from "../../features/restaurants/components/compact-restInfo";
import { Spacer } from "../spacer/spacerComponent";
import { Text } from "../typography/text.component";

const FavouritesWrapper = styled.View`
    padding: 10px;
`


export const FavouritesBar = ({ favourites, onNavigate }) => {
    if (!favourites.length) {
        return null
    }
    return (
        <FavouritesWrapper>
            <Spacer variant="left.large">
                <Text variant="caption">Favourites</Text>
            </Spacer>
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                {favourites.map((restaurant) => {
                    const key = restaurant.name;
                    return (
                        <Spacer key={key} position="left" size="medium">
                            <TouchableOpacity
                                onPress={() =>
                                    onNavigate("RestaurantDetail", {
                                        restaurant,
                                    })
                                }
                            >
                                <CompactRestaurantInfo restaurant={restaurant} />
                            </TouchableOpacity>
                        </Spacer>
                    );
                })}
            </ScrollView>
        </FavouritesWrapper>
    )
}