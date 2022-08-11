import React from "react";
import { Image } from "react-native";
import styled from "styled-components";
import { CompactRestaurantInfo } from "../../restaurants/components/compact-restInfo";

const MyText = styled.Text`

`

export const MapCallout = ({ restaurant }) => {
    return (
        <>
            <CompactRestaurantInfo restaurant={restaurant} />
        </>
    )
}