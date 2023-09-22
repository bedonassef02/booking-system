
const globalExceptionFilter = (err, req, res, next) => {
    console.error(err); // Log the error for debugging purposes

    // Customize the error response based on your requirements
    res.status(500).json({ error: 'Something went wrong' });
};

module.exports = globalExceptionFilter;