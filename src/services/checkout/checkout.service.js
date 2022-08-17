import createStripe from "stripe-client"

const stripe = createStripe("pk_test_x5xA7XoNZVcZlFudqSqEKHzQ00WrNoBypS")

export const cardTokenRequest = (card) => stripe.createToken({ card })