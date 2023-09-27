# Node.js MongoDB Booking System

![Booking System](https://uploads-ssl.webflow.com/5c29380b1110ec92a203aa84/5c4400a527353e362727fe90_c6d8491e8ed0a1c67408299a8798e6d8.png)

Welcome to the Node.js MongoDB-based Booking System! This project is designed to provide a robust solution for managing bookings, offerings, categories, and more. It leverages various technologies and endpoints to create a seamless booking experience.

## Table of Contents

- [Project Overview](#project-overview)
- [Getting Started](#getting-started)
- [Authentication](#authentication)
- [Categories](#categories)
- [Offerings](#offerings)
- [Booking](#booking)
- [Notifications](#notifications)
- [Payment](#payment)
- [Wishlist](#wishlist)
- [Contact](#contact)

---

## Project Overview

This booking system project is built with Node.js and MongoDB, featuring a range of functionalities for both users and administrators. It offers secure authentication, category management, offering listings, booking management, notifications, payment processing, and wishlist functionality. The project is structured with various routers, middleware, and controllers to handle each aspect efficiently.

### Technologies Used

The project utilizes a stack of technologies, including Express.js, Passport.js, Stripe for payment processing, and various other npm packages. Below is a list of key technologies and packages used:

- Node.js
- Express.js
- MongoDB
- Passport.js
- Stripe
- Winston Logger
- Nodemailer
- and more...

## Getting Started

To run this project on your local machine, follow these steps:

1. Clone the repository:
   ```bash
   git clone https://github.com/BedoNassef71/booking-system.git
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Set up your environment variables by creating a `.env` file.

4. Start the development server:
   ```bash
   npm start
   ```

5. Access the application in your web browser at `http://localhost:3000` (or the specified port).

---

## Authentication

The authentication system in this project allows users to create accounts, log in, and use Google OAuth 2.0 for authentication. It features user roles and guards to secure routes.

For detailed information on authentication endpoints, please refer to the [Authentication Documentation](./auth.md).

---

## Categories

The Categories section provides the ability to manage and view categories. Administrators can create, update, and delete categories.

For detailed information on category-related endpoints, please refer to the [Categories Documentation](./categories.md).

---

## Offerings

Offerings are the core of this system, and they can be managed by administrators. Users can view and book offerings based on availability.

For detailed information on offering-related endpoints, please refer to the [Offerings Documentation](./offering.md).

---

## Booking

The Booking section allows users to create bookings, view their bookings, and manage booking status. It also includes payment processing through Stripe.

For detailed information on booking-related endpoints, please refer to the [Booking Documentation](./booking.router.md).

---

## Notifications

The Notifications feature allows users to view their notifications and manage them. Notifications are an essential part of keeping users informed about their bookings.

For detailed information on notification-related endpoints, please refer to the [Notifications Documentation](./notifications.md).

---

## Payment

Payment processing is integrated into this system using Stripe. Users can make payments for their bookings securely.

For detailed information on payment-related endpoints, please refer to the [Payment Documentation](./payment.md).

---

## Wishlist

Users can manage their wishlist by adding and removing items. It provides a way for users to save offerings for future reference.

For detailed information on wishlist-related endpoints, please refer to the [Wishlist Documentation](./wishlist.md).

---

## Contact

If you have any questions or need assistance, feel free to reach out to [Your Name](mailto:bedonassef71@gmail.com).

---

## Happy booking!