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
  });
  res.status(201).json({ offer });
});

exports.findAll = asyncHandler(async (req, res) => {
  const offers = await offeringService.findAll();
  res.status(200).json({ offers });
});

exports.findOne = asyncHandler(async (req, res) => {
  const { id } = req.params;
  const offer = await offeringService.findOne({ id });
  res.status(200).json({ offer });
});

exports.remove = asyncHandler(async (req, res) => {
  const { id } = req.params;
  await offeringService.remove({ id });
  res.status(200).json({ message: 'offer deleted successfully' });
});

exports.update = asyncHandler(async (req, res) => {
  const { id } = req.params;
  const data = req.body;
  const offer = await offeringService.update({ id, data });
  res.status(200).json({ offer });
});
