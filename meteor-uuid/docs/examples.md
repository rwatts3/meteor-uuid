
#Meteor UUID `Examples`
---

**Examples**

*Generate a new UUID* : **basic**
```js
var customerID = uuid.new();
```
*Check if the new UUID was generated* : **basic**
```js
var customerID = uuid.new();
console.log(customerID);
//The customerID should be a unique hash.
```
*Create a UUID using `aldeed:simple-schema`* : **advanced**
```js
Books = new Mongo.Collection("books");

var Schemas = {};

Schemas.Book = new SimpleSchema({
    title: {
        type: String, 
        label: "Title",
        max: 200
    }
    uniqueID: function () {
        return uuid.new();
    }
});
```