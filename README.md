# Book-Shop

Developed an Express application with TypeScript, integrating MongoDB with Mongoose to manage a Book Store. Ensured data integrity using Mongoose schema validation.

- technologies: TypeScript, Node.js, Express.js, MongoDB, Mongoose, Validator

## Project Setup:

- Created an Express project with TypeScript.
- A MongoDB database has been set up to store **Products** (books) and **Orders**.
- Used Mongoose for schema definition and data operations.
- Implemented CRUD operations for both books and orders.

## How to run

- First, clone the repo and install the dependencies using `npm install` command.
- then, build the project using `npm run build` command.
- at last, run the project using `npm run start:dev` command.

## Live link

- https://book-shop-mu-inky.vercel.app/

## API endpoints and methods

1. Create a Book ---> **Endpoint:** **`/api/products`**, **Method:** `POST`

2. Get All Books ---> **Endpoint:** **`/api/products`**, **Method:** `GET`

3. Get a Specific ---> Book **Endpoint:** **`/api/products/:productId`**, **Method:** `GET`

4. Update a Book ---> **Endpoint:** **`/api/products/:productId`**, **Method:** `PUT`

5. Delete a Book ---> **Endpoint:** **`/api/products/:productId`**, **Method:** `DELETE`

6. Order a Book ---> **Endpoint:** **`/api/orders`**, **Method:** `POST`

7. Calculate Revenue from Orders (Aggregation) ---> **Endpoint:** **`/api/orders/revenue`**, **Method:** `GET`
