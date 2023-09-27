
---

# Categories Service

The Categories Service is responsible for managing categories that can be associated with offerings in the application. Categories help organize and categorize offerings, making it easier for users to find what they are looking for.

## Table of Contents

- [Schema](#schema)
- [Endpoints](#endpoints)
- [Functions](#functions)
- [Controllers](#controllers)
- [Usage](#usage)

## Schema

The Category schema defines the structure of categories in the application:

- `name` (String, required, max length: 32): The name of the category.
- `slug` (String, required, unique): The slugified version of the category name, used for unique identification.

## Endpoints

### Create Category [POST]

- **Endpoint:** `/categories`
- **Description:** Create a new category with the provided name.
- **Request Body:**

  - `name` (String, required): The name of the category.

### Get All Categories [GET]

- **Endpoint:** `/categories`
- **Description:** Retrieve all categories.
- **Response:** An array of all categories.

### Get Category by Slug [GET]

- **Endpoint:** `/categories/:slug`
- **Description:** Retrieve a category by its slug.
- **Response:** The found category.

### Update Category [PATCH]

- **Endpoint:** `/categories/:id`
- **Description:** Update the name of a category with the provided ID.
- **Request Body:**

  - `name` (String, required): The new name for the category.

### Delete Category [DELETE]

- **Endpoint:** `/categories/:id`
- **Description:** Delete a category by its ID.

## Functions

The Categories Service provides the following functions for category management:

- `create({ name, slug })`: Create a new category with the provided name and slug.
- `findAll()`: Retrieve all categories.
- `findOne({ slug })`: Retrieve a category by its slug.
- `findById({ id })`: Retrieve a category by its ID.
- `remove({ id })`: Delete a category by its ID.
- `update({ id, name, slug })`: Update the name of a category by its ID.

## Controllers

The Categories Service includes controllers that handle HTTP requests and responses for category management:

- `create`: Create a new category.
- `findAll`: Retrieve all categories.
- `findOne`: Retrieve a category by its slug.
- `remove`: Delete a category by its ID.
- `update`: Update the name of a category by its ID.

## Usage

To use the Categories Service, make HTTP requests to the specified endpoints to create, retrieve, update, or delete categories as needed. This service helps organize and categorize offerings, enhancing the user experience.

---
