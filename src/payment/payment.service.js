const stripe = require('stripe')(process.env.PAYMENT_SECRET_KEY);
const bookingService = require('../booking/booking.service');
const offeringService = require('../offering/offering.service');
const CustomLogger = require('../utils/helpers/logger/custom.logger');

const logger = new CustomLogger('PAYMENT_SERVICE');

const createPaymentSession = async ({ id, user }) => {
  try {
    // Fetch offering and booking data
    const offer = await offeringService.findOne({ id });
    const booking = await bookingService.findOne({
      id: '6511df8e640653c947a1dc17',
      user,
    });
    // Create a payment session
    const session = await createStripePaymentSession({
      name: offer.name,
      price: offer.price,
      days: booking.duration,
      booking: booking.id,
    });

    return session;
  } catch (error) {
    throw new Error('Failed to create payment session: ' + error.message);
  }
};

const createStripePaymentSession = async ({ name, price, days, booking }) => {
  try {
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      mode: 'payment',
      line_items: [
        {
          price_data: {
            currency: 'usd',
            product_data: {
              name: name,
            },
            unit_amount: price * 100,
          },
          quantity: days,
        },
      ],
      success_url: `${process.env.APP_URL}/payment/success?booking=${booking}`,
      cancel_url: `${process.env.APP_URL}/payment/cancel?booking=${booking}`,
    });

    return session;
  } catch (error) {
    logger.error(error);
    throw new Error(
      'Failed to create Stripe payment session: ' + error.message,
    );
  }
};

module.exports = {
  createPaymentSession,
};
