const asyncHandler = require('express-async-handler');
const paymentService = require('./payment.service');
const STATUS_CODE = require('../utils/constants/status-code');
const CustomLogger = require('../utils/helpers/logger/custom.logger');

const logger = new CustomLogger('PAYMENT_CONTROLLER');

exports.create = asyncHandler(async (req, res) => {
    const { id } = req.body;
    const { user } = req;
    const payment = await paymentService.createPaymentSession({ id, user: user.id });
    logger.info(payment);
    res.status(STATUS_CODE.CREATED).json({ url: payment.url });
})