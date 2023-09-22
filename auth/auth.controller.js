const asyncHandler = require('express-async-handler');
const authService = require('./auth.service');

exports.login = asyncHandler(async (request, response) => {
    const { email, password } = request.body;
    const user = await authService.login({ email, password });
    response.status(201).json(user);
})

exports.register = asyncHandler(async (request, response) => {
    const { name, email, password } = request.body;
    const user = await authService.register({ name, email, password });
    response.status(201).json(user);
});