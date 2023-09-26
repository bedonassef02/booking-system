const bookingService = require('../booking.service');
const PAYMENT = require('../utils/constants/payment');
const BadRequestException = require('../../utils/exceptions/bad-request.exception');
const asyncHandler = require('express-async-handler');

const PaymentGuard = asyncHandler(async (req, res, next) => {
  const { booking } = req.params;
  const { user } = req;
  const offering = await bookingService.findOne({ id: booking, user: user.id });
  if (offering.payment === PAYMENT.COMPLETED) {
    throw new BadRequestException('you have already paid this booking');
  }
  next();
});

module.exports = PaymentGuard;
