import { View, Text } from 'react-native'
import React, { useContext } from 'react'
import CreditCard from '../components/credit-card.component'
import { SafeArea } from '../../../components/utility/safe-area.component'
import { CartContext } from '../../../services/cart/cart.context'

export default function CheckoutScreen() {
    const { cart, restaurant } = useContext(CartContext)
    return (
        <SafeArea>
            <Text>{JSON.stringify(cart)}</Text>
            <Text>restaurant: {JSON.stringify(restaurant)}</Text>
            <CreditCard />
        </SafeArea>
    )
}