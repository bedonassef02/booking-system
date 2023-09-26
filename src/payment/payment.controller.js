const asyncHandler = require('express-async-handler');
const paymentService = require('./payment.service');
const STATUS_CODE = require('../utils/constants/status-code');
const CustomLogger = require('../utils/helpers/logger/custom.logger');
const { updatePayment } = require('../booking/booking.service');
const PAYMENT = require('../booking/utils/constants/payment');

const logger = new CustomLogger('PAYMENT_CONTROLLER');

exports.create = asyncHandler(async (req, res) => {
  const { booking } = req.params;
  const { user } = req;
  const payment = await paymentService.createPaymentSession({
    id,
    user: user.id,
  });
  logger.info({ payment });
  res.status(STATUS_CODE.CREATED).json({ url: payment.url });
});

exports.success = asyncHandler(async (req, res) => {
  const { booking: id } = req.query;
  const booking = await updatePayment({ id });
  res.status(STATUS_CODE.OK).send({ booking });
});

exports.cancel = asyncHandler(async (req, res) => {
  const { booking: id } = req.query;
  const booking = await updatePayment({ id, payment: PAYMENT.FAILED });
  res.status(STATUS_CODE.OK).send({ booking });
});
