// payment.service.js
const stripe = require('stripe')(process.env.PAYMENT_SECRET_KEY);
const bookingService = require('../booking/booking.service');
const offeringService = require('../offering/offering.service');

/**
 * Create a payment session for a booking and offering.
 * @param {string} id - The ID of the offering.
 * @param {object} user - The user object.
 * @returns {Promise} A Promise that resolves to the payment session.
 */
const createPaymentSession = async ({ id, user }) => {
    try {
        // Fetch offering and booking data
        const offer = await offeringService.findOne({ id });
        const booking = await bookingService.findOne({ id: '6511df8e640653c947a1dc17', user });
        // Create a payment session
        const session = await createStripePaymentSession({
            name: offer.name,
            price: offer.price,
            days: booking.duration,
        });

        return session;
    } catch (error) {
        throw new Error('Failed to create payment session: ' + error.message);
    }
};

/**
 * Create a Stripe payment session.
 * @param {object} paymentInfo - Information for creating the payment session.
 * @returns {Promise} A Promise that resolves to the payment session.
 */
const createStripePaymentSession = async ({ name, price, days }) => {
    try {
        const session = await stripe.checkout.sessions.create({
            payment_method_types: ['card'],
            mode: 'payment',
            line_items: [{
                price_data: {
                    currency: 'usd',
                    product_data: {
                        name: name,
                    },
                    unit_amount: price * 100,
                },
                quantity: days,
            }],
            success_url: `${process.env.APP_URL}/success.html`,
            cancel_url: `${process.env.APP_URL}/cancel.html`,
        });

        return session;
    } catch (error) {
        throw new Error('Failed to create Stripe payment session: ' + error.message);
    }
};

module.exports = {
    createPaymentSession,
};
