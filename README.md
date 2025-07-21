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
   

   

   
