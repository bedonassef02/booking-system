const STATUS_CODE = require('../utils/constants/status-code');
const offeringService = require('./offering.service');
const asyncHandler = require('express-async-handler');

exports.create = asyncHandler(async (req, res) => {
  const {
    name,
    description,
    price,
    location,
    capacity,
    images,
    facilities,
    days,
    category,
  } = req.body;
  const offer = await offeringService.create({
    name,
    description,
    price,
    location,
    capacity,
    images,
    facilities,
    days,
    category,
  });
  res.status(STATUS_CODE.CREATED).json({ offer });
});

exports.findAll = asyncHandler(async (req, res) => {
  const { query } = req;
  const offers = await offeringService.findAll({ query });
  res.status(STATUS_CODE.OK).json({ offers });
});

exports.findOne = asyncHandler(async (req, res) => {
  const { id } = req.params;
  const offer = await offeringService.findOne({ id });
  res.status(STATUS_CODE.OK).json({ offer });
});

exports.remove = asyncHandler(async (req, res) => {
  const { id } = req.params;
  await offeringService.remove({ id });
  res.status(STATUS_CODE.OK).json({ message: 'offer deleted successfully' });
});

exports.update = asyncHandler(async (req, res) => {
  const { id } = req.params;
  const data = req.body;
  const offer = await offeringService.update({ id, data });
  res.status(STATUS_CODE.OK).json({ offer });
});
