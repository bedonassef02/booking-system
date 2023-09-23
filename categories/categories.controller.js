const categoriesService = require('./categories.service');
const asyncHandler = require('express-async-handler');
const NotFoundException = require('../utils/exceptions/not-found.exception')

// TODO: implement update, delete

exports.create = asyncHandler(async (req, res) => {
    const { name, slug } = req.body;
    const category = await categoriesService.create({ name, slug });
    res.status(201).json({ category });
})

exports.findAll = asyncHandler(async (req, res) => {
    const categories = await categoriesService.findAll();
    res.status(200).json({ categories });
});

exports.findOne = asyncHandler(async (req, res) => {
    const { slug } = req.params;
    const category = await categoriesService.findOne({ slug });
    if (!category) {
        throw new NotFoundException('category not found');
    }
    res.status(200).json({ category });
});

exports.remove = asyncHandler(async (req, res) => {
    const { id } = req.params;
    await categoriesService.remove({ id });
    res.status(200).json({ message: 'category deleted successfully' });
});

exports.update = asyncHandler(async (req, res) => {
    const { id } = req.params;
    const { name, slug } = req.body;
    const category = await categoriesService.update({ id, name, slug });
    res.status(200).json({ category });
});