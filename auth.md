---

# Authentication Module

Welcome to the Authentication Module of the Node.js MongoDB-based Booking System! This module is designed to provide robust user authentication, registration, and password management. It also integrates with Google OAuth2 for seamless login using Google accounts.

## Table of Contents

- [Overview](#overview)
- [Passport.js and Google OAuth2 Integration](#passportjs-and-google-oauth2-integration)
- [Authentication Controllers](#authentication-controllers)
- [Authentication Services](#authentication-services)
- [Authentication Middlewares](#authentication-middlewares)
- [Authentication DTOs](#authentication-dtos)
- [Google OAuth2 Router](#google-oauth2-router)

---

## Overview

The Authentication Module is a crucial component of our booking system, ensuring secure access to user accounts and providing a smooth authentication experience. It incorporates various technologies and best practices for user management.

## Passport.js and Google OAuth2 Integration

### Passport.js

- **Description**: Passport.js is employed as the core authentication middleware, allowing flexible and modular user authentication strategies.

### Google OAuth2 Strategy

- **Description**: Google OAuth2 is integrated using the `passport-google-oauth2` library, enabling users to log in with their Google accounts.

## Authentication Controllers

### `login`

- **Description**: Handles user login requests, verifying email and password, and generating an authentication token upon success.

### `register`

- **Description**: Manages user registration by collecting user details, securely hashing the password, and creating a new user account.

### `updatePassword`

- **Description**: Enables users to update their passwords securely. It ensures the current password matches before allowing the change.

### `resetPassword` (TODO)

- **Description**: (To be implemented) Provides a mechanism for users to reset their passwords.

## Authentication Services

### `login`

- **Description**: Validates user login credentials, generates authentication tokens, and emits login events.

### `register`

- **Description**: Manages user registration, securely hashing passwords, creating new user accounts, and emitting registration events.

### `findOrCreate`

- **Description**: Handles Google OAuth2 login by finding or creating a user account based on Google profile information.

### `updatePassword`

- **Description**: Facilitates secure password updates, ensuring the current password matches and emitting password update events.

### Utility Function: `plainIntoUserResponse`

- **Description**: Converts user data into a response format that includes user details and an authentication token.

## Authentication Middlewares

### `AuthMiddleware`

- **Description**: Authenticates incoming requests by verifying JWT tokens and attaching user information to the request.

### `IsUserUpdatedMiddleware`

- **Description**: Ensures that user tokens are still valid by comparing token timestamps with user information updates.

### `RoleGuard`

- **Description**: Guards routes based on user roles, allowing or denying access to specific resources.

## Authentication DTOs

- **Login DTO**: Handles login request validation and ensures email and password requirements are met.

- **Register DTO**: Manages registration request validation, ensuring valid user details and preventing duplicate emails.

- **Update Password DTO**: Validates password update requests, verifying the current password and ensuring a secure password change.

## Google OAuth2 Router

- **Description**: Manages routes for Google OAuth2 integration, allowing users to log in using their Google accounts.

---

Feel free to explore and integrate this Authentication Module into your Node.js MongoDB-based Booking System. If you have any questions or need assistance, please don't hesitate to reach out.

Happy coding and secure booking!
