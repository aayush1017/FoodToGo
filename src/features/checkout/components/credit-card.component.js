import { View, Text } from 'react-native'
import React from 'react'
import { CreditCardInput, LiteCreditCardInput } from "react-native-credit-card-input";
import { cardTokenRequest } from '../../../services/checkout/checkout.service';

export default function CreditCard({ name = "Aayush" }) {
    const onChange = async (formData) => {
        const { values, status } = formData
        const isIncomplete = Object.values(status).includes("incomplete")
        const expiry = values.expiry.split('/')
        const card = {
            number: values.number,
            exp_month: expiry[0],
            exp_year: expiry[1],
            cvc: values.cvc,
            name: name
        }
        const info = await cardTokenRequest(card)
        console.log(info)
    }
    return (
        <LiteCreditCardInput onChange={onChange} />
    )
}