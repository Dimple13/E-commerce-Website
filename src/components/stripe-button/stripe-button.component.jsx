import React from 'react';
import StripeCheckout from 'react-stripe-checkout';
const StripeCheckoutButton=({price})=>{
    const priceForStripe=price*100;
    const publishableKey='pk_test_51IdrZbSDjXwhaSEQ9J6UHYls8ioXBapu4MDtIlTV1p0rmoCjjLpMa5hvn4qH1Q0fF1xAVvIWeO8c7QSRq5WTRMyT00wMRSJklY';
    const onToken=token=>{
        console.log(token);
        alert('Payment Successful!');
    }
    return(
        <StripeCheckout 
        label='Pay Now'
        name='CRWN Clothing Ltd.'
        billingAddress
        shippingAddress
        image='https://raw.githubusercontent.com/Dimple13/E-commerce-Website/2c867317a7e38c63b2c5ce3b30dcebf0d3326230/public/crown.svg'
        description={`Your total is $${price}`}
        amount={priceForStripe}
        panelLabel='Pay Now'
        token={onToken}
        stripeKey={publishableKey}
        />
    );
};
export default StripeCheckoutButton;