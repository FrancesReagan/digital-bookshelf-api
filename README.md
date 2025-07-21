__Digital Bookshelf API__
A RESTful API for managing a digital bookshelf inventory, built with Node.js, Express, and MongoDB.

_Features_
*full Create Read Update Delete operation for books listed
*User Management with reviews and likes
*Input validation and error handling
*MongoDB integration with Mongoose

_Install_
*git clone <repo url>
*cd digital-bookshelf-api

install dependencies
*npm i express, mongoose, dotenv, nodemon

Set up env variables --create `.env` file:
`MONGODB_URL or URI =your_mongodb_connection_string`
`PORT = 3000`

Start the server
`npm run dev`

---------------------------------------------------------------------------
`API ENDPOINTS`
`BOOKS`
method: GET
endpoint: /api/books
description: get all books

method: GET
endpoint: /api/books/:id 
description: get book by ID

method: POST
endpoint: /api/books
description: create a new book

method: PUT
endpoint: /api/books/:id 
description: update the book

method: DELETE
endpoint: /api/books/:id 
description: delete a book

method: POST
endpoint: /api/books/:id/like
description: like a book

-----------------------------------------------
`USERS`
method: GET
endpoint: /api/user/:id 
description: get a user by ID

method: POST
endpoint: /api/user
description: create new user

method: POST
endpoint: /api/user/:userId/reviews/bookId
description: add a book review

method: POST
endpoint: /api/user/:userId/likes/:bookId
description: add a book to user's likes

--------------------------------------
Example:
Book Schema
In `Postman` create a new HTTP Request
`POST` 
localhost:3000/api/books
then go to `body`, `raw`, `JSON`
type in the body: 
{
   "title": "The Great Gatsby",
   "author": "F.Scott Fitzgerald",
   "isbn": "9780743273565",
   "publishedDate": "1925-04-10"
}

-----------------
GET all books
/api/books 
get a book id

--------------------
Update a book:

`PUT` request 
/api/books/book_id_here
then in the `body`, `raw`, `JSON` type:
{
  "inStock": false
}

----------------------------------------------





__Reflections__
1. Why is it beneficial to separate routes, models, and database connection into different directories?
   This practice enables each part to have a single responsiblity---i.e. "Separation of concerns"
   -models: define data structure and validation.
   -routes: handle HTTP requests and responses.
   -database: manage connection logic.
   The benefits of this practice are: maintainability (easy to find and fix issues); reusability (models can be used across different routes); scalable (easy to
   add new features without affecting the existing code); team collaboration (different developers can work on different parts); testing (each component can be tested independently).

--------------------------------------------------------------------------------------
What is the difference between PUT and PATCH HTTP methods? --which one does your `PUT /:id` endpoint most closely resemble?
 -`PUT` -- this method is entire replacement of resource with new data.
 -`PATCH` -- partially updates specific fields of a resource.

My `PUT/:id` endpoint most closely resemebles `PATCH` as it only updates the fields provided in `req.body`; it doesn't replace the entire document; missing fields in the request body are lfet
unchanged.; it uses `findByIdAndUpdate()` which does partial updates.


2. In the `DELETE` route, what is a good practice for the response you send back to the client after a successful deletion? Should you send the deleted object, a simple success message,
   or something else? Why?

   A good practice is to send a simple success message ( like { message: "Book deleted" }).
   This is best because it provides: security (doesn't expose deleted data unnecessarily); performance (smaller response payload); clarity (clear confirmation that a deletion is successful);
   standard practice (most REST APIs use sucess messages for DELETE options).  No, you should not send the deleted object because the client already has the data before deleting, and it inscreases
   response size unnecessarily, and could expose senstive information in logs. 
   

   

   
