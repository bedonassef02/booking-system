---

# Offering Service

The Offering Service manages offerings available to users. These offerings can be booked or interacted with by users in the application.

## Table of Contents

- [Schema](#schema)
- [Middleware](#middleware)
- [Endpoints](#endpoints)
- [Functions](#functions)

## Schema

The Offering schema defines the structure of offerings in the application:

- `name` (String, required): The name of the offering.
- `description` (String, required): A description of the offering.
- `price` (Number, required): The price of the offering.
- `location` (String, optional): The location where the offering is available.
- `capacity` (Number, required): The maximum capacity of the offering.
- `images` (Array of Strings, required): An array of image URLs associated with the offering.
- `facilities` (Array of Strings, optional): Facilities available with the offering.
- `days` (Number, required): Number of days the offering is available.
- `category` (Reference to Category): The category to which the offering belongs.

## Middleware

### `images`

- **Description:** Middleware to process and associate image URLs with offerings.
- **Usage:** Used when creating an offering to associate image URLs.

## Endpoints

### Create Offering [POST]

- **Endpoint:** `/offerings`
- **Description:** Create a new offering with the provided details.
- **Request Body:**
  - `name` (String, required): The name of the offering.
  - `description` (String, required): A description of the offering.
  - `price` (Number, required): The price of the offering.
  - `location` (String, optional): The location where the offering is available.
  - `capacity` (Number, required): The maximum capacity of the offering.
  - `images` (Array of Strings, required): An array of image URLs associated with the offering.
  - `facilities` (Array of Strings, optional): Facilities available with the offering.
  - `days` (Number, required): Number of days the offering is available.
  - `category` (Reference to Category): The category to which the offering belongs.

### Get All Offerings [GET]

- **Endpoint:** `/offerings`
- **Description:** Retrieve a list of all offerings.
- **Query Parameters:**
  - `page` (Number, optional): Page number for pagination.
  - `limit` (Number, optional): Number of offerings per page.
  - `sort` (String, optional): Sorting criteria.
  - `filter` (Object, optional): Additional filters.
  - `keyword` (String, optional): Keyword for searching offerings.

### Get Offering by ID [GET]

- **Endpoint:** `/offerings/:id`
- **Description:** Retrieve a specific offering by its ID.

### Update Offering by ID [PATCH]

- **Endpoint:** `/offerings/:id`
- **Description:** Update a specific offering by its ID.
- **Request Body:** Fields to be updated.

### Delete Offering by ID [DELETE]

- **Endpoint:** `/offerings/:id`
- **Description:** Delete a specific offering by its ID.

## Functions

The Offering Service includes several functions for managing offerings:

- `create`: Create a new offering with the provided details.
- `findAll`: Retrieve a list of all offerings based on query parameters.
- `findOne`: Retrieve a specific offering by its ID.
- `update`: Update a specific offering by its ID with the provided data.
- `remove`: Delete a specific offering by its ID.

Please refer to the corresponding controller functions for detailed implementation.

---