const images = (req, res, next) => {
    const images = req.files?.map(image => image.filename)
    req.body.images = images;
    next();
}

module.exports = images;