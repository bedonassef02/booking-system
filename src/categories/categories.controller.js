const categoriesService = require('./categories.service');
const asyncHandler = require('express-async-handler');
const NotFoundException = require('../utils/exceptions/not-found.exception');
const STATUS_CODE = require('../utils/constants/status-code');

// TODO: implement update, delete

exports.create = asyncHandler(async (req, res) => {
  const { name, slug } = req.body;
  const category = await categoriesService.create({ name, slug });
  res.status(STATUS_CODE.CREATED).json({ category });
});

exports.findAll = asyncHandler(async (req, res) => {
  const categories = await categoriesService.findAll();
  res.status(STATUS_CODE.OK).json({ categories });
});

exports.findOne = asyncHandler(async (req, res) => {
  const { slug } = req.params;
  const category = await categoriesService.findOne({ slug });
  if (!category) {
    throw new NotFoundException('category not found');
  }
  res.status(STATUS_CODE.OK).json({ category });
});

exports.remove = asyncHandler(async (req, res) => {
  const { id } = req.params;
  await categoriesService.remove({ id });
  res.status(STATUS_CODE.OK).json({ message: 'category deleted successfully' });
});

exports.update = asyncHandler(async (req, res) => {
  const { id } = req.params;
  const { name, slug } = req.body;
  const category = await categoriesService.update({ id, name, slug });
  res.status(STATUS_CODE.OK).json({ category });
});
