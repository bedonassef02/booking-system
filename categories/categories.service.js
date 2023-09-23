const Category = require('./models/category.model')

exports.create = async ({ name, slug }) => {
    return await Category.create({ name, slug });
}

exports.findAll = async () => {
    return await Category.find();
}

exports.findOne = async ({ slug }) => {
    return await Category.findOne({ slug });
}

exports.remove = async ({ id }) => {
    await Category.findByIdAndRemove(id);
}

exports.update = async ({ id, name, slug }) => {
    return await Category.findByIdAndUpdate(id, { name, slug }, { new: true });
}