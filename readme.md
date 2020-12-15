# Record collection API

A simple REST API with CRUD functions to store your music records in a local MongoDB database. Having a program like Postman is advised!

## How to run

1. clone this repository
2. Run `npm install`
2. Run `node index.js`
4. Navigate to localhost:8080/api/records to view the app
5. Use program like Postman to add records to database

## Database values

* name
* artist
* genre
* label
* price

### Dependencies

* Body Parser
* Express js
* Mongoose