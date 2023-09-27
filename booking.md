# Node.js MongoDB Booking Service

![Booking Service](https://uploads-ssl.webflow.com/5c29380b1110ec92a203aa84/5c4400a527353e362727fe90_c6d8491e8ed0a1c67408299a8798e6d8.png)

Welcome to the Node.js MongoDB-based Booking Service! This service is a critical component of the Booking System, designed to handle booking-related operations seamlessly. It integrates with other system components to provide users with a reliable booking experience.

## Table of Contents

- [Overview](#overview)
- [Create a Booking](#create-a-booking)
- [Find All Bookings](#find-all-bookings)
- [Find a Booking by ID](#find-a-booking-by-id)
- [Update Booking Status](#update-booking-status)
- [Update Booking Payment Status](#update-booking-payment-status)
- [Files and Components](#files-and-components)

---

## Overview

The Booking Service is responsible for managing bookings made by users. It offers functionalities for creating, retrieving, and updating booking information. This README provides detailed information about the service's capabilities.

### Technologies Used

The service is built using Node.js and utilizes MongoDB for data storage. It also includes pagination for efficient handling of large datasets.

## Create a Booking

To create a booking, the service provides a `create` function. Users can specify booking details such as the offering, time, duration, and additional notes.

Example:

```javascript
const booking = await bookingService.create({
  user: 'user_id',
  offering: 'offering_id',
  time: '2023-09-28T10:00:00',
  duration: 60,
  details: 'Meeting room booking.',
});
```

## Find All Bookings

The `findAll` function allows users to retrieve their bookings based on various filters and pagination parameters.

Example:

```javascript
const query = {
  user: 'user_id',
  filter: { status: 'confirmed' },
  page: 1,
  limit: 10,
  sort: '-createdAt',
};

const bookings = await bookingService.findAll({ user: 'user_id', query });
```

## Find a Booking by ID

Users can find a specific booking by its ID using the `findOne` function. It ensures that the booking belongs to the user.

Example:

```javascript
const bookingId = 'booking_id';
const user = 'user_id';

const booking = await bookingService.findOne({ id: bookingId, user });
```

## Update Booking Status

Administrators can update the status of a booking using the `updateStatus` function. This is useful for confirming or canceling bookings.

Example:

```javascript
const bookingId = 'booking_id';
const newStatus = 'confirmed';

const updatedBooking = await bookingService.updateStatus({ id: bookingId, status: newStatus });
```

## Update Booking Payment Status

The service also allows updating the payment status of a booking. This is essential for tracking payment completion.

Example:

```javascript
const bookingId = 'booking_id';
const newPaymentStatus = 'completed';

const updatedBooking = await bookingService.updatePayment({ id: bookingId, payment: newPaymentStatus });
```

## Files and Components

- **booking.service.js**: The main service file containing functions for booking operations.
- **models/booking.model.js**: The Mongoose schema and model for bookings.
- **utils/constants/payment.js**: Defines constants for booking payment statuses.
- **utils/helpers/pagination/pagination-details.js**: Utility for pagination details.
- **dto/create-booking.dto.js**: Data transfer object for creating bookings.
- **dto/update-booking-status.dto.js**: Data transfer object for updating booking status.

This concludes the overview of the Booking Service and its functionalities. It plays a crucial role in managing and maintaining booking-related data within the system.
```

Please adjust the content as needed and include any additional details or specific instructions related to your booking service.